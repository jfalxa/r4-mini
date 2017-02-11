import React           from 'react';
import styled          from 'styled-components';
import { findDOMNode } from 'react-dom';


const StyledBars = styled.div`

    position:           relative;

    width:              100%;
    height:             3px;

    background-color:   #FFF;

    &:before
    {
        content:    "";
        position:   absolute;
        width:      100%;
        height:     100%;
        padding:    5px;
        top:        -5px;
    }

`;



export default class Bars extends React.Component
{
    static defaultProps =
    {
        min : 0,
        max : 100
    }


    toValue = ( px ) =>
    {
        const { min, max } = this.props;
        const { width }    = findDOMNode( this ).getBoundingClientRect();

        // convert the pixel length into a value for the current min/max
        return Math.round( px * ( max - min ) / width );
    }


    renderBars()
    {
        const { min, max, children } = this.props;
        const toValue                = this.toValue;

        return React.Children.map( children, ( child, key ) =>
        (
            React.cloneElement( child, { key, min, max, toValue } )
        ) );
    }


    render()
    {
        return (

            <StyledBars { ...this.props }>
                { this.renderBars() }
            </StyledBars>

        );
    }
}
