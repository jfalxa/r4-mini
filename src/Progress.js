import React     from 'react';
import styled    from 'styled-components';
import PlayIcon  from 'react-icons/lib/md/play-arrow';
import PauseIcon from 'react-icons/lib/md/pause';

import Container from './Container';


const ProgressContainer = styled( Container )`


`;


const Timer = styled.span`

    font-size: 12px;

`;


export default function Progress()
{
    return (

        <ProgressContainer columns mainSpaceBetween crossCenter>
            <PauseIcon />
            <Timer>0:14</Timer>
        </ProgressContainer>

    );
}
