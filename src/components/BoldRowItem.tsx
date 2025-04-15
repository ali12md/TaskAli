import { StyleSheet, Text, View } from "react-native";
import React from "react";

const BoldRowItem = ({
    text = "0",
    unit = "N/A",
}) => {
    return (
        <View
            style={{
                alignItems: 'center'
            }}
        >
            <Text
                style={{
                    fontSize: 15,
                    fontWeight: '500',
                    color: 'white'
                }}
            >{text}</Text>
            <Text
                style={{
                    fontSize: 24,
                    fontWeight: '800',
                    color: 'white'
                }}
            >{unit}</Text>
        </View>
    );
};

export default BoldRowItem;

const styles = StyleSheet.create({});
