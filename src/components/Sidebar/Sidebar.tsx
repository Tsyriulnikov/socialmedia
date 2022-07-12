import {
  AccountBox,
  Article,
  Group,
  Home,
  ModeNight,
  Person,
  Settings,
  Storefront,
} from "@mui/icons-material";
import {
  Box, Card, CardContent,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText, PaletteMode,
  Switch,
} from "@mui/material";
import React from "react";
import {ThemeType} from "../../App";
import {Users} from "../Users/Users";
import {useAppDispatch} from "../../store/hooks";
import {ItemsShowType, setItemsShowAC} from "../../store/app-reducer";

type SideBarPropsType = {
  mode:ThemeType
  setMode:(modeTheme:ThemeType) => void
}

const Sidebar = (props:SideBarPropsType) => {
const dispatch = useAppDispatch()
const handleClickMenu=(item:ItemsShowType)=>{
    dispatch(setItemsShowAC(item) as any)

    }
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
         <Box position="fixed" width={200}>
         <Card variant="outlined" >
        <CardContent>
         <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home" onClick={()=>handleClickMenu('home')}>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            {/*<ListItemButton onClick=(()=>dispatch(setMenuItemAC('users')))> */}
            <ListItemButton component="a" href="#users" onClick={()=>handleClickMenu('users')}>
              <ListItemIcon>
                <Article/>
              </ListItemIcon>
              <ListItemText primary="Users" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <Group />
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <Storefront />
              </ListItemIcon>
              <ListItemText primary="Marketplace" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <Person />
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <AccountBox />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <ModeNight />
              </ListItemIcon>
              <Switch onChange={e=>props.setMode(props.mode === "light" ? "dark" : "light")}/>
            </ListItemButton>
          </ListItem>
        </List>
        </CardContent>
         </Card>
      </Box>
    </Box>
  );
};

export default Sidebar;
