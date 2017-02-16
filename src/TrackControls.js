import React  from 'react';
import styled from 'styled-components';
import format from 'format-duration';

import Container      from './Container';
import TrackSlider    from './TrackSlider';
import PlaybackButton from './PlaybackButton';


const Timer = styled.span`

    flex-shrink:    0;
    width:          40px;
    font-size:      11px;
    text-align:     center;

`;


export default function TrackControls( { play, track, onJump, onTogglePlayback } )
{
    return (

        <Container columns mainSpaceBetween crossCenter>

            <PlaybackButton
                play={ play }
                onTogglePlayback={ onTogglePlayback } />

            <TrackSlider
                elapsed={ track.elapsed }
                duration={ track.duration }
                onChange={ onJump } />

            <Timer>{ format( track.elapsed * 1000 ) }</Timer>

        </Container>

    );
}
