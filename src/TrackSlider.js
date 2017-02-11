import React            from 'react';
import styled           from 'styled-components';
import { Bars, Slider } from 'react-bar-tools';


const StyledBars = styled( Bars )`

    margin: 0 10px;

`;


export default function TrackSlider( { elapsed, duration, onChange } )
{
    return (

        <StyledBars max={ duration } onValue={ onChange }>
            <Slider value={ elapsed } onChange={ onChange } />
        </StyledBars>

    );
}
