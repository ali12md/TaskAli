import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Container from "../components/Container";
import ArrowIcon from "../assets/svg/ArrowIcon";
import { useNavigation } from "@react-navigation/native";

const ScoreDetail = () => {
  const { goBack } = useNavigation();
  return (
    <Container>
      <View
        style={{
          backgroundColor: 'black',
          flexDirection: 'row',
          padding: 20,
          gap: 20,
          alignItems: 'center'
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
    </Container>
  );
};

export default ScoreDetail;

const styles = StyleSheet.create({});
