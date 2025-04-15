import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const DPad = () => {
    const [direction, setDirection] = useState('');

    const handlePress = (dir: any) => {
        setDirection(dir);
        // Add your logic for handling direction press (e.g., move a character)
        // console.log(Pressed: ${ dir });
    };

    return (
        <View style={styles.container}>
            <View style={styles.dPad}>
                {/* Up Arrow */}
                <TouchableOpacity
                    style={[styles.button, styles.upButton]}
                    onPress={() => handlePress('Up')}
                >
                    <Text style={styles.arrow}>↑</Text>
                </TouchableOpacity>

                {/* Left Arrow */}
                <TouchableOpacity
                    style={[styles.button, styles.leftButton]}
                    onPress={() => handlePress('Left')}
                >
                    <Text style={styles.arrow}>←</Text>
                </TouchableOpacity>

                {/* Center (GTR Label) */}
                <View style={styles.center}>
                    <Text style={styles.centerText}>GTR</Text>
                </View>

                {/* Right Arrow */}
                <TouchableOpacity
                    style={[styles.button, styles.rightButton]}
                    onPress={() => handlePress('Right')}
                >
                    <Text style={styles.arrow}>→</Text>
                </TouchableOpacity>

                {/* Down Arrow */}
                <TouchableOpacity
                    style={[styles.button, styles.downButton]}
                    onPress={() => handlePress('Down')}
                >
                    <Text style={styles.arrow}>↓</Text>
                </TouchableOpacity>
            </View>

            {/* Display the pressed direction */}
            <Text style={styles.directionText}>
                {direction ? `Direction : ${direction}` : 'Press a direction'}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
    },
    dPad: {
        width: 150,
        height: 150,
        position: 'relative',
        backgroundColor: '#fff',
        borderRadius: 75,
        borderWidth: 2,
        borderColor: '#ccc',
    },
    button: {
        position: 'absolute',
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    upButton: {
        top: 0,
        left: 50,
        backgroundColor: '#90ee90', // Light green for the up button
    },
    leftButton: {
        top: 50,
        left: 0,
    },
    rightButton: {
        top: 50,
        right: 0,
    },
    downButton: {
        bottom: 0,
        left: 50,
    },
    arrow: {
        fontSize: 24,
        color: '#333',
    },
    center: {
        position: 'absolute',
        top: 50,
        left: 50,
        width: 50,
        height: 50,
        backgroundColor: '#ddd',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    centerText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    directionText: {
        marginTop: 20,
        fontSize: 18,
        color: '#333',
    },
});

export default DPad;