import { StyleSheet, Text, View } from "react-native";
import React, { ReactNode } from "react";
import TickIcon from "../assets/svg/TickIcon";

interface TRowItem {
    icon?: ReactNode,
    text: string;
    number?: number
}
const RowItem = ({
    icon,
    text,
    number
}: TRowItem) => {
    return (
        <View
            style={{
                alignItems: 'center',
                // gap: 5
            }}
        >
            <View style={{ height: 27, width: 27, alignItems: 'center', justifyContent: 'center' }}>
                {icon ? icon : <Text
                    style={{
                        fontSize: 25,
                        fontWeight: '500',
                        color: '#969696'
                    }}
                >{number}
                </Text>}
            </View>
            <Text
                style={{ fontSize: 16, fontWeight: '500' }}
            >{text}</Text>
        </View>
    );
};

export default RowItem;

const styles = StyleSheet.create({});
