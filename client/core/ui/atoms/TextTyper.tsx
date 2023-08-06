"use client";
import styled from "@emotion/styled";
import React from "react";
import Typewriter from "typewriter-effect";
import HFlex from "../layouts/flexes/HFlex";

export default function TextTyper({
  fontSize = 36,
  fontWeight = 600,
  color = "text.primary",
}: {
  fontSize?: number;
  fontWeight?: number;
  color?: string;
}) {
  return (
    <HFlex color={color} fontSize={fontSize} fontWeight={fontWeight}>
      <Typewriter
        options={{
          strings: ["Welcome!", "This is Kipack Jeong"],
          autoStart: true,
          loop: true,
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString("Hello World!")
            .callFunction(() => {
              console.log("String typed out!");
            })
            .pauseFor(2500)
            .deleteAll()
            .callFunction(() => {
              console.log("All strings were deleted");
            })
            .start();
        }}
      />
    </HFlex>
  );
}
