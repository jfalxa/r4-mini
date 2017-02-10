import React     from 'react';
import styled    from 'styled-components';

import Container      from './Container';
import PlaybackButton from './PlaybackButton';


const Timer = styled.span`

    font-size: 12px;

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

            <Timer>{ toMin( track.elapsed ) }</Timer>

        </Container>

    );
}
