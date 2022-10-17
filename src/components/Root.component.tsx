import React, { useMemo } from "react";
import { FileTypes, Folder } from "../model/Folder.interface";
import Directory from "./Directory.component";
import { Breadcrumbs, Link, Button, Grid, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { BreadcrumbItem } from "../model/BreadcrumbItem.interface";

interface Props {
  items: Folder[];
}

const Root = (props: Props) => {
  const navigate = useNavigate();
  const location = useLocation();

  const getBreadcrumbLinks = () => {
    const fullPath = location.pathname.slice(1).split("/");
    const arr = fullPath.map((obj, i) => {
      return { name: obj, path: fullPath.slice(0, i + 1).join("/") };
    });
    return arr;
  };

  const memoBreadcrumbLinks = useMemo(() => getBreadcrumbLinks(), [location.pathname])

  const handleClick = (item: Folder) => {
    if (item.type === FileTypes.Folder) {
      const path = location.pathname.slice(1);
      navigate(`${path}/${item.name}`);
    }
  };

  const isLast = (index: Number) => {
    return index === getBreadcrumbLinks().length - 1;
  };

  return (
    <>
      <Breadcrumbs
        className="folder-app-breadcrumb"
        aria-label="breadcrumb"
        sx={{
          m: 2,
        }}
      >
        <Link underline="hover" color="inherit" onClick={() => navigate("")}>
          All
        </Link>
        {memoBreadcrumbLinks.map((link: BreadcrumbItem, index: Number) => {
          if (isLast(index)) {
            return <Typography color="text.primary">{link.name}</Typography>;
          } else {
            return (
              <Link
                underline="hover"
                color="inherit"
                onClick={() => navigate(link.path)}
              >
                {link.name}
              </Link>
            );
          }
        })}
      </Breadcrumbs>
      <Grid container spacing={2}>
        {props.items.map((item, i) => (
          <Grid className="folder-card" onClick={() => handleClick(item)} item md={2} sm={3} key={i}>
            <Directory {...item} />
          </Grid>
        ))}
        {props.items.length === 0 && (
          <Grid item>
            <div>No item in this folder</div>
            <Button variant="contained" onClick={() => navigate(-1)}>
              Go Back
            </Button>
          </Grid>
        )}
      </Grid>
    </>
  );
};

export default Root;
