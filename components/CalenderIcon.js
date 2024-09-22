import * as React from "react";
import Svg, { Path, Rect } from "react-native-svg";
const SvgCalendarIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="calendarIcon_svg__lucide calendarIcon_svg__lucide-calendar"
    {...props}
  >
    <Path d="M8 2v4M16 2v4" />
    <Rect width={18} height={18} x={3} y={4} rx={2} />
    <Path d="M3 10h18" />
  </Svg>
);
export default SvgCalendarIcon;

