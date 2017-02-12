import React       from 'react';
import styled      from 'styled-components';
import ReactPlayer from 'react-player';

import Container from './Container';


const VideoContainer = styled( Container )`

    background-color:   #000;
    width:              100px;
    height:             100px;

`;


export default class Video extends React.Component
{
    componentWillReceiveProps( nextProps )
    {
        const { track }           = this.props;
        const { track:nextTrack } = nextProps;

        // @TODO build something more reliable to know what to do in which case
        // - don't base the decision on the difference between props and nextProps
        // - eventually separate youtube elapsed time from the players

        if ( !nextProps.play && this.props.play && ( nextTrack.elapsed === 0 ) )
        {
            return;
        }

        if ( Math.abs( nextTrack.elapsed - track.elapsed ) > 2 )
        {
            this.player.seekTo( nextTrack.elapsed / nextTrack.duration );
        }
    }


    render()
    {
        const { play, track } = this.props;
        const { onError, onDuration, onProgress, onEnd, onTogglePlayback } = this.props;

        return (

            <VideoContainer rows mainCenter crossCenter>

                <ReactPlayer
                    ref={ player => ( this.player = player ) }
                    width={ 98 }
                    height={ 98 }
                    playing={ play }
                    url={ track.url }
                    onError={ onError }
                    onDuration={ onDuration }
                    onProgress={ onProgress }
                    onEnded={ onEnd }
                    onPlay={ () => onTogglePlayback( true ) }
                    onPause={ () => onTogglePlayback( false ) } />

            </VideoContainer>

        );
    }
}
