import "./styles.css";
import React from "react";
import { PageWrapper } from "../wrappers";
import Logo from "../logo";
import Links from "./components/links";
import { Options } from "./components";
import CircularButton from "../circularButton";

const LobbyGame = () => {
    return(
        <PageWrapper showBack={false}>
            <div className="lobby-game">
                <CircularButton 
                type="sound-off"
                onClick={() => {
                    console.log("sonidos");
                }}
                />
                <Logo/>
                <Links/>
                <Options/>
            </div>
        </PageWrapper>
    ) 
};

export default React.memo(LobbyGame);