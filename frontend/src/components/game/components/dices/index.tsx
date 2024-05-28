import React from "react";
import { DiceButton, DiceWrapper } from "./components";
import { DiceState, DiceTheme, DiceValue } from "../../../../interfaces";
import { EDiceState, EDiceTheme } from "../../../../utils/constants";
import { handleAllDiceComplete } from "./helpers";

interface DicesProps {
    values: DiceValue[];
    dieState: DiceState;
    diceTheme: DiceTheme;
    handleDoneDices: () => void;
    handleSelectedDice: (index: number) => void;
}

const Dices = ({
    values = [], 
    diceTheme = EDiceTheme.WHITE, 
    dieState = EDiceState.HIDE, 
    handleDoneDices,
    handleSelectedDice,
}: DicesProps) => {
    return (
        <DiceWrapper>
            {values.map((value) => {
                return ( 
                    <DiceButton 
                    dice={value} 
                    diceTheme={diceTheme}
                    dieState={dieState} 
                    handleSelectedDice={handleSelectedDice}
                    key={`dice-${value.index}`}
                    handleDone={() => {
                        if(dieState === EDiceState.SPIN){
                            handleAllDiceComplete(value.index + 1, values, handleDoneDices);
                        }
                    }}
                    />)
            })}
        </DiceWrapper>
    );
};

export default React.memo(Dices);