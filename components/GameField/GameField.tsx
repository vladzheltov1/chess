import { Figure } from "@/components/Figure";
import { DEFAIULT_FIELD } from "@/constants/gameField";
import { FigureColors } from "@/types/figure";
import { GameFieldType } from "@/types/gameField";
import { FC } from "react";
import gameFieldStyles from "./GameField.module.scss";

export interface IGameFieldProps {
    fieldPlates?: GameFieldType,
    playerColor?: FigureColors
}

export const GameField: FC<IGameFieldProps> = (props) => {
    const {fieldPlates = DEFAIULT_FIELD, playerColor = "white"} = props as IGameFieldProps;
    
    const normalizedField = playerColor === "white" ? fieldPlates : fieldPlates.reverse();
    return (
        <div className={gameFieldStyles.gameField}>
            {normalizedField.map((item, index) => (
                <div key={index} className={gameFieldStyles.gameBlock}>
                    <Figure type={item.type} color={item.color} />
                </div>
            ))}
        </div>
    )
}

export default GameField;