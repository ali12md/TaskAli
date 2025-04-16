import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import ArrowIcon from "../assets/svg/ArrowIcon";
import TickIcon from "../assets/svg/TickIcon";
import Avatar from "./Avatar";
import Counter from "./Counter";
import DirectionalPad from "./DirectionalPad";
import RowItem from "./RowItem";
import CircularText from "./CircularText";

const SCORECARD_KEY = '@scorecard_data';

const ScoreCard = () => {
    const [score, setScore] = useState(0);
    const [hole, setHole] = useState(0);

    const addScore = async (holeNo: number, value: number) => {
        const json = await AsyncStorage.getItem(SCORECARD_KEY);
        if (!json) return;

        const data = JSON.parse(json);

        const nameRow = data.find((row: { id: string; value: any[] }) => row.id === 'name');
        if (nameRow) {
            const index = nameRow.value.findIndex((item: { holeNo: number }) => item.holeNo === holeNo);
            if (index !== -1) {
                nameRow.value[index] = {
                    ...nameRow.value[index],
                    val: value,
                    textColorImp: index % 2 === 0 ? 'white' : undefined,
                    textCircleColor: index % 2 === 0 ? '#0A599B' : undefined,
                };
            }

            nameRow.value.forEach((item: { holeNo: string; val?: number }, idx: number) => {
                if (item.holeNo === 'OUT') {
                    item.val = nameRow.value.slice(0, 9).reduce((acc: number, curr: { val?: number }) => acc + (curr.val || 0), 0);
                }
                if (item.holeNo === 'IN') {
                    item.val = nameRow.value.slice(9, 18).reduce((acc: number, curr: { val?: number }) => acc + (curr.val || 0), 0);
                }
                if (item.holeNo === 'total') {
                    item.val = nameRow.value.slice(0, 18).reduce((acc: number, curr: { val?: number }) => acc + (curr.val || 0), 0);
                }
            });
        }

        await AsyncStorage.setItem(SCORECARD_KEY, JSON.stringify(data));
        console.log('Score updated');
    };


    useEffect(() => {
        addScore(hole, score);
    }, [score, hole]);

    return (
        <View style={styles.container}>
            <View style={styles.topSection}>
                <View style={styles.userInfo}>
                    <Avatar size={48} url="https://pbs.twimg.com/profile_images/429442426038538240/6Ac9kykG_400x400.jpeg" />
                    <View>
                        <Text style={styles.userName}>James Jordan</Text>
                        <Text style={styles.userDetails}>HCAP 4 | Total: 0 (0)</Text>
                    </View>
                </View>
                <View style={styles.arrowSection}>
                    <CircularText bottomText={2} topText={4} />
                    <ArrowIcon stroke={'black'} style={styles.arrowIcon} width={20} />
                </View>
            </View>

            <View style={styles.middleSection}>
                <DirectionalPad />
                <DirectionalPad />
            </View>

            <View style={styles.rowSection}>
                <RowItem text="SANDIE" icon={<TickIcon width={23} />} />
                <RowItem text="UP/DOWN" icon={<TickIcon width={23} />} />
                <RowItem number={2} text="PENALTY" />
            </View>

            <View style={styles.divider} />

            <View style={styles.counterSection}>
                <Counter
                    title="Score"
                    value={score}
                    onPressMinus={() => setScore((prev) => prev - 1)}
                    onPressPlus={() => setScore((prev) => prev + 1)}
                />
                <Counter
                    title="Hole"
                    value={hole}
                    onPressMinus={() => setHole((prev) => prev - 1)}
                    onPressPlus={() => setHole((prev) => prev + 1)}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        marginVertical: 20,
        backgroundColor: 'white',
        borderRadius: 6,
        padding: 10,
        shadowColor: "#000000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.17,
        shadowRadius: 3.05,
        elevation: 4,
    },
    topSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 25,
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
    },
    userName: {
        fontSize: 16,
        fontWeight: '400',
        color: 'black',
    },
    userDetails: {
        fontSize: 13,
        fontWeight: '400',
        color: '#095290',
    },
    arrowSection: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        marginRight: 5,
    },
    arrowIcon: {
        transform: [{ rotate: '90deg' }],
    },
    middleSection: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 25,
        marginHorizontal: 25,
    },
    rowSection: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 25,
        marginBottom: 15,
    },
    divider: {
        width: '100%',
        height: 1,
        marginBottom: 20,
        backgroundColor: '#D3D3D3',
    },
    counterSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center',
        gap: 45,
    },
});

export default ScoreCard;
