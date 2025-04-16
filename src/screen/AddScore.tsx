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

const AddScore = () => {
  const { navigate } = useNavigation();
  useEffect(() => {
    const setDefaultData = async () => {
      const existingData = await AsyncStorage.getItem('@scorecard_data');
      if (!existingData) {
        await AsyncStorage.setItem('@scorecard_data', JSON.stringify(dummyScoreData));
        console.log('Default data set');
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
          <Text
            style={{
              fontSize: 20,
              fontWeight: "600",
              color: "#000000",
            }}
          >Qutab Golf course</Text>
        </View>
        <View style={styles.fdr}>
          <ScoreDetailIcon
            onPress={() => navigate('ScoreDetail')}
          />
          <UserIcon />
        </View>
      </View>
      {/* bgImage header */}
      <ImageBackground
        source={require('../assets/Image/bgImg.png')}
        style={{
          width: '100%',
          height: 80,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <View
          style={{
            width: '100%',
            height: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 20,
          }}
        >
          <ArrowIcon />
          <Avatar text="1" size={55} />
          <BoldRowItem text="YARDS" unit='200' />
          <BoldRowItem text="PAR" unit='3' />
          <BoldRowItem text="INDEX" unit='12' />
          <ArrowIcon
            style={{ transform: [{ rotate: '180deg' }] }}
          />
        </View>
      </ImageBackground>
      <ScoreCard />
    </Container>
  );
};

export default AddScore;

const styles = StyleSheet.create({
  //header
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
  }
});
