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

    overflow:   hidden;

    & > *
    {
        padding-left:   100%;
        animation:      ${ tickerAnimation } 10s linear infinite;
    }

`;

// Pure CSS news ticker component
export default Ticker;
