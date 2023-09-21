import React from 'react';
import { Text, View, Button } from 'react-native';
import Counter from './components/Counter';

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Counter/>
    </View>
  );
};

export default App;
