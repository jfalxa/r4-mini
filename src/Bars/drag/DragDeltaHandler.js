import React     from 'react';

import DragHandler      from './DragHandler';
import noop             from '../utils/noop';
import getEventPosition from '../utils/getEventPosition';


export default class DragDeltaHandler extends React.Component
{
    static defaultProps =
    {
        onDragStart : noop,
        onDrag      : noop,
        onDragEnd   : noop
    }


    state =
    {
        initialPosition : null
    }


    getDelta( position )
    {
        const { initialPosition } = this.state;

        const delta =
        {
            x : position.x - initialPosition.x,
            y : position.y - initialPosition.y
        };

        return delta;
    }


    onDragStart = ( e ) =>
    {
        e.preventDefault();
        e.stopPropagation();

        const initialPosition = getEventPosition( e );

        this.props.onDragStart( initialPosition );
        this.setState( { initialPosition } );
    }


    onDrag = ( e ) =>
    {
        // throttling can cause this function to be called after the dragging
        // is ended, this condition is here to avoid this
        if ( !this.state.initialPosition )
        {
            return;
        }

        e.preventDefault();
        e.stopPropagation();

        const position = getEventPosition( e );
        const delta    = this.getDelta( position );

        this.props.onDrag( delta );
    }


    onDragEnd = ( e ) =>
    {
        e.preventDefault();
        e.stopPropagation();

        this.props.onDragEnd();
        this.setState( { initialPosition : null } );
    }


    render()
    {
        return (

            <DragHandler
                onDragStart={ this.onDragStart }
                onDrag={ this.onDrag }
                onDragEnd={ this.onDragEnd }>
                { this.props.children }
            </DragHandler>

        );
    }
}
