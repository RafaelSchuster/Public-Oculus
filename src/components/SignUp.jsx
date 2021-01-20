import React, { useState } from "react";
import {
    Button,
    FormControl,
    InputLabel,
    Input,
    FormHelperText,
    Grid,
    Paper,
    TextField
} from "@material-ui/core";
import { Link } from "react-router-dom";


export default function SignUp() {
    const [signUpValues, setSignUpValues] = useState({ password1: "" });

    const handleInputChange = (e) => {
        const { value, name } = e.target;
        const signUpValuesCopy = { ...signUpValues };
        signUpValuesCopy[name] = value;
        console.log(signUpValuesCopy);
        setSignUpValues(signUpValuesCopy);
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
    };

    return (
        <div className='signUp-div'>
            <Grid container justify='center' alignItems='center' spacing={5}>
                <Paper>
                    <div className='signup-form'>
                        <h3 className="sign-header">Sign up</h3>
                        <Grid item xs={12}>
                            <FormControl className='input-field'>
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
                            <FormControl className='input-field'>
                                <TextField id="outlined-basic"
                                    label="Provider's Name"
                                    variant="outlined"
                                    requested='true'
                                    name='provider'
                                    id='my-input'
                                    aria-describedby='my-helper-text'
                                    className="inputs"
                                    onChange={handleInputChange} />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl className='input-field'>
                                <TextField id="outlined-basic"
                                    label="Password"
                                    variant="outlined"
                                    requested='true'
                                    name='password1'
                                    id='my-input'
                                    type='password'
                                    aria-describedby='my-helper-text'
                                    className="inputs"
                                    onChange={handleInputChange} />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl className='input-field'>
                                <TextField id="outlined-basic"
                                    label="Confirm Password"
                                    variant="outlined"
                                    requested='true'
                                    name='password2'
                                    id='my-input'
                                    type='password'
                                    aria-describedby='my-helper-text'
                                    className="inputs last-input"
                                    onChange={handleInputChange} />
                            </FormControl>
                        </Grid>
                    </div>
                    <Grid item xs={12}>
                        <Button
                            type='submit'
                            variant='outlined'
                            color='primary'
                            className="sign-btn"
                            onClick={handleSubmit}
                        >
                            Sign up
            </Button>
                    </Grid>
                    <Grid item xs={10}>
                        <div className='link'>
                            <p className="sign-ask">
                                Already have an account? <Link to='/login' className="login-link">Login</Link>{' '}
                            </p>
                        </div>
                    </Grid>
                </Paper>
            </Grid>
        </div>
    );
}
