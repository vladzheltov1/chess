import { pawnStartingPositions } from "@/constants/gameField";
import { FigureBaseColors, FigureBaseTypes } from "@/types/figure";
import { GameFieldType } from "@/types/gameField";

const isFirstPawnMovement = (index: number) => {
    return pawnStartingPositions.includes(index + 1);
}

export const getPossibleMovements = (gameField: GameFieldType, index: number): Array<number> => {
    const figure = gameField[index];

    const possibleMovements: Array<number> = [];

    if(figure.type === FigureBaseTypes.pawn){
        if(isFirstPawnMovement(index)){
            if(figure.color === FigureBaseColors.white){
                possibleMovements.push(index - 16);
            } else {
                possibleMovements.push(index + 16);
            }
        }

        if(figure.color === FigureBaseColors.white){
            possibleMovements.push(index - 8);
        } else {
            possibleMovements.push(index + 8);
        }
    }

    return possibleMovements.filter(value => {
        const occupiedTile = gameField[possibleMovements[value]];

        if(occupiedTile.type === null || occupiedTile.color !== figure.color){
            return value;
        }
    });
}