import Sidebar from "./components/Sidebar/Sidebar";
import Feed from "./components/Feed/Feed";
import Rightbar from "./components/Rightbar/Rightbar";
import {Box, createTheme, PaletteMode, Stack, ThemeProvider} from "@mui/material";
import Navbar from "./components/Navbar/Navbar";
import Add from "./components/Add/Add";
import { useState } from "react";
import {Routes, Route, Navigate} from 'react-router-dom'
import {Login} from "./components/Login/Login";


export type ThemeType = "dark"|"light"

function App() {
  const [mode, setMode] = useState<ThemeType>("light");

  const thisTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
      <ThemeProvider theme={thisTheme}>
        <Box bgcolor={"background.default"} color={"text.primary"}>
          <Navbar />

          <Routes>
            <Route path={"/"} element={<MainPage setMode={setMode} mode={mode}/>}/>
            <Route path={"login"} element={<Login/>}/>
            {/*/!*<Route path="/404" element={<h1>404: PAGE NOT FOUND</h1>}/>*!/*/}
            {/*<Route path={'/404'} element={<Error404/>}/>*/}
            {/*<Route path={'*'} element={<Navigate to="/404"/>}/>*/}
          </Routes>





        </Box>
      </ThemeProvider>
  );
}

export default App;
type MainPagePropsType = {
  mode:ThemeType
  setMode:(modeTheme:ThemeType) => void
}

export function MainPage(props:MainPagePropsType){
  return(
  <Stack direction="row" spacing={2} justifyContent="space-between">
    <Sidebar setMode={props.setMode} mode={props.mode}/>
    <Feed />
    <Rightbar />
    <Add />
  </Stack>
  )
}
