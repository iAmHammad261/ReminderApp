import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgAddIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={70}
    viewBox="0 0 70 70"
    height={70}
    fill="none"
    {...props}
  >
    <Path
      fill="#FC5007"
      d="M38.5 31.5v-14h-7v14h-14v7h14v14h7v-14h14v-7zM35 70a35 35 0 1 1 0-70 35 35 0 0 1 0 70"
    />
  </Svg>
);
export default SvgAddIcon;

