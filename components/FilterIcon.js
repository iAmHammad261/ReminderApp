import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgFilterIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <Path
      fill="#2A0800"
      d="M1.125 5h21.75a1.125 1.125 0 0 1 0 2.25H1.125a1.125 1.125 0 0 1 0-2.25M4.5 12.125A1.125 1.125 0 0 1 5.625 11h12.75a1.125 1.125 0 1 1 0 2.25H5.625A1.125 1.125 0 0 1 4.5 12.125m4.5 6A1.125 1.125 0 0 1 10.125 17h3.75a1.125 1.125 0 1 1 0 2.25h-3.75A1.125 1.125 0 0 1 9 18.125"
    />
  </Svg>
);
export default SvgFilterIcon;

