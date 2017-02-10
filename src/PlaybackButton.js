import React     from 'react';
import styled    from 'styled-components';
import PlayIcon  from 'react-icons/lib/md/play-arrow';
import PauseIcon from 'react-icons/lib/md/pause';

import hoverHighlight from './style/hoverHighlight';


const StyledPlayIcon  = styled( PlayIcon )`${ hoverHighlight }`;
const StyledPauseIcon = styled( PauseIcon )`${ hoverHighlight }`;


export default function Component( { play, onTogglePlayback } )
{
    const PlaybackIcon = play ? StyledPauseIcon : StyledPlayIcon;

    return (

        <PlaybackIcon
            size={ 20 }
            onClick={ onTogglePlayback } />

    );
}
