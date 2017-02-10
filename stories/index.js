import React                 from 'react';
import { storiesOf, action } from '@kadira/storybook';

import R4 from 'src/R4';


storiesOf( 'R4', module )
    .add( 'example', () =>
    (
        <R4 onChange={ action( 'Changed input value.' ) } />
    ) );
