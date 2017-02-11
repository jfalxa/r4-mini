import styled from 'styled-components';

import toPercent from './utils/toPercent';


const Bar = styled.div`

    position:           absolute;
    left:               ${ p => toPercent( p.from - p.min, p.max - p.min ) }%;
    top:                0;

    height:             100%;
    width:              ${ p => toPercent( p.to - p.from, p.max - p.min ) }%;

    background-color:   #808080;

`;


Bar.defaultProps =
{
    from : 0,
    to   : 0
};


export default Bar;
