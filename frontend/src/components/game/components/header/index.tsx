import React from "react";
import { HeaderWrapper, PlayersHeader } from "./components";
import CircularButton from "../../../circularButton";
import type { HeaderCountdown, Player, TotalPlayers } from "../../../../interfaces";
import { handleBack } from "./helpers";

interface HeaderProps {
    countdown?: HeaderCountdown;
    players: Player[];
    turn: TotalPlayers;
  }

const Header = (props: HeaderProps) => {
    return (
        <HeaderWrapper>
            <CircularButton type="back" onClick={() => {
                // TODO: implementar router
                handleBack((action) => console.log(action));
            }}></CircularButton>
            <PlayersHeader {...props}/>
            <CircularButton type="sound-on" onClick={() => console.log("sound-on")}></CircularButton>
        </HeaderWrapper>
    );
};

export default React.memo(Header);