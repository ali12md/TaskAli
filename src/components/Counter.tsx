import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CircleMinusIcon from "../assets/svg/CircleMinusIcon";
import CircleplusIcon from "../assets/svg/CircleplusIcon";

interface TCounter {
    onPressMinus: () => void;
    onPressPlus: () => void;
    title: string;
    value: number;
}

const Counter = ({
    onPressMinus,
    onPressPlus,
    title = 'Score',
    value = 9
}: TCounter) => {

    return (
        <View
            style={{
                alignItems: 'center'
            }}
        >
            <Text
                style={{ fontSize: 16, fontWeight: '600', color: '#3B5062' }}
            >{title}</Text>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 10
                }}
            >
                <CircleMinusIcon
                    onPress={onPressMinus}
                    width={25}
                />
                <Text
                    style={{
                        color: '#3B5062',
                        fontSize: 25,
                        fontWeight: '600'
                    }}
                >{value}</Text>
                <CircleplusIcon
                    onPress={onPressPlus}
                    width={25}
                />
            </View>
        </View>
    );
};

export default Counter;

const styles = StyleSheet.create({});
