import React from "react";
import { HeaderWrapper, PlayersHeader } from "./components";
import CircularButton from "../../../circularButton";
import type { HeaderCountdown, Player, TotalPlayers } from "../../../../interfaces";
import { handleBack } from "./helpers";
import { useNavigate } from "react-router-dom";
import { useSounds } from "../../../../hooks";

interface HeaderProps {
    countdown?: HeaderCountdown;
    players: Player[];
    turn: TotalPlayers;
  }

const Header = (props: HeaderProps) => {

    const {withSound, toggleSound} = useSounds();
    const navigate = useNavigate();

    return (
        <HeaderWrapper>
            <CircularButton type="back" onClick={() => {
                handleBack((action) => action && navigate("/"));
            }}></CircularButton>
            <PlayersHeader {...props}/>
            <CircularButton 
                type={withSound ? "sound-on" : "sound-off"}
                onClick={toggleSound}></CircularButton>
        </HeaderWrapper>
    );
};

export default React.memo(Header);