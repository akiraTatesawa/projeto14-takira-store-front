import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { blueGrey } from "@mui/material/colors";
import { MdMenu } from "react-icons/md";

import { UserContext } from "../contexts/UserContext";
import { CategoryContext } from "../contexts/CategoryContext";

const theme = createTheme({
  typography: {
    fontFamily: "Inter",
    fontSize: 14,
  },
  palette: {
    primary: blueGrey,
  },
});

export default function Menu() {
  const { userDatas } = useContext(UserContext);
  const { setCategoryName } = useContext(CategoryContext);
  const [state, setState] = useState({
    left: false,
  });
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  function handleError(err) {
    console.log(err.response);
    localStorage.removeItem("userDatas");
    navigate("/");
  }

  useEffect(() => {
    const { token } = userDatas;
    const URL = `${process.env.REACT_APP_API_BASE_URL}/categories`;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const promise = axios.get(URL, config);
    promise
      .then((res) => {
        setCategories(res.data);
      })
      .catch(handleError);
  }, []);

  function signOut() {
    const { token } = userDatas;
    const URL = `${process.env.REACT_APP_API_BASE_URL}/sign-out`;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const promise = axios.delete(URL, config);

    promise
      .then(() => {
        localStorage.removeItem("userDatas");
        navigate("/");
      })
      .catch((err) => {
        console.log(err.response);
        localStorage.removeItem("userDatas");
        navigate("/");
      });
  }

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ [anchor]: open });
  };

  const handleOnClick = (category) => {
    setCategoryName(category.name);
    navigate(`/categories/${category._id}`);
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <Avatar
              sx={{
                bgcolor: "#64849E",
                width: "1.5em",
                height: "1.5em",
                fontSize: "2em",
              }}
              onClick={() => navigate("/profile")}
            >
              {userDatas.name.charAt(0)}
            </Avatar>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText
              primary={userDatas.name}
              onClick={() => navigate("/profile")}
            />
          </ListItemButton>
        </ListItem>
        <Divider />
        {categories.map((category) => (
          <ListItem key={category.name} disablePadding>
            <ListItemButton>
              <ListItemText
                primary={category.name}
                onClick={() => handleOnClick(category)}
              />
            </ListItemButton>
          </ListItem>
        ))}
        <Divider />
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="Sair" onClick={() => signOut()} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <ThemeProvider theme={theme}>
      <div>
        <React.Fragment key="left">
          <Button onClick={toggleDrawer("left", true)}>
            <MdMenu size={30} color="#ffffff" />
          </Button>
          <Drawer
            anchor="left"
            open={state.left}
            onClose={toggleDrawer("left", false)}
          >
            {list("left")}
          </Drawer>
        </React.Fragment>
      </div>
    </ThemeProvider>
  );
}
