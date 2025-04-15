import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import Avatar from "../../components/Avatar";
import ArrowIcon from "../../assets/svg/ArrowIcon";
import CardIcon2 from "../../assets/svg/CardIcon2";
import CardIcon1 from "../../assets/svg/CardIcon1";
import DirectionalPad from "../../components/DirectionalPad";
import RowItem from "../../components/RowItem";
import TickIcon from "../../assets/svg/TickIcon";
import Counter from "../../components/Counter";

const ScoreCard = () => {
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
                <Counter />
                <Counter />
            </View>
        </View>
    );
};

export default ScoreCard;


const directions = [
    { label: 'up', style: { top: 20, left: '42%' }, rotation: '0deg' },
    { label: 'left', style: { left: 20, top: '42%' }, rotation: '-90deg' },
    { label: 'right', style: { right: 20, top: '42%' }, rotation: '90deg' },
    { label: 'down', style: { bottom: 20, left: '42%' }, rotation: '180deg' },
];
