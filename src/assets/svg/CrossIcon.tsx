import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const CrossIcon = (props: SvgProps) => (
    <Svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M4 4L20 20M20 4L4 20L20 4Z"
            stroke="#0F1820"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);
export default CrossIcon;
