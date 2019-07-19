import React from "react";
import "../../../fonts/fonts.css";
import { calculateFontSizes } from "../../../helpers";
import SampleItem from "../../../components/SampleItem";
import Heading from "../../../components/Heading";

const Sample = ({
  baseSize,
  baseUnit,
  focusState,
  fontFamily,
  fontWeight,
  lineHeight,
  previewHeadline,
  roundFontSizes,
  typeColor,
  typeScaleValue
}) => {
  const { fontSize, fontSizePx, fontSizeEms } = calculateFontSizes(
    baseSize,
    typeScaleValue,
    roundFontSizes
  );
  return (
    <SampleItem
      focusState={focusState}
      text={baseUnit === "px" ? fontSizePx : fontSizeEms}
    >
      <Heading
        fontFamily={fontFamily}
        fontSize={`${fontSize}px`}
        fontWeight={fontWeight}
        level={1}
        ç
        lineHeight={lineHeight}
        text={previewHeadline}
        typeColor={typeColor}
      />
    </SampleItem>
  );
};

export default Sample;
