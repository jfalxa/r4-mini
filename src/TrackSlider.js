import React  from 'react';
import styled from 'styled-components';

import { Bars, Slider, Handle } from 'react-bar-tools';

import { th } from './style/theme';


const StyledBars = styled( Bars )`

    margin:             0 10px;
    border-radius:      3px;
    background-color:   rgba(253, 255, 245, 0.25);

`;


const StyledSlider = styled( Slider )`

    background-color: ${ th( 'secondaryBackground' ) }
    border-radius: 3px;

`;


const StyledHandle = styled( Handle )`

    box-sizing:         border-box;
    background-color:   ${ th( 'secondaryBackground' ) };
    box-shadow:         0px 0px 2px ${ th( 'primaryBackground' ) };
    width:              3px;
    height:             11px;
    border-radius:      3px;
    cursor:             pointer;

    &:before
    {
        content:    "";
        position:   absolute;
        width:      100%;
        height:     100%;
        padding:    10px;
        left:       -10px;
        top:        -10px;

    }

    &:hover, &:active
    {
        transform: translate(-50%, -50%) scale(1.5);
    }
`;


// Custom slider component
export default function TrackSlider( { elapsed, duration, onChange } )
{
    return (

        <StyledBars max={ duration } onValue={ onChange }>
            <StyledSlider value={ elapsed } onChange={ onChange }>
                <StyledHandle />
            </StyledSlider>
        </StyledBars>

    );
}
