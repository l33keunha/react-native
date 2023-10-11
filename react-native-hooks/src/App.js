import React from 'react';
import styled from 'styled-components/native';
import Counter from './components/Counter';

const Container = styled.View`
    flex:1;
    background-color: #fff;
    justify-content: center;
    align-itmes: center;
`;

const App = () => {
    return (
        <Container>
            <Counter/>
        </Container>
    )
};

export default App;