import { View, Image, TouchableOpacity, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { globalStyles } from "../../styles/globalstyle";
import Swiper from "react-native-swiper";
import { appInfo } from "../../constants/appInfos";
import { appColors } from "../../constants/appColors";

const OnboardingScreen = ({ navigation }: any) => {
  const [index, setIndex] = useState(0);
  return (
    <View style={[globalStyles.container]}>
      <Swiper
        style={{}}
        loop={false}
        activeDotColor={appColors.white}
        dotColor={appColors.gray}
        onIndexChanged={(num) => {
          setIndex(num);
          console.log(` màn hình onboarding hiện tại ${index}`);
        }}
        index={index}
      >
        <Image
          source={require("../../assets/images/onboarding-1.png")}
          style={{
            flex: 1,
            width: appInfo.sizes.WIDTH,
            height: appInfo.sizes.HEIGHT,
          }}
        />
        <Image
          source={require("../../assets/images/onboarding-2.png")}
          style={{
            flex: 1,
            width: appInfo.sizes.WIDTH,
            height: appInfo.sizes.HEIGHT,
          }}
        />
        <Image
          source={require("../../assets/images/onboarding-3.png")}
          style={{
            flex: 1,
            width: appInfo.sizes.WIDTH,
            height: appInfo.sizes.HEIGHT,
          }}
        />
      </Swiper>
      <View
        style={[
          {
            flexDirection: "row",
            position: "absolute",
            bottom: 0,
            right: 0,
            left: 0,
            paddingHorizontal: 25,
            paddingVertical: 35,
            justifyContent: "space-between",
          },
        ]}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("LoginScreen");
          }}
        >
          <Text style={[styles.text, { color: appColors.gray }]}>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            index < 2 ? setIndex(index + 1) : navigation.navigate("LoginScreen")
          }
        >
          <Text style={[styles.text]}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OnboardingScreen;
const styles = StyleSheet.create({
  text: {
    color: appColors.white,
    fontSize: 15,
    fontWeight: 500,
  },
});
