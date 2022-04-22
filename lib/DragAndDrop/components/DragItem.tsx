import { FC } from "react";
import { Draggable } from 'react-beautiful-dnd';

export interface IDragItemProps {
    children: any,
    draggableId: string,
    isDragDisabled?: boolean,
    className?: string,
    index: number,
}

export const DragItem: FC<IDragItemProps> = (props) => {
    const { children, isDragDisabled, draggableId, index } = props;

    return (
        <Draggable draggableId={draggableId} index={index} isDragDisabled={isDragDisabled}>
            {provided => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    {children}
                </div>
            )}
        </Draggable>
    )
}