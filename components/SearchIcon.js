import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgSearchIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#2A0800"
      d="m19.6 21-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612Q6.778 3 9.5 3t4.613 1.888T16 9.5a6.1 6.1 0 0 1-1.3 3.8l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5q0-1.876-1.312-3.187Q11.377 5.002 9.5 5T6.313 6.313 5 9.5t1.313 3.188T9.5 14"
    />
  </Svg>
);
export default SvgSearchIcon;

