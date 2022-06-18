import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {useFormik} from "formik";

export function Copyright(props: any) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

//component Login
type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}

export function Login() {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }

            if (!values.password) {
                errors.password = 'Required';
                // } else if (!/^[A-Z0-9._%+-]{8,}$/i.test(values.password)) {
                //     (?=.*[0-9]) - строка содержит хотя бы одно число;
                //     (?=.*[!@#$%^&*]) - строка содержит хотя бы один спецсимвол;
                //     (?=.*[a-z]) - строка содержит хотя бы одну латинскую букву в нижнем регистре;
                //     (?=.*[A-Z]) - строка содержит хотя бы одну латинскую букву в верхнем регистре;
                //     [0-9a-zA-Z!@#$%^&*]{6,} - строка состоит не менее, чем из 6 вышеупомянутых символов.
                // } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^\w\s]).{8,}$/i.test(values.password)) {
            } else if (!/^(?=.*[a-z]).{4,}$/i.test(values.password)) {
                errors.password = 'Invalid password';
            }
            return errors;
        },
        onSubmit: values => {
            alert(JSON.stringify(values));
            // dispatch(loginTC(values))
            formik.resetForm()
        },
    })


    //     const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    //     event.preventDefault();
    //     const data = new FormData(event.currentTarget);
    //     console.log({
    //         email: data.get('email'),
    //         password: data.get('password'),
    //     });
    // };

    return (
        <Container component="main" maxWidth="xs">

            <CssBaseline/>
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                {/*<form onSubmit={formik.handleSubmit}>*/}
                    <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        autoComplete="email"
                        autoFocus
                        {...formik.getFieldProps('email')}
                    />
                    {formik.errors.email ? <div style={{color:'red', width:'400px'}}>{formik.errors.email}</div> : null}
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        {...formik.getFieldProps('password')}
                    />
                    {formik.errors.password ? <div style={{color:'red', width:'400px'}}>{formik.errors.password}</div> : null}
                    <FormControlLabel
                        control={<Checkbox  {...formik.getFieldProps('rememberMe')}
                                            value="remember" color="primary"
                                            checked={formik.values.rememberMe}/>}
                    label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{mt: 3, mb: 2}}
                    >
                        Sign In
                    </Button>

                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                {/*</form>*/}
            </Box>
            </Box>

            <Copyright sx={{mt: 8, mb: 4}}/>

        </Container>
    );
}