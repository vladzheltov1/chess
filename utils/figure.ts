import { FIGURE_AVATAR_PATH } from "@/constants/figure";
import { FigureType } from "@/types/figure";

export const getFigureAvatarPath = (figure: FigureType): string => {
    const {type, color} = figure;

    const avatarPath = `${FIGURE_AVATAR_PATH}${type}_${color}.png`;

    return avatarPath;
}