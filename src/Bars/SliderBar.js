import React from 'react';

import Bar    from './Bar';
import Handle from './Handle';


export default function SliderBar( { value, min, max, onDragStart, onDrag, onDragEnd } )
{
    return (

        <Bar to={ value } min={ min } max={ max }>

            <Handle
                onDragStart={ onDragStart }
                onDrag={ onDrag }
                onDragEnd={ onDragEnd } />

        </Bar>

    );
}
