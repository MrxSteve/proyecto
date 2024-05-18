import React, { useState } from "react";
import { BoardItem } from "./components/board/components";
import { DiceState, DiceTheme, IBoardItem, ItemSelectedBoard, TotalPlayers, TypeButtonGame, type TypeGame, type valueDice } from "../../interfaces";
import {Board, Buttons, Dices, GameWrapper, Header} from "./components";
import { calculateBoardValues, deselectBoardItemBoard, getInitalBoardState, getInitialDiceValues, getInitialPlayers, rollDice, selectDice, selectItemBoard, totalDiceAvailable } from "./helpers";
import { EDiceState, EDiceTheme, ETypeButtonGame, ETypeGame, INITIAL_ITEM_SELECTED, TOTAL_THROWING } from '../../utils/constants';
import board from "./components/board";

interface GameProps {
    typeGame?: TypeGame;
    initialTurn?: TotalPlayers;
}

const Game = ({typeGame = ETypeGame.FRIEND, initialTurn=1}: GameProps) => {

    //Guarda el estado del boars
    const [boardState, setBoardState] = useState(getInitalBoardState);

    // Estado de los jugadores (maximo seran dos)
    // setPlayers
    const [players] = useState(()=> getInitialPlayers(typeGame));

    //Para el turno setTurn
    const [turn] = useState<TotalPlayers>(typeGame !== ETypeGame.SOLO ? initialTurn: 1);

    //Estado de los dados
    const [diceValues, setDiceValues] = useState(() => getInitialDiceValues());

    //Estado de animacion de los dados
    const [dieState, setDieSate] = useState<DiceState>(EDiceState.HIDE);

     // Guardará el estado del total de lanzamientos 
    const [throwing, setThrowing] = useState(TOTAL_THROWING);

    // Para saber si se ha logrado un Yatzy
    const [isYatzy, setIsYatzy] = useState(false);

    // Para guardar el ítem seleccionado en el board
    const [itemSelected, setItemSelected] = useState<ItemSelectedBoard>(
        INITIAL_ITEM_SELECTED
    );
  // Estado para saber si el juego ha terminado
  const [gamerOver, setGamerOver] = useState(false);

    /**
    * Evento que se ejecuta una vez ha terminado de girar los dados
    */
    const handleDoneDices = () => {
        
        const {copyBoardState, isYatzy: newIsYatzy} = calculateBoardValues(boardState, diceValues, turn);

        setBoardState(copyBoardState);
        setIsYatzy(newIsYatzy);

        setDieSate(EDiceState.STOPPED);
        setItemSelected(INITIAL_ITEM_SELECTED);

        //TODO: Mostrar mensaje se ha obtenido un yatzy
        if (newIsYatzy) {
            console.log("Has obtenido un yatzy");
        }
    };

    /**
    * Función que establece la selección de un dado
    * @param index
    */
   const handleSelectDice = (index: number) => {
        setDiceValues(selectDice(diceValues, index));
    };

    /**
    * Evento para los botones de girar los dados
    * y seleccionar el ítem del board
    * @param type
    */
    const handleClickButtons = (type:TypeButtonGame) => {
        if (type === ETypeButtonGame.ROLL) {

            if (itemSelected.index >= 0) {
                setBoardState((board) => deselectBoardItemBoard(board, itemSelected, turn));
            }

            setDiceValues(() => rollDice(diceValues));
            setDieSate(EDiceState.SPIN);
            setThrowing((value) => value - 1);
        }
    };

    /**
   * Evento para la selección de un elemento en el board...
   * @param item
   * @param player
   */
  const handleClickBoard = (item: IBoardItem, player: TotalPlayers) => {
    const { changeState, copyBoardState, newItemSelected } = selectItemBoard(
      boardState,
      itemSelected,
      item,
      player,
      isYatzy
    );

    if (changeState) {
      setBoardState(copyBoardState);
      setItemSelected(newItemSelected);
    }
  };


    /**
    * Función que retorna cuando el contador de tiempo ha finalizado
    * Sólo se ejecutará el tipo Online...
    * @param player
    */
    const onEndCountdown = (player: TotalPlayers) => {
        console.log({player});
    };

    /**
     * Solo se agrega el cronometro cuando es online
     */
    const countdown = typeGame === ETypeGame.ONLINE ? {stop: false, onEndCountdown}: undefined;

    // Para saber si es el caso donde la interfaz de ambos lados
    // se habilita para cuando hay dos jugadores, en este caso, sólo
    // aplica cuando se está jugando con un amigo
    const turnsEnabledTwoPlayers = turn === 1 || typeGame === ETypeGame.FRIEND;

    /**
    * Se bloquea el contenido para el jugador uno
    * útil cuando se juega contra un BOT o ONLINE
    * Se aplica siempre y cuando no sea game over
    * y además que sea el turno dos
    */
    const blockContent =
    (typeGame === ETypeGame.BOT || typeGame === ETypeGame.ONLINE) && turn === 2;

    /**
    * Bloquea el botón que lanza los dados
    */
    const disabledRoll = 
    blockContent || 
    dieState === EDiceState.SPIN || 
    throwing <= 0 ||
    totalDiceAvailable(diceValues) === 0;

    /**
    * Bloquear el botón que acepta la selección de un ítem
    */
    const disabledPlay =
    blockContent || 
    dieState === EDiceState.SPIN ||
    itemSelected.index < 0;

    /**
    * Sólo muestra el botón de play si:
    * No se ha acabdo el juego
    * Si los dados están visibles
    * Además que sea el turno 1 o que sea de tipo jugar con amigo
    */
    const showPlay =dieState !== EDiceState.HIDE && turnsEnabledTwoPlayers;

    /**
   * Sólo será blanco para dos juagdores si s esta jugando con un amigo
   * De lo contrario, cuando tiene el turno el jugador dos, de los otros tipos
   * el color cambiará a rojo
   */
  const diceTheme: DiceTheme = EDiceTheme[turnsEnabledTwoPlayers ? "WHITE" : "RED"];



  // Para validar si se muestra los valores de la tabla...
  // Cuando es el turno del jugador dos, salvo que se este jugando con un amigo
  // no se mostrará estos valores
  const thrownDice = turnsEnabledTwoPlayers && dieState === EDiceState.STOPPED;

    return (
        <GameWrapper blockContent={blockContent}>
            <Header countdown={countdown} players={players} turn={initialTurn}/>
            <Board
                items={boardState}
                players={players}  
                thrownDice={thrownDice}
                turn={1}
                typeGame={typeGame}
                handleClick={handleClickBoard} 
            />
            <Dices 
            dieState={dieState} 
            values={diceValues} 
            diceTheme={diceTheme}
            handleDoneDices={handleDoneDices}
            handleSelectedDice={handleSelectDice}
            />
            <Buttons
            disabledPlay={disabledPlay}
            disabledRoll={disabledRoll}
            showPlay={showPlay}
            throwing={throwing}
             handleClick={handleClickButtons}/>
        </GameWrapper>
    );
};

export default React.memo(Game);