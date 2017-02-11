import React from 'react';

import DragHandler from './DragHandler';


export default function draggable( Component )
{
    return function DraggableComponent( props )
    {
        const { onDragStart, onDrag, onDragEnd, ...otherProps } = props;

        return (

            <DragHandler
                onDragStart={ onDragStart }
                onDrag={ onDrag }
                onDragEnd={ onDragEnd }>

                <Component { ...otherProps } />

            </DragHandler>

        );
    };
}
