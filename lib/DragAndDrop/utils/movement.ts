import { NullFigure } from "@/constants/figure";
import { GameFieldType } from "@/types/gameField";
import { getPossibleMovements } from "@/utils/movement";
import { DropResult } from "react-beautiful-dnd";

export const reorderFigures = (result: DropResult, gameField: GameFieldType) => {
    const { destination, source } = result;

    if (!destination) {
        return gameField;
    }
    
    const figure = gameField[source.index];

    const sourceIndex = Number(source.droppableId);
    const destinationIndex = Number(destination.droppableId);

    const possibleMovements = getPossibleMovements(gameField, sourceIndex);

    if(!possibleMovements.includes(destinationIndex)){
        return [...gameField];
    }

    gameField[sourceIndex] = NullFigure;
    gameField[destinationIndex] = figure;

    return [ ...gameField ];
}