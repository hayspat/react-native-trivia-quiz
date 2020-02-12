import React from "react";
import CustomButton from "./CustomButton";
import { Text, View, StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";
import { CustomText } from "./CustomText";

type PropTypes = {
  points: number;
  onPress: () => void;
  page: "success" | "wrong" | "end" | "timeout";
  gameOver: boolean;
  earnedPoints?: number;
  restartGame: () => void;
};

const Feedback = ({
  points,
  gameOver,
  onPress,
  page,
  earnedPoints,
  restartGame
}: PropTypes) => {
  const getSvg = () => {
    if (page === "success") {
      return (
        <Svg width="100" height="100" viewBox="0 0 24 24" fill="white">
          <Path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
        </Svg>
      );
    } else if (page === "wrong") {
      return (
        <Svg width="100" height="100" viewBox="0 0 24 24" fill="white">
          <Path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z" />
        </Svg>
      );
    } else if (page === "timeout") {
      return (
        <Svg width="100" height="100" viewBox="0 0 24 24" fill="white">
          <Path d="M18.513 7.119c.958-1.143 1.487-2.577 1.487-4.036v-3.083h-16v3.083c0 1.459.528 2.892 1.487 4.035l3.087 3.68c.566.677.57 1.625.009 2.306l-3.13 3.794c-.937 1.136-1.453 2.555-1.453 3.995v3.107h16v-3.107c0-1.44-.517-2.858-1.453-3.994l-3.13-3.794c-.562-.681-.558-1.629.009-2.306l3.087-3.68zm-.513-4.12c0 1.101-.363 2.05-1.02 2.834l-.978 1.167h-8.004l-.978-1.167c-.66-.785-1.02-1.736-1.02-2.834h12zm-.996 15.172c.652.791.996 1.725.996 2.829h-1.061c-1.939-2-4.939-2-4.939-2s-3 0-4.939 2h-1.061c0-1.104.344-2.039.996-2.829l3.129-3.793c.342-.415.571-.886.711-1.377h.164v1h2v-1h.163c.141.491.369.962.711 1.376l3.13 3.794zm-6.004-1.171h2v1h-2v-1zm0-2h2v1h-2v-1z" />
        </Svg>
      );
    }
  };

  return (
    <View style={styles.feedback}>
      {getSvg()}
      <CustomText>{page.toUpperCase()}</CustomText>
      {gameOver ? <CustomText>GAME OVER</CustomText> : null}
      <CustomText>
        You have earned {page === "success" ? earnedPoints : "no "}
        points
      </CustomText>
      <CustomText>Total: {points}</CustomText>
      <CustomButton
        title={gameOver ? "Play Again" : "Next Question"}
        onPress={gameOver ? restartGame : onPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  feedback: {
    padding: 20,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default Feedback;
