import React, {useState} from 'react';
import styled from 'styled-components/native';
import Form from './components/Form';
import Button from './components/Button';
import Length from './components/Length';

const Container = styled.View`
    flex:1;
    background-color: #fff;
    justify-content: center;
    align-itmes: center;
`;

const App = () => {
    const [isVisible, setIsVisible] = useState(true);

    return (
        <Container>
            <Length/>
            {isVisible && <Form/>}
        </Container>
    )
};

export default App;