import React  from 'react';
import styled from 'styled-components';

import Container      from './Container';
import Ticker         from './Ticker';
import hoverHighlight from './style/hoverHighlight';
import { th }         from './style/theme';


const InfoContainer = styled( Container )`

    width:          200px;

    margin-right:   5px;
    margin-bottom:  5px;

    white-space:    nowrap;

`;


const RadioLink = styled.a`

    color:          ${ th( 'primaryText' ) };
    font-size:      17px;
    font-weight:    bold;
    overflow:       hidden;
    text-overflow:  ellipsis;

    ${ hoverHighlight }

`;


const TrackTicker = styled( Ticker )`

    display:        flex;
    flex:           1;
    align-items:    center;

`;


const TrackTitle = styled.span`

    display:    inline-flex;
    font-size:  13px;

`;

const TrackBody = styled.span`
    display:    inline-flex;
    font-size:  13px;
		font-style: italic;
`;

export default function Info( { radio, track } )
{
    return (

        <InfoContainer rows fill crossMain>

            <RadioLink
                href={ `http://radio4000.com/${ radio.slug }` }
                target="blank"
                title={ radio.title }>
                { radio.title }
            </RadioLink>

            <TrackTicker>
                <TrackTitle>{ track.title }</TrackTitle>
            </TrackTicker>
            <TrackTicker>
                <TrackBody>{ track.body }</TrackBody>
            </TrackTicker>

        </InfoContainer>

    );
}
