import React                 from 'react';
import { storiesOf, action } from '@kadira/storybook';

import MyInput from 'src/MyInput';


storiesOf( 'MyInput', module )
    .add( 'example', () =>
    (
        <MyInput onChange={ action( 'Changed input value.' ) } />
    ) );
