import React from "react";
import { View, Text, Button } from "react-native";

type PropTypes = {
  title: string;
  disabled?: boolean;
  onPress?: () => void;
};

const CustomButton = (props: PropTypes) => {
  return (
    <Button
      {...props}
      title={props.title}
      onPress={props.onPress}
      disabled={props.disabled}
    />
  );
};

export default CustomButton;
