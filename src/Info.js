import React  from 'react';
import styled from 'styled-components';

import Container from './Container';
import Ticker    from './Ticker';


const InfoContainer = styled( Container )`

    width:          200px;

    margin-right:   5px;
    margin-bottom:  5px;

    overflow:       hidden;
    white-space:    nowrap;

`;


const RadioLink = styled.a`

    color:          #fdfff5;
    font-size:      17px;
    font-weight:    bold;
    overflow:       hidden;
    text-overflow:  ellipsis;

    &:hover
    {
        color: #e8e8e8;
    }

`;


const TrackTicker = styled( Ticker )`

    display:        flex;
    flex:           1;
    align-items:    center;

`;


const TrackTitle = styled.span`

    display:    inline-flex;
    font-size:  14px;

`;


export default function Info()
{
    const radio = 'AXEL - LES VRAIS ALBUMS (En construction)';
    const track = 'Moodymann - The Day We Lost The Soul / Tribute! (To The Soul We Lost)';

    return (

        <InfoContainer rows fill crossMain>

            <RadioLink
                href="http://radio4000.com/918"
                target="blank"
                title={ radio }>
                { radio }
            </RadioLink>

            <TrackTicker>
                <TrackTitle>{ track }</TrackTitle>
            </TrackTicker>

        </InfoContainer>

    );
}
