import React from 'react';
import styled from 'styled-components';

import Bar         from './Bar';
import customStyle from './customStyle';


const SliderHandle = styled.div`

    position:           absolute;
    top:                -${ p => ( p.size - 3 ) / 2 }px;
    left:               calc(100% - ${ p => ( p.size - 1 ) / 2 }px);

    width:              ${ p => p.size }px;
    height:             ${ p => p.size }px;

    background-color:   #808080;
    border-radius:      ${ p => p.size / 2 }px;

`;


export default class Slider extends React.Component
{
    render()
    {
        const { value, min, max } = this.props;

        const styling = customStyle( this.props );

        return (

            <Bar to={ value } min={ min } max={ max } { ...styling }>
                <SliderHandle size={ 11 } />
            </Bar>

        );
    }
}
