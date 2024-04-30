import React from "react";
import { BoardItem } from "./components/board/components";
import { valueDice } from "../../interfaces";

const Game = () => {
    return (
        <div>
            {new Array(6).fill(null).map((_, key) => {
                return( 
                    <BoardItem 
                    key={key} 
                    type="UPPER_SECTION" 
                    label={`Dice ${key + 1}`}
                    value={(key + 1) as valueDice}/>
                );
            })}

            <BoardItem type="LOWER_SECTION" value="THREE_KIND" />

        </div>
    );
};

export default React.memo(Game);