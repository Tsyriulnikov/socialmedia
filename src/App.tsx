import Sidebar from "./components/Sidebar/Sidebar";
import Feed from "./components/Feed/Feed";
import Rightbar from "./components/Rightbar/Rightbar";
import {Box, CircularProgress, createTheme, PaletteMode, Stack, ThemeProvider} from "@mui/material";
import Navbar from "./components/Navbar/Navbar";
import Add from "./components/Add/Add";
import {useEffect, useState} from "react";
import {Routes, Route, Navigate} from 'react-router-dom'
import {Login} from "./components/Login/Login";
import Error404 from "./Page-not-found/Error404";
import {useAppDispatch, useAppSelector} from "./store/hooks";
import {initializeAppTC} from "./store/app-reducer";


export type ThemeType = "dark"|"light"

function App() {
  const [mode, setMode] = useState<ThemeType>("light");
    const dispatch = useAppDispatch()
    const isInitialized = useAppSelector(state => state.app.isInitialized)
    useEffect(()=>{dispatch(initializeAppTC() as any)},[])
    if (!isInitialized) {
        return (
            <div
                style={{position: 'fixed', top: '30%', textAlign:'center', width: '100%'}}>
                <CircularProgress/>
            </div>)
    };

  return (


          <Routes>
            <Route path={"/"} element={<MainPage setMode={setMode} mode={mode}/>}/>
            <Route path={"login"} element={<Login/>}/>
            <Route path={'/404'} element={<Error404/>}/>
            <Route path={'*'} element={<Navigate to="/404"/>}/>
          </Routes>
  );
}

export default App;
type MainPagePropsType = {
  mode:ThemeType
  setMode:(modeTheme:ThemeType) => void
}

export function MainPage(props:MainPagePropsType){
  const thisTheme = createTheme({
    palette: {
      mode: props.mode,
    },
  });
  return(
      <ThemeProvider theme={thisTheme}>
        <Box bgcolor={"background.default"} color={"text.primary"}>
          <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
    <Sidebar setMode={props.setMode} mode={props.mode}/>
    <Feed />
    <Rightbar />
    <Add />
  </Stack>
        </Box>
      </ThemeProvider>
  )
}
