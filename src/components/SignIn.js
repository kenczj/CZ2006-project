import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Links from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom'
import { Facebook, Google } from '@mui/icons-material';
import { Divider } from '@mui/material';

const theme = createTheme();

export default function SignIn() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
            <Container component="main" maxWidth="xs" sx={{ bgcolor: 'white', borderRadius: 5 }}>
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 3 }}
                        >
                            Sign In
                        </Button>
                        <Grid container spacing={1}>
                            <Grid item xs={5} >
                                <Link style={{ textDecoration: 'none' }} variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item xs>
                                <Link style={{ textDecoration: 'none' }} to='/register'>
                                    Sign Up
                                </Link>
                            </Grid>
                            <Grid item xs>
                                <Link style={{ textDecoration: 'none' }} to='/registerAgent'>
                                    Agent Sign Up
                                </Link>
                            </Grid>
                        </Grid>

                        <Divider sx={{ my: 2 }}>OR</Divider>

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 1, mb: 2 }}
                            startIcon={<Google />}
                        >Google
                        </Button>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 1, mb: 2 }}
                            startIcon={<Facebook />}
                        >Facebook
                        </Button>
                    </Box>
                </Box>
            </Container>
    );
}





{/* <Typography sx={{ mt: 1 }} align = 'center' component="h1" variant="h6">
...Continue with...
</Typography>  */}