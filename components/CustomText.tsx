import React from "react";
import { Text } from "react-native";

export const CustomText = props => {
  return <Text style={{ color: "white" }}>{props.children}</Text>;
};
