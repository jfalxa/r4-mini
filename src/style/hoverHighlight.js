import { css } from 'styled-components';

import { th } from './theme';


export default function hoverHighlight()
{
    return css`

        cursor: pointer;

        &:hover
        {
            color: ${ th( 'highlightText' ) };
        }

    `;
}
