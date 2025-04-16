import { ActivityIndicator, Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import Container from "../components/Container";
import ArrowIcon from "../assets/svg/ArrowIcon";
import { useNavigation } from "@react-navigation/native";
import { ScoreTable } from "../components/ScoreTable";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { dummyScoreData } from "../utils/data";

const data = [
  {
    id: 'hole',
    label: "Hole",
    bgColor: "#4F4F4F",
    textColor: "white",
    fontWeight: "bold",
    fontSize: 14,
    value: Array.from({ length: 18 }, (_, i) => ({
      holeNo: i + 1,
      val: i + 1,
      textColorImp: 'white',
      textCircleColor: '#4F4F4F',
    })),
  },
  {
    id: 'par',
    label: "PAR",
    bgColor: "#ECF2F5",
    textColor: "black",
    fontWeight: "bold",
    fontSize: 14,
    value: [
      { holeNo: 1, val: 420, textColorImp: 'green', textCircleColor: 'pink' },
      { holeNo: 2, val: 520, textColorImp: 'red', textCircleColor: 'yellow' },
      { holeNo: 3, val: 390, textColorImp: 'blue', textCircleColor: 'lightblue' },
      { holeNo: 4, val: 350 },
      { holeNo: 5, val: 450 },
      { holeNo: 6, val: 300 },
      { holeNo: 7, val: 480 },
      { holeNo: 8, val: 420 },
      { holeNo: 9, val: 400 },
      { holeNo: 10, val: 390 },
      { holeNo: 11, val: 440 },
      { holeNo: 12, val: 370 },
      { holeNo: 13, val: 410 },
      { holeNo: 14, val: 430 },
      { holeNo: 15, val: 450 },
      { holeNo: 16, val: 460 },
      { holeNo: 17, val: 470 },
      { holeNo: 18, val: 490 },
    ],
  },
  {
    id: 'yard',
    label: "Yard",
    value: Array.from({ length: 18 }, (_, i) => ({
      holeNo: i + 1,
      val: 400 + i * 5,
      textColorImp: 'black',
      textCircleColor: 'white',
    })),
  },
  {
    id: 'name',
    label: "Dinesh",
    bgColor: "#F4F4F4",
    textColor: "black",
    fontWeight: "bold",
    fontSize: 14,
    value: Array.from({ length: 18 }, (_, i) => ({
      holeNo: i + 1,
      val: Math.floor(Math.random() * 3) + 3,
      textColorImp: 'white',
      textCircleColor: 'green',
    })),
  },
  {
    id: 'putts',
    label: "Putts",
    value: Array.from({ length: 18 }, (_, i) => ({
      holeNo: i + 1,
      val: Math.floor(Math.random() * 3) + 1,
    })),
  },
  {
    id: 'fir',
    label: "FIR",
    value: Array.from({ length: 18 }, (_, i) => ({
      holeNo: i + 1,
      val: Math.random() > 0.5 ? 1 : 0,
    })),
  },
  {
    id: 'reg',
    label: "REG",
    value: Array.from({ length: 18 }, (_, i) => ({
      holeNo: i + 1,
      val: Math.random() > 0.5 ? 1 : 0,
    })),
  },
  {
    id: 'upDown',
    label: "UP/Down",
    value: Array.from({ length: 18 }, (_, i) => ({
      holeNo: i + 1,
      val: Math.random() > 0.5 ? 1 : 0,
    })),
  },
  {
    id: 'penalty',
    label: "Penalty",
    value: Array.from({ length: 18 }, (_, i) => ({
      holeNo: i + 1,
      val: Math.random() > 0.8 ? 1 : 0,
    })),
  },
];


const ScoreDetail = () => {
  const { goBack } = useNavigation();

  const [scorecardData, setScorecardData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    const json = await AsyncStorage.getItem('@scorecard_data');
    setScorecardData(json ? JSON.parse(json) : []);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) return <ActivityIndicator />;


  return (
    <Container
      bgColor="white"
    >
      <View
        style={{
          backgroundColor: 'black',
          flexDirection: 'row',
          padding: 20,
          gap: 20,
          alignItems: 'center',
          marginBottom: 30
        }}
      >
        <ArrowIcon onPress={goBack} />
        <Text
          style={{
            fontSize: 16,
            fontWeight: '400',
            color: 'white'
          }}
        >Score Card</Text>
      </View>
      <ScoreTable
        scorecardData={scorecardData}
      />
      <TouchableOpacity
        onPress={async () => {
          await AsyncStorage.setItem('@scorecard_data', JSON.stringify(dummyScoreData));
          setScorecardData(dummyScoreData)
        }}
        style={{
          backgroundColor: '#0A599B',
          marginTop: 20,
          width: 100,
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          borderRadius: 8
        }}
      >
        <Text style={{
          color: 'white',
          fontSize: 16,
          fontWeight: '600'
        }}>Reset</Text>
      </TouchableOpacity>

    </Container>
  );
};

export default ScoreDetail;

