import { GameFieldType } from "@/types/gameField";
import { Dispatch, SetStateAction } from "react";
import { DropResult } from "react-beautiful-dnd";
import { reorderFigures } from "./movement";

export const onDragEnd = (result: DropResult, gameField: GameFieldType, setStateCallback: Dispatch<SetStateAction<GameFieldType>>): void => {
    const data = reorderFigures(result, gameField);
    setStateCallback(data);
}