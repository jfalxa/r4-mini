import React from 'react';

import cap       from './utils/cap';
import SliderBar from './SliderBar';


export default class Slider extends React.Component
{
    constructor( props )
    {
        super();

        this.state = { value : props.value };
    }


    componentWillReceiveProps( { value } )
    {
        this.setState( { value } );
    }


    handleDragStart = () =>
    {
        this.setState( { initialValue : this.state.value } );
    }


    handleDrag = ( delta ) =>
    {
        const { initialValue }                = this.state;
        const { min, max, toValue, onChange } = this.props;

        const newValue = initialValue + toValue( delta.x );
        const value    = cap( min, newValue, max );

        onChange( value );
        this.setState( { value } );
    }


    handleDragEnd = () =>
    {
        this.setState( { initialValue : null } );
    }


    render()
    {
        const { value }    = this.state;
        const { min, max } = this.props;

        return (

            <SliderBar
                value={ value }
                min={ min }
                max={ max }
                onDragStart={ this.handleDragStart }
                onDrag={ this.handleDrag }
                onDragEnd={ this.handleDragEnd } />

        );
    }
}
