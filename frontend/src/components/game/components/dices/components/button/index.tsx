import "./styles.css";
import React, { useEffect, useRef } from "react";
import { DiceState, DiceTheme, DiceValue } from "../../../../../../interfaces";
import { EDiceState, EDiceTheme } from "../../../../../../utils/constants";
import ReactDice, { ReactDiceRef } from "react-dice-complete";

interface DiceButtonProps {
    dice: DiceValue;
    dieState: DiceState;
    diceTheme: DiceTheme;
    handleDone: () => void;
    handleSelectedDice: (index: number) => void;
}

type Theme = { [key in DiceTheme]: { dotColor: string; faceColor: string } };

const theme: Theme = {
  WHITE: {
    dotColor: "black",
    faceColor: "white",
  },
  RED: {
    dotColor: "white",
    faceColor: "red",
  },
};

const DiceButton = ({
    dice = {index: 0, value: 0, selected: false},
    dieState = EDiceState.HIDE,
    diceTheme = EDiceTheme.WHITE,
    handleDone,
    handleSelectedDice,
}: DiceButtonProps) => {

    // Guarda la referencia del dado para poder usar la función de tipo rollAll
  // https://www.npmjs.com/package/react-dice-complete
    const refDice = useRef<ReactDiceRef>(null);

     // Determina la velocidad de gira de cada dado
     // Para que cada dado tenga un tiempo distinto de giro y por ende tengan valores distintos
    const rollTime =
    dieState === EDiceState.SPIN && !dice.selected
    ? 0.5 + dice.index * 0.15
    : 0;

    // Accecibilidad para el titulo del boton
    const title = 
    `Dice ${dice.index + 1}` + 
    (dieState === EDiceState.STOPPED ? ` = ${dice.value}` : "");

    // Asocia la clase de selección del dado
    // Además de la clase para ocultarlo...
    const className = `dices-button ${dice.selected ? "selected" : ""} ${
        dieState === EDiceState.HIDE ? "hide" : ""
      }`;    

    /**
    * Bloquea el botón si el dado está oculto o si está rotanto
    * O si el tema es rojo indicando que es otro jugador...
    */
    const disabledButton =
    !(dieState === EDiceState.STOPPED) || diceTheme === EDiceTheme.RED;


    // Establece el color del dado
    const { dotColor, faceColor } = theme[diceTheme];

    /**
    * Efecto que se ejecuta cuando el valor del dado ha cambiado...
    */
    useEffect(() => {
    const { value, selected } = dice;

    // Establece si debe girar el dado, en este caso con el valor de value
    // pero si está seleccionado no hará ninguna acción...
    if (value !== 0 && !selected) {
      refDice.current?.rollAll([value]);
    }
  }, [refDice, dice]);

    return (
        <button 
            className={className} 
            onClick={() => handleSelectedDice(dice.index)}
            disabled={disabledButton}
            title={title}
            >
            <ReactDice 
                dieSize={52}
                disableIndividual
                numDice={1} 
                dotColor={dotColor}
                faceColor={faceColor}
                outlineColor="white"
                ref={refDice}
                rollDone={handleDone}
                rollTime={rollTime}
                />
        </button>
    );
};

export default React.memo(DiceButton);