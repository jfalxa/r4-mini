import React from 'react';

import Player from './Player';


export default class R4 extends React.Component
{
    render()
    {
        const play = false;

        const radio =
        {
            title : 'AXEL - LES VRAIS ALBUMS (En construction)',
            slug  : '918'
        };

        const track =
        {
            title    : 'Moodymann - The Day We Lost The Soul / Tribute! (To The Soul We Lost)',
            url      : 'https://www.youtube.com/watch?v=VukKkAzyBug',
            duration : 365,
            elapsed  : 47
        };

        return (

            <Player
                play={ play }
                radio={ radio }
                track={ track } />

        );
    }
}
