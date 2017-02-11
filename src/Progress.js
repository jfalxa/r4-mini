import React  from 'react';
import styled from 'styled-components';

import Container      from './Container';
import TrackSlider    from './TrackSlider';
import PlaybackButton from './PlaybackButton';


const Timer = styled.span`

    font-size: 12px;

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

            <Timer>{ track.elapsed }</Timer>

        </Container>

    );
}
