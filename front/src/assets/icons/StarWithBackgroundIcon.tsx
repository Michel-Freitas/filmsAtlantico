import React from "react";

export const StartWithBackgroundIcon = ({
    height = "16",
    width = "16",
    color = "#f3dc15"
}: React.SVGProps<SVGAElement>): JSX.Element => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        id="Filled"
        viewBox="0 0 24 24"
        width={width}
        height={height}
    >
        <path
            d="M1.327,12.4,4.887,15,3.535,19.187A3.178,3.178,0,0,0,4.719,22.8a3.177,3.177,0,0,0,3.8-.019L12,20.219l3.482,2.559a3.227,3.227,0,0,0,4.983-3.591L19.113,15l3.56-2.6a3.227,3.227,0,0,0-1.9-5.832H16.4L15.073,2.432a3.227,3.227,0,0,0-6.146,0L7.6,6.568H3.231a3.227,3.227,0,0,0-1.9,5.832Z"
            fill={color}
        />
    </svg>
)