import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface BoldRowItemProps {
    text?: string;
    unit?: string;
}

const BoldRowItem: React.FC<BoldRowItemProps> = ({ text = '0', unit = 'N/A' }) => (
    <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
        <Text style={styles.unit}>{unit}</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    text: {
        fontSize: 15,
        fontWeight: '500',
        color: 'white',
    },
    unit: {
        fontSize: 24,
        fontWeight: '800',
        color: 'white',
    },
});

export default BoldRowItem;
