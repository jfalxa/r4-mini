import React                     from 'react';
import styled, { ThemeProvider } from 'styled-components';

import Container     from './Container';
import theme, { th } from './style/theme';

import Info     from './Info';
import Skip     from './Skip';
import Video    from './Video';
import Progress from './Progress';


const MainContainer = styled( Container )`

    height:             102px;
    color:              ${ th( 'primaryText' ) };
    background-color:   ${ th( 'primaryBackground' ) };
    border:             1px solid ${ th( 'primaryBackground' ) };
    border-radius:      5px;
    overflow:           hidden;
    box-shadow:         2px 2px 2px ${ th( 'shadow' ) };

`;


const PaddedContainer = styled( Container )`

    padding: 8px;

`;


export default function Player( { play, radio, track } )
{
    return (

        <ThemeProvider theme={ theme }>

            <MainContainer inline columns>

                <Video
                    play={ play }
                    url={ track.url }
                    onTick={ null }
                    onTogglePlayback={ null } />

                <PaddedContainer rows fill>

                    <Container columns fill>
                        <Info radio={ radio } track={ track } />
                        <Skip onSkip={ null } />
                    </Container>

                    <Progress
                        play={ play }
                        track={ track }
                        onJump={ null }
                        onTogglePlayback={ null } />

                </PaddedContainer>

            </MainContainer>

        </ThemeProvider>

    );
}
