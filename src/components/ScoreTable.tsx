import React from 'react';
import { View, Text, FlatList, ScrollView } from 'react-native';

const CELL_HEIGHT = 50;
const FIXED_WIDTH = 100;
const DYNAMIC_CELL_WIDTH = 70;
const BORDER_WIDTH = 0.5;
const BORDER_RADIUS = 6;



const Cell = ({
    data,
    bgColor = 'white',
    textColor = '#666666',
    isHeader,
}: {
    data: { holeNo: number; val: any; textColorImp?: string; textCircleColor?: string },
    bgColor?: string,
    textColor?: string,
    isHeader?: boolean
}) => (
    <View
        style={{
            width: DYNAMIC_CELL_WIDTH,
            height: CELL_HEIGHT,
            borderRightWidth: BORDER_WIDTH,
            borderBottomWidth: BORDER_WIDTH,
            borderColor: '#ccc',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: bgColor,
            borderTopRightRadius: isHeader ? BORDER_RADIUS : 0,
        }}
    >
        <View
            style={{
                backgroundColor: data.textCircleColor || 'transparent',
                paddingHorizontal: 6,
                paddingVertical: 2,
                borderRadius: 20,
                minWidth: 30,
                height: 30,
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <Text style={{ color: data.textColorImp || textColor }}>{data.val}</Text>
        </View>
    </View>
);

const ScrollableRow = ({ item }) => (
    <FlatList
        data={item.value}
        horizontal
        keyExtractor={(val) => `col-${val.holeNo}`}
        scrollEnabled={false}
        renderItem={({ item: cellItem, index }) => (
            <Cell
                data={cellItem}
                bgColor={item.bgColor}
                textColor={item.textColor}
                isHeader={item.label === "Hole" && item.value.length - 1 === index}
            />
        )}
    />
);

export const ScoreTable = ({ scorecardData }: any) => {
    return (
        <View style={{ marginLeft: 20, borderColor: '#ccc', borderRadius: BORDER_RADIUS }}>
            <View style={{ flexDirection: 'row' }}>
                <View>
                    <FlatList
                        data={scorecardData}
                        keyExtractor={(item) => item.label}
                        scrollEnabled={false}
                        renderItem={({ item }) => (
                            <View
                                style={{
                                    width: FIXED_WIDTH,
                                    height: CELL_HEIGHT,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderLeftWidth: BORDER_WIDTH,
                                    borderRightWidth: BORDER_WIDTH,
                                    borderBottomWidth: BORDER_WIDTH,
                                    borderColor: '#ccc',
                                    backgroundColor: item.bgColor || 'white',
                                    borderTopLeftRadius: item.label === 'Hole' ? BORDER_RADIUS : 0
                                }}
                            >
                                <Text style={{
                                    fontWeight: item.fontWeight || 'normal',
                                    fontSize: item?.fontSize || 14,
                                    color: item.textColor || 'black'
                                }}>
                                    {item.label}
                                </Text>
                            </View>
                        )}
                    />
                </View>

                <ScrollView horizontal>
                    <FlatList
                        data={scorecardData}
                        keyExtractor={(item) => item.label}
                        scrollEnabled={false}
                        renderItem={({ item }) => <ScrollableRow item={item} />}
                    />
                    <View style={{ width: 20 }} />
                </ScrollView>
            </View>
        </View>
    );
};
