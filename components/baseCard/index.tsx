import React, { ReactNode } from "react";

import {
  Card,
  CardContent,
  Divider,
  Box,
  Typography,
  Chip,
} from "@mui/material";

const BaseCard = ({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) => {
  return (
    <Card>
      <Box p={2} display="flex" alignItems="center">
        <Typography variant="h4">{title}</Typography>
      </Box>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default BaseCard;
