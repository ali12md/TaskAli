import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View, ViewStyle } from 'react-native';

interface ContainerProps {
    children: React.ReactNode;
    style?: ViewStyle;
    bgColor?: string;
}

const Container: React.FC<ContainerProps> = ({
    style,
    children,
    bgColor = '#F1F1F1',
}) => (
    <View style={[styles.container, { backgroundColor: bgColor }, style]}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView >{children}</SafeAreaView>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
    }
});

export default Container;
