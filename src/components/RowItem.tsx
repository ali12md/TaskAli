import React, { ReactNode } from "react";
import { View, Text, StyleSheet } from "react-native";

interface TRowItem {
    icon?: ReactNode;
    text: string;
    number?: number;
}

const RowItem = ({ icon, text, number }: TRowItem) => {
    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                {icon ? (
                    icon
                ) : (
                    <Text style={styles.number}>{number}</Text>
                )}
            </View>
            <Text style={styles.text}>{text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
    },
    iconContainer: {
        height: 27,
        justifyContent: "center",
        alignItems: "center",
    },
    number: {
        fontSize: 25,
        fontWeight: "500",
        color: "#969696",
    },
    text: {
        fontSize: 16,
        fontWeight: "500",
    },
});

export default RowItem;
