import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect, SvgProps } from "react-native-svg";

interface CircleIconProps extends SvgProps {
    variant?: "add" | "remove"; // Optional prop to switch icon
    width?: number; // Optional width prop
    height?: number; // Optional height prop
}

const CircleplusIcon = ({
    variant = "add",
    width = 25, // Default width
    height = 25, // Default height
    ...props
}: CircleIconProps) => {
    const isRemove = variant === "remove";

    return (
        <Svg
            width={width}
            height={height}
            viewBox="0 0 33 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G clipPath="url(#clip0_600_5)">
                {/* Background */}
                <Rect
                    x={4}
                    y={3.89227}
                    width={25}
                    height={25.0603}
                    rx={12.5}
                    fill={isRemove ? "#FF3B30" : "#3B5062"} // Red if remove
                />

                {/* Plus or Minus Sign */}
                {isRemove ? (
                    // Minus sign
                    <Path
                        d="M10.25 16.4224C10.25 16.2147 10.3323 16.0155 10.4788 15.8687C10.6253 15.7218 10.824 15.6393 11.0312 15.6393H21.9688C22.176 15.6393 22.3747 15.7218 22.5212 15.8687C22.6677 16.0155 22.75 16.2147 22.75 16.4224C22.75 16.6301 22.6677 16.8293 22.5212 16.9762C22.3747 17.1231 22.176 17.2056 21.9688 17.2056H11.0312C10.824 17.2056 10.6253 17.1231 10.4788 16.9762C10.3323 16.8293 10.25 16.6301 10.25 16.4224Z"
                        fill="#FFFFFF"
                    />
                ) : (
                    // Plus sign
                    <Path
                        d="M17.2812 10.9405V15.6393H21.9688C22.176 15.6393 22.3747 15.7218 22.5212 15.8687C22.6677 16.0155 22.75 16.2147 22.75 16.4224C22.75 16.6301 22.6677 16.8293 22.5212 16.9762C22.3747 17.1231 22.176 17.2056 21.9688 17.2056H17.2812V21.9044C17.2812 22.1121 17.1989 22.3113 17.0524 22.4581C16.9059 22.605 16.7072 22.6875 16.5 22.6875C16.2928 22.6875 16.0941 22.605 15.9476 22.4581C15.8011 22.3113 15.7188 22.1121 15.7188 21.9044V17.2056H11.0312C10.824 17.2056 10.6253 17.1231 10.4788 16.9762C10.3323 16.8293 10.25 16.6301 10.25 16.4224C10.25 16.2147 10.3323 16.0155 10.4788 15.8687C10.6253 15.7218 10.824 15.6393 11.0312 15.6393H15.7188V10.9405C15.7188 10.7328 15.8011 10.5336 15.9476 10.3867C16.0941 10.2399 16.2928 10.1574 16.5 10.1574C16.7072 10.1574 16.9059 10.2399 17.0524 10.3867C17.1989 10.5336 17.2812 10.7328 17.2812 10.9405Z"
                        fill="#FFFFFF"
                    />
                )}
            </G>

            <Defs>
                <ClipPath id="clip0_600_5">
                    <Rect
                        x={4}
                        y={3.89227}
                        width={25}
                        height={25.0603}
                        rx={12.5}
                        fill="white"
                    />
                </ClipPath>
            </Defs>
        </Svg>
    );
};

export default CircleplusIcon;
