import { FIGURE_AVATAR_PATH } from "@/constants/figure";
import { FigureType } from "@/types/figure";
import { GameFieldType } from "@/types/gameField";

export const getFigureAvatarPath = (figure: FigureType): string => {
    return `${FIGURE_AVATAR_PATH}${figure.type}_${figure.color}.png`;
}

export const getAvailableMovements = (figure: FigureType, gameField: GameFieldType): Array<number> => {
    // TODO
    return [1];
}