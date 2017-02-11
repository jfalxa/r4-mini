import React  from 'react';
import styled from 'styled-components';

import draggableDelta from './drag/draggableDelta';


const StyledHandle = styled.div`

    position:           absolute;
    top:                -${ p => ( p.size - 3 ) / 2 }px;
    left:               calc(100% - ${ p => ( p.size - 1 ) / 2 }px);

    width:              ${ p => p.size }px;
    height:             ${ p => p.size }px;

    background-color:   #808080;
    border-radius:      ${ p => p.size / 2 }px;

`;

StyledHandle.defaultProps = { size : 11 };


function Handle( { dragStart, ...otherProps } )
{
    return <StyledHandle onMouseDown={ dragStart } { ...otherProps } />;
}


export default draggableDelta( Handle );
