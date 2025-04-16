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
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.row}>
                <CircleMinusIcon onPress={onPressMinus} width={25} />
                <Text style={styles.value}>{value}</Text>
                <CircleplusIcon onPress={onPressPlus} width={25} />
            </View>
        </View>
    );
};

export default Counter;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    title: {
        fontSize: 16,
        fontWeight: '600',
        color: '#3B5062'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    value: {
        color: '#3B5062',
        fontSize: 25,
        fontWeight: '600'
    }
});
