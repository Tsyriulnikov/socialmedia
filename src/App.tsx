import Sidebar from "./components/Sidebar/Sidebar";
import Feed from "./components/Feed/Feed";
import Rightbar from "./components/Rightbar/Rightbar";
import {Box, CircularProgress, createTheme, PaletteMode, Stack, ThemeProvider} from "@mui/material";
import Navbar from "./components/Navbar/Navbar";
import Add from "./components/Add/Add";
import {useEffect, useState} from "react";
import {Routes, Route, Navigate, useNavigate} from 'react-router-dom'
import {Login} from "./components/Login/Login";
import Error404 from "./Page-not-found/Error404";
import {useAppDispatch, useAppSelector} from "./store/hooks";
import {initializeAppTC} from "./store/app-reducer";
import {ErrorSnackbar} from "./components/ErrorSnackbar/ErrorSnackbar";
import {Users} from "./components/Users/Users";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";


export type ThemeType = "dark" | "light"

function App() {
    const [mode, setMode] = useState<ThemeType>("light");
    const dispatch = useAppDispatch()
    const isInitialized = useAppSelector(state => state.app.isInitialized)
    useEffect(() => {
        dispatch(initializeAppTC() as any)
    }, [])
    if (!isInitialized) {
        return (
            <div
                style={{position: 'fixed', top: '30%', textAlign: 'center', width: '100%'}}>
                <CircularProgress/>
            </div>)
    }
    ;
    const thisTheme = createTheme({
        palette: {
            mode: mode,
        },
    });
    return (
        <ThemeProvider theme={thisTheme}>
           {/*<Box>*/}
               <Navbar/>
           {/*</Box>*/}

            <Routes>
            <Route path={"/"} element={<MainPage setMode={setMode} mode={mode} cargo={'Feed'}/>}/>
            <Route path={"/users"} element={<MainPage setMode={setMode} mode={mode} cargo={'Users'}/>}/>
            <Route path={"login"} element={<Login/>}/>
            <Route path={'/404'} element={<Error404/>}/>
            <Route path={'*'} element={<Navigate to="/404"/>}/>
        </Routes>
        </ThemeProvider>
    );
}

export default App;
type MainPagePropsType = {
    mode: ThemeType
    setMode: (modeTheme: ThemeType) => void
    cargo:string
}

export function MainPage(props: MainPagePropsType) {
const isLoggedIn = useAppSelector(state => state.login.isLoggedIn)
// const thisTheme = createTheme({
//     palette: {
//         mode: props.mode,
//     },
// });
if (!isLoggedIn) {
    return <Navigate to='login'/>
}
;
return (
     // <ThemeProvider theme={thisTheme}>
       <>
        <ErrorSnackbar/>
        <Box bgcolor={"background.default"} color={"text.primary"}>
            {/*<Navbar/>*/}
            {/*<Stack direction="row" spacing={2} justifyContent="space-between">*/}

            <Box sx={{flexGrow: 1}}>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        {/*<Stack direction="row" spacing={2}>*/}
                        <Sidebar setMode={props.setMode} mode={props.mode}/>
                    </Grid>
                    {/*<Users />*/}
                    <Grid item xs={6}>
                        {props.cargo === 'Feed' && <Feed/> }
                        {props.cargo === 'Users' && <Users/> }
                         {/*<Feed/>*/}
                    </Grid>
                    <Grid item xs={3}>
                        <Rightbar/>
                    </Grid>
                </Grid>
                <Add/>
                {/*</Stack>*/}
            </Box>
        </Box>
     {/*</ThemeProvider>*/}
</>
)
}
