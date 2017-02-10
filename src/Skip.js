import React    from 'react';
import styled   from 'styled-components';
import SkipIcon from 'react-icons/lib/md/skip-next';

import Container from './Container';


const StyledSkipIcon = styled( SkipIcon )`

    cursor: pointer;

    &:hover
    {
        color: #e8e8e8;
    }

`;

export default function Skip()
{
    return (

        <Container rows>
            <StyledSkipIcon size={ 40 } />
        </Container>

    );
}
