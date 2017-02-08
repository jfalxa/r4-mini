import test        from 'ava';
import React       from 'react';
import { shallow } from 'enzyme';

import MyComponent from 'src/components/MyComponent';


test( 'MyComponent component', t =>
{
    const wrapper = shallow( <MyComponent /> );
    t.true( wrapper.contains( <div>MyComponent</div> ) );
} );
