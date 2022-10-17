import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Folder } from "../model/Folder.interface";
import { getChildrenByFolderName } from "../rest/folders.rest";
import { getFolderPathFromParams } from "../utils/urlPath";
import Root from "./Root.component";

const Dashboard = () => {
  const [folders, setFolders] = useState<Folder[]>([]);
  const params = useParams<Record<string, string>>();
  useEffect(() => {
    getChildrenByFolderName(getFolderPathFromParams(params))
      .then((res: Folder[]) => {
        setFolders(res);
      })
      .catch(() => {
        setFolders([]);
      });
  }, [params]);

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        height: "100vh",
        overflow: "auto",
        m: 2,
      }}
    >
      <Root items={folders} />
    </Box>
  );
};

export default Dashboard;
