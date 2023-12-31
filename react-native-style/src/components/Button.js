import React from "react";
import styled from 'styled-components/native';

/* styled객체와 props 사용하기 */
const ButtonContainer = styled.TouchableOpacity`
    background-color: ${props =>
        props.title === 'keunha' ? props.theme.blue : props.theme.purple};
    border-radius: 15px;
    padding: 15px 40px;
    margin: 10px 0px;
    justify-content: center;
`;
const Title = styled.Text`
    font-size: 20px;
    font-weight: 600;
    color: ${props => props.theme.text};
`;
const Button = props => {
    return(
        <ButtonContainer title={props.title}>
            <Title>{props.title}</Title>
        </ButtonContainer>
    );
};

export default Button;