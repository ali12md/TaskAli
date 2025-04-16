import { ActivityIndicator, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import Container from "../components/Container";
import ArrowIcon from "../assets/svg/ArrowIcon";
import { useNavigation } from "@react-navigation/native";
import { ScoreTable } from "../components/ScoreTable";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { colorLegend, dummyScoreData } from "../utils/data";

const ScoreDetail = () => {
  const { goBack } = useNavigation();

  const [scorecardData, setScorecardData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    const json = await AsyncStorage.getItem('scorecard_data');
    setScorecardData(json ? JSON.parse(json) : []);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);


  return (
    <Container bgColor="white">
      <View style={styles.header}>
        <ArrowIcon onPress={goBack} />
        <Text style={styles.headerText}>Score Card</Text>
      </View>
      <ScoreTable scorecardData={scorecardData} />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.colorLegend}
      >
        {colorLegend.map((item, index) => (
          <View key={index} style={styles.legendItem}>
            <View style={[styles.circle, { backgroundColor: item.color }]} />
            <Text style={styles.legendText}>{item.title}</Text>
          </View>
        ))}
      </ScrollView>
      {/* <TouchableOpacity
        onPress={async () => {
          await AsyncStorage.setItem('scorecard_data', JSON.stringify(dummyScoreData));
          setScorecardData(dummyScoreData);
        }}
        style={styles.resetButton}
      >
        <Text style={styles.resetButtonText}>Reset</Text>
      </TouchableOpacity> */}
    </Container>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'black',
    flexDirection: 'row',
    padding: 20,
    gap: 20,
    alignItems: 'center',
    marginBottom: 30,
  },
  headerText: {
    fontSize: 16,
    fontWeight: '400',
    color: 'white',
  },
  colorLegend: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    paddingLeft: 120,
    height: 50,
    marginTop: 10,
    paddingRight: 50,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
  },
  circle: {
    width: 15,
    height: 15,
    borderRadius: 7.5,
    marginRight: 8,
  },
  legendText: {
    fontSize: 15,
    color: 'black',
  },
  resetButton: {
    backgroundColor: '#0A599B',
    width: 100,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 8,
  },
  resetButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default ScoreDetail;
