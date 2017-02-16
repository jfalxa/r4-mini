import React       from 'react';
import styled      from 'styled-components';
import ReactPlayer from 'react-player';

import Container from './Container';


const VIDEO_SIZE = 100;


const VideoContainer = styled( Container )`

    background-color:   #000;
    width:              ${ VIDEO_SIZE + 2 }px;
    height:             ${ VIDEO_SIZE + 2 }px;

`;


export default class Video extends React.Component
{
    // this is shiiiiiiiiiit
    // Right now it's the only way I found to move to a certain point in the
    // video. To do that, it detects if the new specified elapsed time is far
    // from the previously rendered one. If so, it'll force the player to seek
    // directly this new time.
    componentWillReceiveProps( nextProps )
    {
        const { track }           = this.props;
        const { track:nextTrack } = nextProps;

        // @TODO build something more reliable to know what to do in which case
        // - don't base the decision on the difference between props and nextProps
        // - eventually separate youtube elapsed time from the player's

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
                    width={ VIDEO_SIZE }
                    height={ VIDEO_SIZE }
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
