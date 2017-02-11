import React  from 'react';
import styled from 'styled-components';

import Container      from './Container';
import TrackSlider    from './TrackSlider';
import PlaybackButton from './PlaybackButton';


const Timer = styled.span`

    flex-shrink:    0;
    width:          40px;
    font-size:      11px;
    text-align:     center;

`;


export default function Progress( { play, track, onTogglePlayback } )
{
    return (

        <Container columns mainSpaceBetween crossCenter>

            <PlaybackButton
                play={ play }
                onTogglePlayback={ onTogglePlayback } />

            <TrackSlider
                elapsed={ track.elapsed }
                duration={ track.duration }
                onChange={ value => console.log( value ) }/>

            <Timer>{ '43:' + track.elapsed }</Timer>

        </Container>

    );
}
