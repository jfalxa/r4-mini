import React  from 'react';
import update from 'immutability-helper';

import Player from './Player';


export default class R4 extends React.Component
{
    state =
    {
        play : false,

        radio :
        {
            title : 'AXEL - LES VRAIS ALBUMS (En construction)',
            slug  : '918'
        },

        track :
        {
            title    : 'Moodymann - The Day We Lost The Soul / Tribute! (To The Soul We Lost)',
            url      : 'https://www.youtube.com/watch?v=VukKkAzyBug',
            duration : 0,
            elapsed  : 0
        }
    }


    handleTogglePlayback = ( forcePlay ) =>
    {
        const play = ( typeof forcePlay !== 'boolean' )
            ? !this.state.play
            : forcePlay;

        this.setState( { play } );
    }


    handleSkip = () =>
    {

    }


    handleDuration = ( duration ) =>
    {
        const state = update( this.state, { track : { $merge : { duration } } } );

        this.setState( state );
    }


    handleProgress = ( progress ) =>
    {
        if ( !this.state.play )
        {
            return;
        }

        const elapsed  = parseInt( progress.played * this.state.track.duration, 10 );
        const state    = update( this.state, { track : { $merge : { elapsed } } } );

        this.setState( state );
    }


    handleEnd = () =>
    {
        const state = update( this.state,
            {
                track  : { $merge : { elapsed : 0 } },
                $merge : { play : false }
            } );

        this.setState( state );
    }


    handleJump = ( elapsed ) =>
    {
        const state = update( this.state, { track : { $merge : { elapsed } } } );

        this.setState( state );
    }


    render()
    {
        const { play, radio, track } = this.state;

        return (

            <Player
                play={ play }
                radio={ radio }
                track={ track }
                onTogglePlayback={ this.handleTogglePlayback }
                onSkip={ this.handleSkip }
                onDuration={ this.handleDuration }
                onProgress={ this.handleProgress }
                onEnd={ this.handleEnd }
                onJump={ this.handleJump } />

        );
    }
}
