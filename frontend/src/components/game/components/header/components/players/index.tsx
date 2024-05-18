import "./styles.css";
import React from "react";
import type { HeaderCountdown, Player, TotalPlayers } from "../../../../../../interfaces";
import { ScoreHeader } from "..";

interface PlayersHeaderProps {
    countdown?: HeaderCountdown;
    players: Player[];
    turn: TotalPlayers;
  }

const PlayersHeader = ({countdown, players, turn = 1}: PlayersHeaderProps) => {
    return (
        <div className="header-players">
            {players.map((player, index) => {
                return <ScoreHeader 
                countdown={countdown}
                key={player.id} 
                isSelected={turn === index + 1} 
                player={player}
                turn={turn}/>
            })}
        </div>
    );
};

export default React.memo(PlayersHeader);