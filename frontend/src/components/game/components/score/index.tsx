import "./styles.css";
import React from "react";
import type { Player } from "../../../../interfaces";

interface ScoreGameProps {
    players: Player[];
}
  
const ScoreGame = ({players}: ScoreGameProps) => {
    return (<div className="score-game">
        <div className="score-game-wraper">SCORE</div>
    </div>);
};

export default React.memo(ScoreGame);