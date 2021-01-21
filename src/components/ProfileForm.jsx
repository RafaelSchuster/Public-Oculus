import React, { useState } from "react";
import {
  Button,
  FormControl,
  InputLabel,
  Input,
  Grid,
  Paper,
  TextField,
  Select,
  MenuItem,
  Checkbox,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import "../css/profileform.css";

export default function ProfileForm() {
  const [profileValues, setProfileValues] = useState({});
  const [error, setError] = useState("");
  const [image, setImage] = useState('');
  const axios = require('axios');

  const handleInputChange = (e) => {
    const { value, name } = e.target;
    const profileValuesCopy = { ...profileValues };
    profileValuesCopy[name] = value;
    console.log(profileValuesCopy);
    setProfileValues(profileValuesCopy);
  };
  
  const handleSubmit = async(e) =>{
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "image/jpeg");
    
    var file = image;
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: file,
      redirect: 'follow'
    };
    
    fetch("http://13.59.16.153:8080/my_eye_is_screwed", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }
  return (
    <div className="profile-div">
      <Grid container justify="center" alignItems="center" spacing={5}>
        <Paper>
          <div className="profile-form">
            <h3 className="upload-header">Upload Image</h3>
            <Grid item xs={12}>
              <FormControl>
                <TextField
                  id="outlined-basic"
                  label="First Name"
                  variant="outlined"
                  requested="true"
                  name="firstName"
                  id="my-input"
                  aria-describedby="my-helper-text"
                  className="profile-inputs"
                  onChange={handleInputChange}
                />
                <TextField
                  id="outlined-basic"
                  label="Last Name"
                  variant="outlined"
                  requested="true"
                  name="lastName"
                  id="my-input"
                  aria-describedby="my-helper-text"
                  className="profile-inputs"
                  onChange={handleInputChange}
                />
                <TextField
                  id="outlined-basic"
                  label="Age"
                  variant="outlined"
                  requested="true"
                  name="age"
                  type="number"
                  aria-describedby="my-helper-text"
                  className="profile-inputs"
                  onChange={handleInputChange}
                />
                <TextField
                  id="outlined-basic"
                  label="ID Number"
                  variant="outlined"
                  requested="true"
                  name="age"
                  type="number"
                  aria-describedby="my-helper-text"
                  className="profile-inputs"
                  onChange={handleInputChange}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl variant="outlined" className="select-gender">
                <InputLabel id="demo-simple-select-outlined-label">
                  Gender
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={"gender"}
                  className="profile-inputs"
                  onChange={handleInputChange}
                  label="Gender"
                >
                  <MenuItem value="">
                    <em></em>
                  </MenuItem>
                  <MenuItem value={"male"}>Male</MenuItem>
                  <MenuItem value={"female"}>Female</MenuItem>
                  <MenuItem value={"other"}>Other</MenuItem>
                </Select>
                <Button
                  variant="contained"
                  component="label"
                  className="img-btn"
                >
                  Upload Eye Image
                  <input type="file" hidden onChange={(e)=>{
                    //setImage(e.target.files[0])
                    const image = e.target.files[0];
                    setImage(image);
                    
                    }} />
                </Button>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <InputLabel>Authorize us by checking</InputLabel>
              <Checkbox
                className="checkbox"
                color="primary"
                inputProps={{ "aria-label": "secondary checkbox" }}
              />
            </Grid>
            {error && (
              <Grid item xs={12}>
                {error}
              </Grid>
            )}

            <Grid item xs={12}>
              <Button
                variant="outlined"
                type="submit"
                color="primary"
                className="profile-btn"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </Grid>
          </div>
        </Paper>
      </Grid>
    </div>
  );
}
