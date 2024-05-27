import "./styles.css";
import { PageWrapper } from "../wrappers";
import Logo from "../logo";
import React from "react";
import type { IAuthOptions } from "../../interfaces";
import AuthLinks from "./authLinks";

interface SocialAuthProps {
  authOptions: IAuthOptions[];
}

const SocialAuth = ({ authOptions = [] }: SocialAuthProps) => (
  <PageWrapper>
    <div className="social-auth">
      <Logo />
      <AuthLinks authOptions={authOptions} />
    </div>
  </PageWrapper>
);

export default React.memo(SocialAuth);