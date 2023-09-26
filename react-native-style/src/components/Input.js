import React from "react";
import styled from "styled-components/native";

/* 스타일드 컴포넌트의 attrs를 이용해서 props로 전달된 borderColor값에 따라 Input 컴포넌트의 디자인 변경 */
const StyledInput = styled.TextInput.attrs(props => ({
    placeholder: 'Enter a text...',
    placeholderTextColor: props.borderColor
}))`
    width: 200px;
    height: 60px;
    margin: 5px;
    padding: 10px;
    border-radius: 10px;
    border: 2px;
    border-color: ${props => props.borderColor};
    font-size: 24px;
`;

const Input = props => {
    return <StyledInput borderColor={props.borderColor} />;
};

export default Input;
