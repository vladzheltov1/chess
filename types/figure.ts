type FigureContructorType<T, C> = {
    type: T,
    color: C
};

export enum FigureBaseTypes {
    rook = "rook",
    knight = "knight",
    pawn = "pawn",
    king = "king",
    queen = "queen",
    bishop = "bishop"
};

export type FigureColors = "white" | "black";

/**
 * @deprecated
 * use FigureType instead
 */
export type DefaultFigure = FigureContructorType<FigureBaseTypes, FigureColors>;

/**
 * @deprecated
 * use FigureType instead
 */
export type NullFigure = FigureContructorType<null, null>;

export type FigureType = FigureContructorType<FigureBaseTypes | null, FigureColors | null>