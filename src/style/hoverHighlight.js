import { css } from 'styled-components';


export default function hoverHighlight()
{
    return css`

        cursor: pointer;

        &:hover
        {
            color: #e8e8e8;
        }

    `;
}
