import * as React from "react";
import Svg, { G, Circle, Defs, SvgProps } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const CardIcon1 = (props: SvgProps) => (
    <Svg
        width={106}
        height={106}
        viewBox="0 0 106 106"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <G filter="url(#filter0_d_1_454)">
            <Circle cx={53} cy={52} r={50} fill="#ECF2F5" />
        </G>
        <Defs></Defs>
    </Svg>
);
export default CardIcon1;
