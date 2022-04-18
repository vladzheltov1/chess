import { GameFieldType } from "@/types/gameField";
import { Dispatch, SetStateAction } from "react";
import { DropResult } from "react-beautiful-dnd";

export const onDragEnd = (result: DropResult, gameField: GameFieldType, setStateCallback: Dispatch<SetStateAction<GameFieldType>>): void => {
    const data = reorderContainers(result, gameField);
    setStateCallback(data);
}

const reorderContainers = (result: DropResult, gameField: GameFieldType) => {
    const { destination, source } = result;

    if (!destination) {
        return gameField;
    }
    
    const figure = gameField[source.index];

    console.log(destination.index, source.index);

    // const droppableId = source.droppableId === gameField.droppableId ? source.droppableId : gameField.droppableId;

    // const [removed] = gameField[source.droppableId].splice(source.index, 1);
    // gameField[droppableId].splice(gameField.index, 0, removed);

    return [ ...gameField ];
}