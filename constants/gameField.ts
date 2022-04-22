import { NullFigure } from "@/constants/figure";
import { FigureBaseColors, FigureBaseTypes } from "@/types/figure";
import { GameFieldType } from "@/types/gameField";

export const DEFAIULT_FIELD: GameFieldType = [
    // Row 1
    {type: FigureBaseTypes.rook, color: FigureBaseColors.black},
    {type: FigureBaseTypes.knight, color: FigureBaseColors.black},
    {type: FigureBaseTypes.bishop, color: FigureBaseColors.black},
    {type: FigureBaseTypes.queen, color: FigureBaseColors.black},
    {type: FigureBaseTypes.king, color: FigureBaseColors.black},
    {type: FigureBaseTypes.bishop, color: FigureBaseColors.black},
    {type: FigureBaseTypes.knight, color: FigureBaseColors.black},
    {type: FigureBaseTypes.rook, color: FigureBaseColors.black},
    // Row 2
    {type: FigureBaseTypes.pawn, color: FigureBaseColors.black},
    {type: FigureBaseTypes.pawn, color: FigureBaseColors.black},
    {type: FigureBaseTypes.pawn, color: FigureBaseColors.black},
    {type: FigureBaseTypes.pawn, color: FigureBaseColors.black},
    {type: FigureBaseTypes.pawn, color: FigureBaseColors.black},
    {type: FigureBaseTypes.pawn, color: FigureBaseColors.black},
    {type: FigureBaseTypes.pawn, color: FigureBaseColors.black},
    {type: FigureBaseTypes.pawn, color: FigureBaseColors.black},
    // Row 3
    NullFigure,
    NullFigure,
    NullFigure,
    NullFigure,
    NullFigure,
    NullFigure,
    NullFigure,
    NullFigure,
    // Row 4
    NullFigure,
    NullFigure,
    NullFigure,
    NullFigure,
    NullFigure,
    NullFigure,
    NullFigure,
    NullFigure,
    // Row 5
    NullFigure,
    NullFigure,
    NullFigure,
    NullFigure,
    NullFigure,
    NullFigure,
    NullFigure,
    NullFigure,
    // Row 6
    NullFigure,
    NullFigure,
    NullFigure,
    NullFigure,
    NullFigure,
    NullFigure,
    NullFigure,
    NullFigure,
    // Row 7
    {type: FigureBaseTypes.pawn, color: FigureBaseColors.white},
    {type: FigureBaseTypes.pawn, color: FigureBaseColors.white},
    {type: FigureBaseTypes.pawn, color: FigureBaseColors.white},
    {type: FigureBaseTypes.pawn, color: FigureBaseColors.white},
    {type: FigureBaseTypes.pawn, color: FigureBaseColors.white},
    {type: FigureBaseTypes.pawn, color: FigureBaseColors.white},
    {type: FigureBaseTypes.pawn, color: FigureBaseColors.white},
    {type: FigureBaseTypes.pawn, color: FigureBaseColors.white},
    // Row 8
    {type: FigureBaseTypes.rook, color: FigureBaseColors.white},
    {type: FigureBaseTypes.knight, color: FigureBaseColors.white},
    {type: FigureBaseTypes.bishop, color: FigureBaseColors.white},
    {type: FigureBaseTypes.queen, color: FigureBaseColors.white},
    {type: FigureBaseTypes.king, color: FigureBaseColors.white},
    {type: FigureBaseTypes.bishop, color: FigureBaseColors.white},
    {type: FigureBaseTypes.knight, color: FigureBaseColors.white},
    {type: FigureBaseTypes.rook, color: FigureBaseColors.white},
];

export const pawnStartingPositions = [9, 10, 11, 12, 13, 14, 15, 16, 17, 49, 50, 51, 52, 53, 54, 55, 56];