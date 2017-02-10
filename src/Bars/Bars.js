import React  from 'react';
import styled from 'styled-components';

import customStyle from './customStyle';


const StyledBars = styled.div`

    position:           relative;

    width:              100%;
    height:             3px;

    background-color:   #FFF;

`;



export default class Bars extends React.Component
{
    renderBars()
    {
        const { min, max, children } = this.props;

        return React.Children.map( children,
            ( child, key ) => React.cloneElement( child, { key, min, max } ) );
    }


    render()
    {
        const styling = customStyle( this.props );

        return (

            <StyledBars { ...styling }>
                { this.renderBars() }
            </StyledBars>

        );
    }
}
