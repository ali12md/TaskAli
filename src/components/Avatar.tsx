import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface AvatarProps {
    url?: string;
    text?: string;
    size?: number;
}

const Avatar: React.FC<AvatarProps> = ({ url, text, size = 50 }) => {
    return (
        <View style={[styles.container, { width: size, height: size }]}>
            <Image
                source={{ uri: url }}
                style={[styles.image, { width: size, height: size, borderRadius: size / 2 }]}
            />
            <Text style={[styles.text, { fontSize: size / 2 }]}>{text}</Text>
        </View>
    );
};

// Styles
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        resizeMode: 'cover',
        borderWidth: 2,
        borderColor: '#fff',
        backgroundColor: 'white'
    },
    text: {
        position: 'absolute',
        color: '#516374',
        fontWeight: '800',
        textAlign: 'center',
        fontSize: 30,
    },
});

export default Avatar;
