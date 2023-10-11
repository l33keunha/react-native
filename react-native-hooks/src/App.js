import React, {useState} from 'react';
import styled from 'styled-components/native';
import Form from './components/Form';
import Button from './components/Button'

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
            <Button
                title={isVisible ? 'Hide' : 'Show'}
                onPress={() => setIsVisible(prev => !prev)}
            />
            {isVisible && <Form/>}
        </Container>
    )
};

export default App;