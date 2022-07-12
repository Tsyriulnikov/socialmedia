import Sidebar from "./components/Sidebar/Sidebar";
import Feed from "./components/Feed/Feed";
import Rightbar from "./components/Rightbar/Rightbar";
import {
    Box,
    Card,
    CircularProgress,
    createTheme,
    PaletteMode,
    Paper,
    Stack,
    styled,
    ThemeProvider
} from "@mui/material";
import Navbar from "./components/Navbar/Navbar";
import Add from "./components/Add/Add";
import React, {useEffect, useState} from "react";
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
    // const [mode, setMode] = useState<ThemeType>("light");
    const dispatch = useAppDispatch()
    const isInitialized = useAppSelector(state => state.app.isInitialized)
    // const isLoggedIn = useAppSelector(state => state.login.isLoggedIn)

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
    // const thisTheme = createTheme({
    //     palette: {
    //         mode: mode,
    //     },
    // });


    return (

        <Routes>
            <Route path={"/"} element={<MainPage/>}/>
            <Route path={"login"} element={<Login/>}/>
            <Route path={'/404'} element={<Error404/>}/>
            <Route path={'*'} element={<Navigate to="/404"/>}/>
        </Routes>


    );
}

export default App;

export function MainPage() {

    const [mode, setMode] = useState<ThemeType>("light");
    const dispatch = useAppDispatch()
    // const isInitialized = useAppSelector(state => state.app.isInitialized)
    const isLoggedIn = useAppSelector(state => state.login.isLoggedIn)
    const showItems = useAppSelector(state => state.app.itemsShow)

    const thisTheme = createTheme({
        palette: {
            mode: mode,
        },
    });

    if (!isLoggedIn) {
        return <Navigate to='login'/>
    }
    ;


    const Item = styled(Paper)(({theme}) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));


    return (
        <ThemeProvider theme={thisTheme}>
            <ErrorSnackbar/>
            <Navbar/>

            <Box sx={{flexGrow: 1 , bgcolor: 'background.default',minHeight:'100vl'}}>
                <Grid container spacing={3}>
                    <Grid item xs>
                        {/*<Item>*/}
                            <Sidebar setMode={setMode} mode={mode}/>
                            <Add/>
                        {/*</Item>*/}
                    </Grid>
                    <Grid item xs={6}>
                        {/*<Item>*/}
                            {showItems === 'home' && <Feed/>}
                            {showItems === 'users'&& <Users/>}
                        {/*</Item>*/}
                    </Grid>
                    <Grid item xs>
                        {/*<Item>*/}
                            <Rightbar/>
                        {/*</Item>*/}
                    </Grid>
                </Grid>
            </Box>


        </ThemeProvider>
    );
}
