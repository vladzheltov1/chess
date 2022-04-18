import { GameFieldType } from '@/types/gameField';
import { Dispatch, FC, ReactNode, SetStateAction } from 'react';
import {
    DragDropContext,
    OnBeforeCaptureResponder,
    OnBeforeDragStartResponder,
    OnDragEndResponder,
    OnDragStartResponder,
    OnDragUpdateResponder
} from 'react-beautiful-dnd';
import { onDragEnd } from '../utils/movement';

export interface IDndContext {
    onBeforeCapture?: OnBeforeCaptureResponder
    onBeforeDragStart?: OnBeforeDragStartResponder,
    onDragStart?: OnDragStartResponder,
    onDragUpdate?: OnDragUpdateResponder,
    onDragEnd?: OnDragEndResponder,
    setStateCallback: Dispatch<SetStateAction<GameFieldType>>,
    children: ReactNode | Array<ReactNode>,
    field: GameFieldType,
} 

export const DndContext: FC<IDndContext> = (props) => {
    const {children, field, setStateCallback, ...restProps} = props as IDndContext;
    return (
        <DragDropContext onDragEnd={result => onDragEnd(result, field, setStateCallback)} {...restProps}>
            {children}
        </DragDropContext>
    )
}