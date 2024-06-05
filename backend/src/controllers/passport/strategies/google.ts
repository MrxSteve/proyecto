import { Profile } from "passport";
import CONFIG from "../../../config";
import GoogleStrategy from "passport-google-oauth2";
import type { CallbackAuth, DoneFunction } from "../../../interfaces";

// Interface for Google configuration (assuming CONFIG.GOOGLE is an object)
interface GoogleConfig {
  KEY: string;
  SECRET: string;
}

// Constants with types
const callbackURL: string = "/api/auth/google/callback";
const isEnabled: boolean = !!(CONFIG.GOOGLE?.KEY && CONFIG.GOOGLE?.SECRET); // Optional chaining

// Function to generate unique IDs (no changes)
const generateUniqueId = () => {
  // ... (existing code)
};

// Interface for social login configuration
interface SocialLoginConfig {
  isEnabled: boolean;
  callbackURL: string;
  routerURL: string;
  socialName: string;
  socialType: number;
  fields: { [key: string]: string };
  scope: { scope: string[] };
  auth: (cb: CallbackAuth) => GoogleStrategy.Strategy;
}

// Social login configuration for Google
const googleConfig: SocialLoginConfig = {
  isEnabled,
  callbackURL,
  routerURL: "/api/auth/google",
  socialName: "google",
  socialType: 3,
  fields: {
    name: "displayName",
    photo: "photos[0].value",
    token: "id",
    email: "email",
  },
  scope: { scope: ["profile", "email"] },
  auth(cb: CallbackAuth) {
    return new GoogleStrategy.Strategy(
      {
        clientID: (CONFIG.GOOGLE as GoogleConfig).KEY, // Type assertion for Google config
        clientSecret: (CONFIG.GOOGLE as GoogleConfig).SECRET,
        callbackURL,
      },
      (_: string, _2: string, profile: Profile, done: DoneFunction) => {
        const device_id = generateUniqueId();
        const device_name = `device-${Math.floor(Math.random() * 10000)}`;

        // Add device_id and device_name to the profile
        const extendedProfile: Profile = {
          ...profile,
          device_id,
          device_name,
        };

        // Call the done callback with the extended profile
        done({ profile: extendedProfile });
      }
    );
  },
};

export default googleConfig;
