import styled, { keyframes } from 'styled-components';


const tickerAnimation = keyframes`

    from
    {
        transform: translate3d(0, 0, 0);
    }

    to
    {
        transform: translate3d(-100%, 0, 0);
    }

`;


const Ticker = styled.div`

    & > *:first-child
    {
        padding-left:   100%;
        animation:      ${ tickerAnimation } 10s linear infinite;
    }

`;


export default Ticker;
