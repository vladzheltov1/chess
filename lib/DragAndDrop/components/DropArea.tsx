import { FC } from "react";
import { Direction, Droppable, DroppableMode } from 'react-beautiful-dnd';

export interface IDropAreaProps {
    children: any,
    droppableId: string,
    mode?: DroppableMode,
    direction?: Direction,
    isDropDisabled?: boolean,
    className?: string,
}

export const DropArea: FC<IDropAreaProps> = (props) => {
    const { children, droppableId, mode, direction, className, isDropDisabled } = props;

    return (
        <Droppable droppableId={droppableId} mode={mode} direction={direction} isDropDisabled={isDropDisabled}>
            {provided => (
                <div
                    ref={provided.innerRef}
                    className={className}
                    {...provided.droppableProps}
                >
                    {children}
                    {provided.placeholder}
                </div>                    
            )}
        </Droppable>
    )
}