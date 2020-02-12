import React from "react";
import { Text } from "react-native";

export const CustomText = props => {
  return (
    <Text style={{ padding: 15, fontSize: 16, color: "white", ...props.style }}>
      {props.children}
    </Text>
  );
};
