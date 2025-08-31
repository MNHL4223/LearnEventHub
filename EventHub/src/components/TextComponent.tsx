import { View, Text, StyleProp, TextStyle } from "react-native";
import React from "react";
import { appColors } from "../constants/appColors";
import { fontFamilies } from "../constants/fontFamilies";
import { globalStyles } from "../styles/globalStyle";

interface Props {
  text?: string;
  fontFamily?: string;
  size?: number;
  color?: string;
  styles?: StyleProp<TextStyle>;
  flex?: number;
}

const TextComponent = (props: Props) => {
  const { text, fontFamily, size, styles, color, flex } = props;
  return (
    <Text
      style={[
        globalStyles.text,
        {
          color: color ?? appColors.text,
          flex: flex ?? 0,
          fontSize: size ?? 14,
          fontFamily: fontFamilies.regular,
        },
        styles
      ]}
    >
      {text}
    </Text>
  );
};

export default TextComponent;
