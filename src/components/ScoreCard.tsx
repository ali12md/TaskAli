import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import ArrowIcon from "../assets/svg/ArrowIcon";
import TickIcon from "../assets/svg/TickIcon";
import Avatar from "./Avatar";
import Counter from "./Counter";
import DirectionalPad from "./DirectionalPad";
import RowItem from "./RowItem";

const ScoreCard = () => {
    const [score, setScore] = useState(0);
    const [hole, setHole] = useState(0);

    const addScore = async (holeNo: number, value: number) => {
        const json = await AsyncStorage.getItem('@scorecard_data');
        if (!json) return;

        const data = JSON.parse(json);

        // "name" row ko find karo
        const nameRow = data.find((row) => row.id === 'name');

        if (nameRow) {
            const index = nameRow.value.findIndex((item) => item.holeNo === holeNo);
            if (index !== -1) {
                nameRow.value[index] = {
                    ...nameRow.value[index],
                    val: value,
                    textColorImp: index % 2 === 0 && 'white',
                    textCircleColor: index % 2 === 0 && '#0A599B',
                };
            }

            // Update 'OUT', 'IN', and 'total' fields with numeric values
            nameRow.value.forEach((item, idx) => {
                if (item.holeNo === 'OUT') {
                    item.val = nameRow.value.slice(0, 9).reduce((acc, curr) => acc + (curr.val || 0), 0);  // Sum of first 9 holes
                }
                if (item.holeNo === 'IN') {
                    item.val = nameRow.value.slice(9, 18).reduce((acc, curr) => acc + (curr.val || 0), 0);  // Sum of holes 10-18
                }
                if (item.holeNo === 'total') {
                    item.val = nameRow.value.slice(0, 18).reduce((acc, curr) => acc + (curr.val || 0), 0);  // Total sum of all holes
                }
            });
        }

        await AsyncStorage.setItem('@scorecard_data', JSON.stringify(data));
        console.log('Score updated');
    };


    useEffect(() => {
        addScore(hole, score)
    }, [score, hole])

    return (
        <View
            style={{
                marginHorizontal: 10,
                marginVertical: 20,
                backgroundColor: 'white',
                borderRadius: 6,
                padding: 10,
                shadowColor: "#000000",
                shadowOffset: {
                    width: 0,
                    height: 3,
                },
                shadowOpacity: 0.17,
                shadowRadius: 3.05,
                elevation: 4
            }}
        >
            {/* top */}
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 25
            }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 10
                }}>
                    <Avatar
                        size={48}
                        url="https://pbs.twimg.com/profile_images/429442426038538240/6Ac9kykG_400x400.jpeg"
                    />
                    <View>
                        <Text
                            style={{
                                fontSize: 16,
                                fontWeight: '400',
                                color: 'blacks',

                            }}
                        >James Jordan</Text>
                        <Text
                            style={{
                                fontSize: 13,
                                fontWeight: '400',
                                color: '#095290',
                            }}
                        >{`HCAP 4  |  Total: 0 (0)`}</Text>
                    </View>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 10,
                        marginRight: 5
                    }}
                >
                    <Text>sd</Text>
                    <ArrowIcon
                        stroke={'black'}
                        style={{ transform: [{ rotate: '90deg' }] }}
                        width={20}
                    />
                </View>
            </View>
            {/* mid */}
            <View style={{
                flexDirection: 'row',
                // gap: 25,
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: 25,
                marginHorizontal: 25
            }}>
                <DirectionalPad />
                <DirectionalPad />
            </View>
            {/* mid 2 */}
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginHorizontal: 25,
                    marginBottom: 15
                }}
            >
                <RowItem
                    text="SANDIE"
                    icon={<TickIcon width={23} />}
                />
                <RowItem
                    text="UP/DOWN"
                    icon={<TickIcon width={23} />}
                />
                <RowItem number={2} text="PENALTY" />
            </View>
            {/* divider */}
            <View style={{
                width: '100%',
                height: 1,
                marginBottom: 20,
                backgroundColor: '#D3D3D3'
            }} />
            {/* counter */}
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignSelf: 'center',
                    gap: 45
                }}
            >
                <Counter
                    title={'Score'}
                    value={score}
                    onPressMinus={() => {
                        setScore((prev) => prev - 1)
                    }}
                    onPressPlus={() => {
                        setScore((prev) => prev + 1)
                    }}
                />
                <Counter
                    title={'Hole'}
                    value={hole}
                    onPressMinus={() => {
                        setHole((prev) => prev - 1)
                    }}
                    onPressPlus={() => {
                        setHole((prev) => prev + 1)
                    }}
                />
            </View>
        </View>
    );
};

export default ScoreCard;
