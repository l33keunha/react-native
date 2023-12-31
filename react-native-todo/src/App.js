import React, { useState } from "react";
import { Dimensions, StatusBar } from 'react-native';
import styled, { ThemeProvider } from 'styled-components/native';
import { theme } from "./theme";
import Input from "./components/Input";
import { images } from './images';
import Task from "./components/Task";

const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${({ theme }) => theme.background};
    align-items: center;
    justify-content: flex-start;
`;
const Title = styled.Text`
    font-size: 40px;
    font-weight: 600;
    color: ${({ theme }) => theme.main};
    aling-self: flex-start;
    margin: 20px;
`;
const List = styled.ScrollView`
    flex: 1;
    width: ${({ width }) => width - 40}px;
`

export default function App(){
    const width = Dimensions.get('window').width;

    const [newTask, setNewTask ] = useState('');
    const [tasks, setTasks] = useState({
        '1': { id: '1', text: 'keunha', completed: false},
        '2': { id: '2', text: 'react native', completed: true},
        '3': { id: '3', text: 'React Native Sample', completed: false},
        '4': { id: '4', text: 'Edit TODO Item', completed: false},
    })

    // 추가
    const _addTask = () => {
        const ID = Date.now().toString();
        const NewTaskObject = {
            [ID]: { id:ID, text: newTask, completed: false },
        };
        setNewTask('');
        setTasks({ ...tasks, ...NewTaskObject });
    };

    // 삭제
    const _deleteTask = id => {
        const currentTasks = Object.assign({}, tasks);
        delete currentTasks[id];
        setTasks(currentTasks);
    }

    // 완료
    const _toggleTask = id => {
        const currentTasks = Object.assign({}, tasks);
        currentTasks[id]['completed'] = !currentTasks[id]['completed'];
        setTasks(currentTasks);
    }

    // 수정
    const _updateTask = item => {
        const currentTasks = Object.assign({}, tasks);
        currentTasks[item.id] = item;
        setTasks(currentTasks);
    }

    const _onBlur = () => {
        setNewTask('');
    }

    const _handleTextChange = text => {
        setNewTask(text);
      };

    return (
        <ThemeProvider theme={theme}>
            <Container>
                <StatusBar  
                    barStyle="light-content"
                    backgroundColor={theme.background}
                />                    
                <Title>TODO List</Title>
                <Input
                    placeholder="+ Add a Task"
                    value={newTask}
                    onChangeText={_handleTextChange}
                    onSubmitEditing={_addTask}
                    onBlur={_onBlur}
                />
                <List width={width}>
                    {Object.values(tasks)
                    .reverse()
                    .map(item => (
                        <Task 
                        key={item.id} 
                        item={item} 
                        deleteTask={_deleteTask} 
                        toggleTask={_toggleTask}
                        updateTask={_updateTask}
                        />
                    ))}
                </List>
            </Container>
        </ThemeProvider>
    );
}