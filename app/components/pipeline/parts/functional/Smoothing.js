import React, { Component } from 'react';

import { withStyles, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid'

import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Switch from '@material-ui/core/Switch';

import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';


class Smoothing extends Component {

  static styles = theme => ({
  });

  render() {
    const { classes, configuration, onChange } = this.props

    return (
      <Grid container>
        <Grid item sm={12}>
          <TextField
            label="Smoothing kernel FWHM"
            name="functional.smoothing.kernel_fwhm"
            value={configuration.getIn(["functional", "smoothing", "kernel_fwhm"])}
            onChange={onChange}
            fullWidth={true} margin="normal" variant="outlined"
            helperText=''
            InputProps={{
              endAdornment: <InputAdornment position="end">mm</InputAdornment>,
            }}
          />
          <FormControl component="fieldset">
            <FormGroup row>
              <FormControlLabel
                label="Perform smoothing before z-scoring"
                control={
                  <Switch
                    name="functional.smoothing.before_zscore"
                    checked={configuration.getIn(["functional", "smoothing", "before_zscore"])}
                    onChange={onChange}
                    color="primary"
                  />
                }
              />
            </FormGroup>
            <FormGroup row>
              <FormControlLabel
                label="Apply z-score standarization to derivatives"
                control={
                  <Switch
                    name="functional.smoothing.zscore_derivatives"
                    checked={configuration.getIn(["functional", "smoothing", "zscore_derivatives"])}
                    onChange={onChange}
                    color="primary"
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(Smoothing.styles)(Smoothing);