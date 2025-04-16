import React, { useEffect, useMemo, useState } from 'react';
import { View, Text, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import CircleplusIcon from '../assets/svg/CircleplusIcon';

const CELL_HEIGHT = 40;
const FIXED_WIDTH = 100;
const DYNAMIC_CELL_WIDTH = 70;
const BORDER_WIDTH = 0.5;
const BORDER_RADIUS = 6;
const POSITION = -13;

type ScorecardItem = {
    id: string;
    label: string;
    bgColor?: string;
    textColor?: string;
    fontSize?: number;
    fontWeight?: string;
    value: { holeNo: number | string; val: any; textColorImp?: string; textCircleColor?: string }[];
};

type ScoreTableProps = {
    scorecardData: ScorecardItem[];
};

type CellProps = {
    data: { holeNo: number | string; val: any; textColorImp?: string; textCircleColor?: string };
    bgColor?: string;
    textColor?: string;
    isHeader?: boolean;
    fontSize?: number;
    fontWeight?: string;
};

const Cell = ({
    data,
    bgColor = 'white',
    textColor = '#666666',
    fontSize = 14,
    fontWeight = '400',
    isHeader,
}: CellProps) => (
    <View
        style={{
            width: DYNAMIC_CELL_WIDTH,
            height: CELL_HEIGHT,
            borderRightWidth: BORDER_WIDTH,
            borderBottomWidth: BORDER_WIDTH,
            borderColor: '#ccc',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: (data?.holeNo === 'OUT' || data?.holeNo === 'IN') ? '#253C51' : bgColor,
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
            <Text style={{
                color: data.textColorImp || textColor,
                fontWeight: fontWeight,
                fontSize
            }}>{data.val}</Text>
        </View>
    </View>
);

const ScrollableRow = ({ item }: { item: ScorecardItem }) => (
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
                fontSize={item?.fontSize}
                fontWeight={item?.fontWeight}
            />
        )}
    />
);

export const ScoreTable = ({ scorecardData }: ScoreTableProps) => {
    const [hiddenIds, setHiddenIds] = useState<Set<string>>(new Set());

    const toggleIds = (ids: string[]) => {
        setHiddenIds(prev => {
            const newSet = new Set(prev);
            const shouldHide = ids.every(id => newSet.has(id));
            ids.forEach(id => {
                shouldHide ? newSet.delete(id) : newSet.add(id);
            });
            return newSet;
        });
    };

    const toggleParRows = () => toggleIds(['yard', 'index']);
    const toggleNameRows = () => toggleIds(['putts', 'fir', 'reg', 'upDown', 'penalty']);

    const visibleData = useMemo(() => {
        return scorecardData.filter(item => !hiddenIds.has(item.id));
    }, [scorecardData, hiddenIds]);

    useEffect(() => {
        toggleParRows();
        toggleNameRows();
    }, [])

    return (
        <View style={{ marginLeft: 20, borderColor: '#ccc', borderRadius: BORDER_RADIUS }}>
            <View style={{ flexDirection: 'row' }}>
                {/* Fixed Column */}
                <View>
                    <FlatList
                        data={visibleData}
                        keyExtractor={(item) => item.label}
                        scrollEnabled={false}
                        style={{ overflow: 'visible' }}
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
                                    borderTopLeftRadius: item.label === 'Hole' ? BORDER_RADIUS : 0,
                                    position: 'relative',
                                }}
                            >
                                <Text style={{
                                    fontWeight: item.fontWeight || '400',
                                    fontSize: item?.fontSize || 14,
                                    color: item.textColor || '#666666',
                                    textAlign: 'center'
                                }}>
                                    {item.label}
                                </Text>

                                {/* Toggle Icon - PAR */}
                                {item?.id === 'par' && (
                                    <TouchableOpacity
                                        onPress={toggleParRows}
                                        style={{
                                            position: 'absolute',
                                            left: POSITION,
                                            top: POSITION,
                                            zIndex: 10
                                        }}
                                    >
                                        <CircleplusIcon
                                            variant={hiddenIds.has('yard') ? 'add' : 'remove'}
                                        />
                                    </TouchableOpacity>
                                )}

                                {/* Toggle Icon - NAME */}
                                {item?.id === 'name' && (
                                    <TouchableOpacity
                                        onPress={toggleNameRows}
                                        style={{
                                            position: 'absolute',
                                            left: POSITION,
                                            zIndex: 10
                                        }}
                                    >
                                        <CircleplusIcon
                                            variant={hiddenIds.has('putts') ? 'add' : 'remove'}
                                        />
                                    </TouchableOpacity>
                                )}
                            </View>
                        )}
                    />
                </View>

                {/* Scrollable Table */}
                <ScrollView horizontal>
                    <FlatList
                        data={visibleData}
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
