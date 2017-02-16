# R4 mini player

This component is a mini player for [radio4000](https://radio4000.com/) to be embedded in your pages.

## Roadmap

- [x] Player design
- [x] Basic interactions with the track
- [ ] Manage playlists
- [ ] Load data from R4 API


## Demo

1. Clone this repo
2. Run `npm start`.
3. Visit [http://localhost:3000/](http://localhost:3000/)


## Usage
(not working yet as it's not published on npm)

1. Add React to your project: `npm install --save react react-dom`
2. Install the player `npm install --save r4-mini`
2. In your app:

```JS
import React from 'react';
import ReactDOM from 'react-dom';

import R4 from 'r4-mini';


ReactDOM.render(
    <R4 radio="someid" />,
    document.getElementById( 'my-radio' )
);
```

More details on React rendering [here](https://facebook.github.io/react/docs/rendering-elements.html).
