import { View, Text, StyleProp, TextStyle } from "react-native";
import React from "react";
import { appColors } from "../constants/appColors";
import { fontFamilies } from "../constants/fontFamilies";
import { globalStyles } from "../styles/globalStyle";

interface Props {
  text?: string;
  font?: string;
  size?: number;
  color?: string;
  styles?: StyleProp<TextStyle>;
  flex?: number;
  title?: boolean
}

const TextComponent = (props: Props) => {
  const { text, font, size, styles, color, flex, title } = props;
  return (
    <Text
      style={[
        globalStyles.text,
        {
          color: color ?? appColors.text,
          flex: flex ?? 0,
          fontSize: size ?? title ? 24 : 14,
          fontFamily: font ?? title ? fontFamilies.bold : fontFamilies.regular,
        },
        styles
      ]}
    >
      {text}
    </Text>
  );
};

export default TextComponent;
