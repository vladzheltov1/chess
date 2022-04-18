import { FIGURE_AVATAR_PATH } from "@/constants/figure";
import { FigureType } from "@/types/figure";

export const getFigureAvatarPath = (figure: FigureType): string => {
    return `${FIGURE_AVATAR_PATH}${figure.type}_${figure.color}.png`;
}