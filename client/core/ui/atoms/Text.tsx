import { Typography } from "@mui/material";
import React from "react";

type TxtProps = {
  value?: string;
};

function Txt({ value }: TxtProps) {
  return <Typography>{value}</Typography>;
}

export default Txt;
