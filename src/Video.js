import React       from 'react';
import styled      from 'styled-components';
import ReactPlayer from 'react-player';

import Container from './Container';




const VideoContainer = styled( Container )`

    background-color:   #000;
    width:              100px;
    height:             100px;

`;

export default function Video()
{
    return (

        <VideoContainer rows mainCenter crossCenter>

            <ReactPlayer
                width={ 98 }
                height={ 98 }
                url="https://www.youtube.com/watch?v=VukKkAzyBug" />

        </VideoContainer>

    );
}
