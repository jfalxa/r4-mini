import React     from 'react';
import styled    from 'styled-components';

import Container        from './Container';
import PlaybackButton   from './PlaybackButton';
import { Bars, Slider } from './Bars';


const Timer = styled.span`

    font-size: 12px;

`;

const StyledBars = styled( Bars )`

    margin: 0 10px;

`;


function toMin( sec )
{
    return `0:${ sec }`;
}


export default function Progress( { play, track, onTogglePlayback } )
{
    return (

        <Container columns mainSpaceBetween crossCenter>

            <PlaybackButton
                play={ play }
                onTogglePlayback={ onTogglePlayback } />

            <StyledBars max={ track.duration } onClick={ () => {} }>
                <Slider value={ track.elapsed } onChange={ value => console.log( value ) } />
            </StyledBars>

            <Timer>{ toMin( track.elapsed ) }</Timer>

        </Container>

    );
}
