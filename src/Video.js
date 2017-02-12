import React       from 'react';
import styled      from 'styled-components';
import ReactPlayer from 'react-player';

import Container from './Container';


const VideoContainer = styled( Container )`

    background-color:   #000;
    width:              100px;
    height:             100px;

`;


export default function Video( { play, track, onError, onDuration, onProgress } )
{
    return (

        <VideoContainer rows mainCenter crossCenter>

            <ReactPlayer
                width={ 98 }
                height={ 98 }
                playing={ play }
                url={ track.url }
                onError={ onError }
                onDuration={ onDuration }
                onProgress={ onProgress } />

        </VideoContainer>

    );
}
