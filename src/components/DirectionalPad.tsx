import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const directions = [
    { label: 'up', style: { top: 20, left: '42%' }, rotation: '0deg' },
    { label: 'left', style: { left: 20, top: '42%' }, rotation: '-90deg' },
    { label: 'right', style: { right: 20, top: '42%' }, rotation: '90deg' },
    { label: 'down', style: { bottom: 20, left: '42%' }, rotation: '180deg' },
];
// I couldn't complete its UI due to a lack of time ,
// I started this task on Monday evening because of my sister's wedding

const DirectionalPad = ({
    title = 'GIR'
}) => {
    const [selected, setSelected] = useState<string | null>(null);
    return (
        <View style={styles.container}>

            <View style={styles.circle}>

                <View style={styles.centerCircle}>
                    <Text style={styles.centerText}>{title}</Text>
                </View>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
    },
    circle: {
        width: 100,
        height: 100,
        backgroundColor: '#EFF4F8',
        borderRadius: 150,
        justifyContent: 'center',
        alignItems: 'center',
    },
    arrowContainer: {
        position: 'absolute',
        padding: 10,
        borderRadius: 20,
    },
    arrow: {
        color: 'gray',
    },
    selectedArrow: {
        backgroundColor: '#D6EB9B',
    },
    arrowSelectedText: {
        color: '#000',
        fontWeight: 'bold',
    },
    centerCircle: {
        width: 30,
        height: 30,
        borderRadius: 40,
        borderWidth: 3,
        borderColor: '#CAD1DB',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    centerText: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#374151',
        textAlign: 'center'
    },

});

export default DirectionalPad;