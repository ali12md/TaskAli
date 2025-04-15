import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CircleMinusIcon from "../assets/svg/CircleMinusIcon";
import CircleplusIcon from "../assets/svg/CircleplusIcon";

const Counter = () => {
    return (
        <View
            style={{
                alignItems: 'center'
            }}
        >
            <Text>Counter</Text>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 10
                }}
            >
                <CircleMinusIcon />
                <Text
                    style={{
                        color: '#3B5062',
                        fontSize: 35,
                        fontWeight: '600'
                    }}
                >4</Text>
                <CircleplusIcon />
            </View>
        </View>
    );
};

export default Counter;

const styles = StyleSheet.create({});
