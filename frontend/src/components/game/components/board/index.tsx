import React from "react";
import { IBoard, IBoardItem, Player, TotalPlayers, TypeGame } from "../../../../interfaces";
import { ETypeGame } from "../../../../utils/constants";
import { BoardWrapper, BoardHeader, BoardTable} from "./components";

interface BoardProps {
    items: IBoard;
    players: Player[];
    thrownDice?: boolean;
    turn?: TotalPlayers;
    typeGame?: TypeGame;
    handleClick: (item: IBoardItem, player: TotalPlayers) => void;
  }

  const Board = (props: BoardProps) => (
    <BoardWrapper>
      <BoardHeader typeGame={props.typeGame as TypeGame} />
      <BoardTable {...props} />
    </BoardWrapper>
  );

export default React.memo(Board);