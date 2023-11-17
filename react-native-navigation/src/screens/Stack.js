import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Home";
import List from "./List";
import Item from "./Item";

const Stack = createStackNavigator();

const StackNavigation = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name = "Home" component={Home}/>
            <Stack.Screen name = "List" component={List}/>
            <Stack.Screen name = "Item" component={Item}/>
        </Stack.Navigator>
    )
}

export default StackNavigation;