import React                     from 'react';
import styled, { ThemeProvider } from 'styled-components';

import theme, { th } from './style/theme';
import Container     from './Container';
import Info          from './Info';
import Skip          from './Skip';
import Video         from './Video';
import TrackControls from './TrackControls';


const MainContainer = styled( Container )`

    color:              ${ th( 'primaryText' ) };
    background-color:   ${ th( 'primaryBackground' ) };
    border:             1px solid ${ th( 'primaryBackground' ) };
    border-radius:      5px;
    box-shadow:         2px 2px 2px ${ th( 'shadow' ) };
    overflow:           hidden;
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";

`;


const PaddedContainer = styled( Container )`

    padding: 8px;

`;


// Player layout component
export default function Player( props )
{
    const { play, radio, track } = props;
    const { onTogglePlayback, onSkip, onProgress, onDuration, onEnd, onJump } = props;

    return (

        <ThemeProvider theme={ theme }>

            <MainContainer inline columns>

                <Video
                    play={ play }
                    track={ track }
                    onError={ onSkip }
                    onDuration={ onDuration }
                    onProgress={ onProgress }
                    onEnd={ onEnd }
                    onTogglePlayback={ onTogglePlayback } />

                <PaddedContainer rows fill>

                    <Container columns fill>
                        <Info radio={ radio } track={ track } />
                        <Skip onSkip={ onSkip } />
                    </Container>

                    <TrackControls
                        play={ play }
                        track={ track }
                        onJump={ onJump }
                        onTogglePlayback={ onTogglePlayback } />

                </PaddedContainer>

            </MainContainer>

        </ThemeProvider>

    );
}
