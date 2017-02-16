import React    from 'react';
import styled   from 'styled-components';
import SkipIcon from 'react-icons/lib/md/skip-next';

import Container      from './Container';
import hoverHighlight from './style/hoverHighlight';


const StyledSkipIcon = styled( SkipIcon )`${ hoverHighlight }`;


export default function Skip( { onSkip } )
{
    return (

            <StyledSkipIcon size={ 40 } onClick={ onSkip } />

    );
}
