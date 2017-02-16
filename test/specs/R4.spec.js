import test        from 'ava';
import React       from 'react';
import { shallow } from 'enzyme';

import R4 from 'src/R4';


test( 'R4 component', t =>
{
    const wrapper = shallow( <R4 /> );
    t.true( wrapper.exists() );
} );
