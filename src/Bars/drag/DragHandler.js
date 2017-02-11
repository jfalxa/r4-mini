import React from 'react';

import noop from '../utils/noop';


export default class DragHandler extends React.Component
{
    static propTypes =
    {
        children    : React.PropTypes.object,
        onDragStart : React.PropTypes.func,
        onDrag      : React.PropTypes.func,
        onDragEnd   : React.PropTypes.func
    };


    static defaultProps =
    {
        onDragStart : noop,
        onDrag      : noop,
        onDragEnd   : noop
    };


    startListeningToDrag()
    {
        document.addEventListener( 'mousemove', this.handleDrag );
        document.addEventListener( 'mouseup', this.handleDragEnd );
    }


    stopListeningToDrag()
    {
        document.removeEventListener( 'mousemove', this.handleDrag );
        document.removeEventListener( 'mouseup', this.handleDragEnd );
    }


    componentWillUnmount()
    {
        this.stopListeningToDrag();
    }


    handleDragStart = ( e ) =>
    {
        this.props.onDragStart( e );
        this.startListeningToDrag();
    }


    handleDrag = ( e ) =>
    {
        this.props.onDrag( e );
    }


    handleDragEnd = ( e ) =>
    {
        this.props.onDragEnd( e );
        this.stopListeningToDrag();
    }


    render()
    {
        const child = React.Children.only( this.props.children );

        const injectedProps =
        {
            dragStart : this.handleDragStart,
            dragEnd   : this.handleDragEnd,
        };

        return React.cloneElement( child, injectedProps );
    }
}
