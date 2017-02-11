import React from 'react';

import Bar    from './Bar';
import Handle from './Handle';


export default function SliderBar( props )
{
    const { value, min, max, onDragStart, onDrag, onDragEnd } = props;

    return (

        <Bar { ...props }
            to={ value }
            min={ min }
            max={ max }>

            <Handle
                onDragStart={ onDragStart }
                onDrag={ onDrag }
                onDragEnd={ onDragEnd } />

        </Bar>

    );
}
