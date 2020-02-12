import React from "react";
import { View, StyleSheet, Button } from "react-native";

type PropTypes = {
  title: string;
  disabled?: boolean;
  onPress?: () => void;
  color?: string;
};

const CustomButton = (props: PropTypes) => {
  return (
    <View
      style={{
        ...styles.button,
        borderColor: props.color ? props.color : "#3F3F3F"
      }}
    >
      <Button
        {...props}
        color={props.color ? props.color : "#3F3F3F"}
        title={props.title}
        onPress={props.onPress}
        disabled={props.disabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    marginVertical: 10,
    borderWidth: 3,
    borderRadius: 25,
    overflow: "hidden"
  }
});

export default CustomButton;
