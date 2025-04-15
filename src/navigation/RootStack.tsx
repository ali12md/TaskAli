import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import AddScore from "../screen/AddScore";
import ScoreDetail from "../screen/ScoreDetail";

const Stack = createNativeStackNavigator();

const RootStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="AddScore" component={AddScore} />
            <Stack.Screen name="ScoreDetail" component={ScoreDetail} />
        </Stack.Navigator>
    );
}

export default RootStack;

