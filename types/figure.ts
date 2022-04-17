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

export type FigureType = FigureContructorType<FigureBaseTypes | null, FigureColors | null>