import React, { useEffect } from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import ArrowIcon from "../assets/svg/ArrowIcon";
import CrossIcon from "../assets/svg/CrossIcon";
import ScoreDetailIcon from "../assets/svg/ScoreDetailIcon";
import UserIcon from "../assets/svg/UserIcon";
import BoldRowItem from "../components/BoldRowItem";
import Container from "../components/Container";
import Avatar from "../components/Avatar";
import { useNavigation } from "@react-navigation/native";
import ScoreCard from "../components/ScoreCard";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { dummyScoreData } from "../utils/data";

//// I couldn't complete DirectionPad UI due to a lack of time ,
// I started this task on Monday evening because of my sister's wedding

const AddScore = () => {
  const { navigate } = useNavigation();

  useEffect(() => {
    const setDefaultData = async () => {
      const existingData = await AsyncStorage.getItem('@scorecard_data');
      if (!existingData) {
        await AsyncStorage.setItem('@scorecard_data', JSON.stringify(dummyScoreData));
      }
    };
    setDefaultData();
  }, []);

  return (
    <Container>
      {/* header */}
      <View style={styles.header}>
        <View style={styles.fdr}>
          <CrossIcon />
          <Text style={styles.headerText}>Qutab Golf course</Text>
        </View>
        <View style={styles.fdr}>
          <ScoreDetailIcon onPress={() => navigate('ScoreDetail')} />
          <UserIcon />
        </View>
      </View>

      {/* bgImage header */}
      <ImageBackground source={require('../assets/Image/bgImg.png')} style={styles.bgImage}>
        <View style={styles.imageContent}>
          <ArrowIcon />
          <Avatar text="1" size={55} />
          <BoldRowItem text="YARDS" unit='200' />
          <BoldRowItem text="PAR" unit='3' />
          <BoldRowItem text="INDEX" unit='12' />
          <ArrowIcon style={styles.arrowIcon} />
        </View>
      </ImageBackground>
      <ScoreCard />
    </Container>
  );
};

export default AddScore;

const styles = StyleSheet.create({
  // Header styles
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  fdr: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#000000",
  },

  // Background image and content styles
  bgImage: {
    width: '100%',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContent: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  arrowIcon: {
    transform: [{ rotate: '180deg' }],
  },
});
