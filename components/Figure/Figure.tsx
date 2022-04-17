import type { FigureType } from "@/types/figure";
import { getFigureAvatarPath } from "@/utils/figure";
import Image from "next/image";
import { FC } from "react";
import figureStyle from "./Figure.module.scss";

export const Figure: FC<FigureType> = (props) => {

    return <div className={figureStyle.figure}>
        {props.type !== null && (
            <Image src={getFigureAvatarPath(props)} width={"100%"} height={"100%"} alt="" />
        )}
    </div>
}