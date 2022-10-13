import { Card, CardContent, Typography } from "@mui/material";
import React from "react";
import { FileTypes, Folder } from "../model/Folder";
import FolderIcon from "@mui/icons-material/Folder";
import DescriptionIcon from "@mui/icons-material/Description";

const Directory = (props: Folder) => {
  return (
    <Card variant="outlined">
      <CardContent className="folder-item">
        {props.type === FileTypes.Folder ? <FolderIcon /> : <DescriptionIcon />}
        <Typography
          sx={{ fontSize: 14, marginBottom: 0 }}
          color="text.secondary"
          gutterBottom
        >
          {props.name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Directory;
