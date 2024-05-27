import "./styles.css";
import React, { useContext } from "react";
import { PageWrapper } from "../wrappers";
import Logo from "../logo";
import Links from "./components/links";
import { Options } from "./components";
import CircularButton from "../circularButton";
import { useSounds } from "../../hooks";
import UserContext from "../../provider/userContext";
import AvatarImage from "../avatarImage";

const LobbyGame = () => {

    const {withSound, toggleSound} = useSounds();
    const state = useContext(UserContext);

    return(
        <PageWrapper showBack={false}>
            <div className="lobby-game">
                {
                    state?.isAuth && (
                        <AvatarImage 
                        photo={state.user?.photo || ""}
                        name={state.user?.name || ""}
                        />
                    )
                }
                <CircularButton 
                type={withSound ? "sound-on" : "sound-off"}
                onClick={toggleSound}
                />
                <Logo/>
                <Links/>
                <Options isAuth={state?.isAuth ?? false}/>
            </div>
        </PageWrapper>
    ) 
};

export default React.memo(LobbyGame);