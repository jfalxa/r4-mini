import React  from 'react';
import styled from 'styled-components';


const Input = styled.input`

    border:     1px solid #ccc;
    padding:    3px;

`;


export default class MyInput extends React.Component
{
    render()
    {
        const { onChange } = this.props;

        return (

            <Input onChange={ onChange } />

        );
    }
}
