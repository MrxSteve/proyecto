import "./styles.css";
import React from "react";
import { PageWrapper } from "../wrappers";
import Logo from "../logo";
import Links from "./components/links";
import { Options } from "./components";
import CircularButton from "../circularButton";
import { useSounds } from "../../hooks";

const LobbyGame = () => {

    const {withSound, toggleSound} = useSounds();

    return(
        <PageWrapper showBack={false}>
            <div className="lobby-game">
                <CircularButton 
                type={withSound ? "sound-on" : "sound-off"}
                onClick={toggleSound}
                />
                <Logo/>
                <Links/>
                <Options/>
            </div>
        </PageWrapper>
    ) 
};

export default React.memo(LobbyGame);