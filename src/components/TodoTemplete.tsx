import React, { Component } from 'react'
import styled, { StyledComponent } from 'styled-components';

const TodoTemplateBlock = styled.div`
    width: 512px;
    height: 768px;

    position: relative;
    background: white;
    border-radius:16px;
    boxshadow: 0 0 8px rgba(0, 0, 0, 0.4);

    margin: 0 auto;
    margin-top: 96px;
    margin-bottom: 32px;

    display: flex;
    flex-direction: column;
`;

function TodoTemplete({ children } : any) {
    console.log(typeof(children));
    return (
        <TodoTemplateBlock>
            {children}
        </TodoTemplateBlock>
    )
}

export default TodoTemplete
