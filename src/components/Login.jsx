import React, { useState } from 'react';
import {
    Button,
    FormControl,
    InputLabel,
    Input,
    Grid,
    Paper,
    TextField
} from '@material-ui/core';
import { Link } from 'react-router-dom';

export default function Login() {
    const [loginValues, setLoginValues] = useState({});
    const [error, setError] = useState('');

    const handleInputChange = (e) => {
        const { value, name } = e.target;
        const loginValuesCopy = { ...loginValues };
        loginValuesCopy[name] = value;
        console.log(loginValuesCopy);
        setLoginValues(loginValuesCopy);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    };

    return (
        <div className='signUp-div'>
            <Grid container justify='center' alignItems='center' spacing={5}>
                <Paper>
                    <div className='signup-form'>
                        <h3 className="login-header">Login</h3>
                        <Grid item xs={12}>
                            <FormControl>
                                <TextField id="outlined-basic"
                                    label="Email Address"
                                    variant="outlined"
                                    requested='true'
                                    name='email'
                                    id='my-input'
                                    aria-describedby='my-helper-text'
                                    className="inputs"
                                    onChange={handleInputChange} />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl>
                                <TextField id="outlined-basic"
                                    label="Password"
                                    variant="outlined"
                                    requested='true'
                                    name='password1'
                                    id='my-input'
                                    type='password'
                                    aria-describedby='my-helper-text'
                                    className="inputs last-input"
                                    onChange={handleInputChange} />
                            </FormControl>
                        </Grid>
                        {error && (
                            <Grid item xs={12}>
                                {error}
                            </Grid>
                        )}
                    </div>
                    <Grid item xs={12}>
                        <Button
                            variant='outlined'
                            type='submit'
                            color='primary'
                            className="log-btn"
                            onClick={handleSubmit}
                        >
                            Login
            </Button>
                    </Grid>
                    <Grid item xs={10}>
                        <div className='link'>
                            <p className="login-ask">
                                Don't have an account? <Link to='/signup'>Sign up</Link>
                            </p>
                        </div>
                    </Grid>
                </Paper>
            </Grid>
        </div>
    );
}
