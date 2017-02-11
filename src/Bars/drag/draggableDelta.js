import React from 'react';

import DragDeltaHandler from './DragDeltaHandler';


export default function draggableDelta( Component )
{
    return function DraggableComponent( props )
    {
        const { onDragStart, onDrag, onDragEnd, ...otherProps } = props;

        return (

            <DragDeltaHandler
                onDragStart={ onDragStart }
                onDrag={ onDrag }
                onDragEnd={ onDragEnd }>

                <Component { ...otherProps } />

            </DragDeltaHandler>

        );
    };
}
