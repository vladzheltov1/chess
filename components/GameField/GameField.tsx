import { Figure } from "@/components/Figure";
import { DEFAIULT_FIELD } from "@/constants/gameField";
import { DndContext, DragItem, DropArea } from "@/lib/DragAndDrop";
import { FigureBaseColors, FigureColors } from "@/types/figure";
import { GameFieldType } from "@/types/gameField";
import { FC, useState } from "react";
import gameFieldStyles from "./GameField.module.scss";

export interface IGameFieldProps {
    fieldPlates?: GameFieldType,
    playerColor?: FigureColors
}

export const GameField: FC<IGameFieldProps> = (props) => {
    const {fieldPlates = DEFAIULT_FIELD, playerColor = FigureBaseColors.white} = props as IGameFieldProps;

    const [field, setField] = useState(fieldPlates);
    
    const normalizedField = playerColor === FigureBaseColors.white ? field : field.reverse();
    return (
        <div className={gameFieldStyles.gameField}>
            <DndContext field={field} setStateCallback={setField} >
                {normalizedField.map((item, index) => (
                    <DropArea key={index} droppableId={`${index}`} className={gameFieldStyles.gameBlock}>
                        {item.type && (
                            <DragItem draggableId={`figure-${index}`} index={index}>
                                <Figure type={item.type} color={item.color} />
                            </DragItem>
                        )}
                    </DropArea>
                ))}
            </DndContext>
        </div>
    )
}

export default GameField;