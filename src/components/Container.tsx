import { SafeAreaView, StatusBar, StyleSheet, Text, View, ViewStyle } from "react-native";
import React from "react";

interface ContainerProps {
    children: React.ReactNode;
    style?: ViewStyle;
    bgColor?: string;
}

const Container: React.FC<ContainerProps> = ({
    style,
    children,
    bgColor = '#F1F1F1',
}) => {
    return (
        <View style={[styles.container, { backgroundColor: bgColor }, style]}>
            <StatusBar barStyle={'dark-content'} />
            <SafeAreaView style={{ flex: 1 }}>
                {children}
            </SafeAreaView>

        </View>
    );
};

export default Container;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
    },
});
