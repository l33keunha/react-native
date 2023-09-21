{
    /* 
        TouchableOpacity 컴포넌트에서 Press 이벤트 종류 4가지
        1. onPressIn : 터치가 시작될 때 항상 호출
        2. onPressOut : 터치가 해제될 때 항상 호출
        3. onPress : 터치가 해제될 때 onPressOut 이후 호출
        4. onLongPress : 터치가 일저 시간 이상 지속되면 호출
    */
}

import React from "react";
import { TouchableOpacity, Text } from "react-native";

const EventButton = () => {
    const _onPressIn = () => console.log('Press In !!!\n');
    const _onPressOut = () => console.log('Press Out !!!\n');
    const _onPress = () => console.log('Press !!!\n');
    const _onLongPress = () => console.log('Long Press !!!\n');

    return (
        <TouchableOpacity
            style ={{
                backgroundColor: '#f1c40f',
                padding: 16,
                margin: 10,
                borderRadius: 8,
            }}
            onPressIn={_onPressIn}
            onLongPress={_onLongPress}
            onPressOut={_onPressOut}
            onPress={_onPress}
            delayLongPress={3000}
        >
            <Text style={{ color:'white', fontSize:24 }}>Press</Text>
        </TouchableOpacity>
    );
};

export default EventButton;