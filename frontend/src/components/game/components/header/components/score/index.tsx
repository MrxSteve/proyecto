import "./styles.css";
import React from "react";
import { HeaderCountdown, Player, TotalPlayers } from "../../../../../../interfaces";
import { Countdown } from "..";
import ScoreCounter from "../../../scoreCounter";

interface ScoreHeaderProps {
    countdown?: HeaderCountdown;
    isSelected?: boolean;
    player: Player;
    turn?: TotalPlayers;
  }

const ScoreHeader = ({countdown, isSelected = false, player: {name, score}, turn = 1}: ScoreHeaderProps) => {
    return (
        <div className="header-players-item">
            <ScoreCounter 
            score={score}
            className={`header-players-item-score ${isSelected ? "selected" : ""}`} />
            <div className="header-players-item-name">{name}</div>
            {isSelected && countdown && (
                <div className="header-players-item-countdown">
                    <Countdown 
                    stopCounter={countdown.stop} 
                    handleEndCountdown={() => countdown.onEndCountdown(turn)}
                    />
                </div>)}
        </div>
    );
};

export default React.memo(ScoreHeader);