import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface CircularTextProps {
    topText?: string | number;
    bottomText?: string | number;
}

const CircularText: React.FC<CircularTextProps> = ({
    topText = 4,
    bottomText = 2
}) => {
    return (
        <View style={styles.circle}>
            <View  >
                bottomText=2
                <Text style={styles.hText}>{topText}</Text>
                <View style={styles.container}>
                    <Text style={styles.hText1}>{bottomText}</Text>
                </View>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 15,
        left: 13
    },
    circle: {
        width: 48,
        height: 48,
        borderRadius: 48 / 2,
        borderWidth: 2,
        borderColor: '#253C51',
        paddingLeft: 10
    },
    hText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#253C51',
    },
    hText1: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#253C51',
    },

});

export default CircularText;
