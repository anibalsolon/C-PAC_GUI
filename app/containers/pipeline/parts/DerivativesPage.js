import React, { Component } from 'react';
import { withStyles, Typography } from '@material-ui/core';

import Divider from '@material-ui/core/Divider';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Switch from '@material-ui/core/Switch';

import {
  ALFF,
  NetworkCentrality,
  RegionalHomogeneity,
  SeedBasedCorrelation,
  TimeSeriesExtraction,
  VMHC
} from 'containers/pipeline/parts/derivatives'
import PyPEER from './derivatives/PyPEER';


class DerivativesPage extends Component {
  static styles = theme => ({
    divider: {
      margin: theme.spacing(),
      marginBottom: theme.spacing(3),
    },
    sectionTitle: {
      paddingTop: 10
    },
  })

  renderSection(title, name, component) {
    const { classes, configuration, onChange } = this.props
    const value = configuration.getIn(name.split("."))

    return (
      <ExpansionPanel expanded={value}>
        <ExpansionPanelSummary>
          <Switch
            name={name}
            checked={value}
            onChange={onChange}
            color="primary"
          />
          <Typography variant="h6" className={classes.sectionTitle}>
            { title }
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          {
            React.createElement(component, {
              configuration,
              onChange,
            })
          }
        </ExpansionPanelDetails>
      </ExpansionPanel>
    )
  }

  render() {
    const { classes, configuration, onChange, onValueChange } = this.props

    return (
      <React.Fragment>

        {
          this.renderSection(
            "Time Series Extraction",
            "derivatives.timeseries_extraction.enabled",
            TimeSeriesExtraction
          )
        }

        {
          this.renderSection(
            "Seed-based Correlation",
            "derivatives.sca.enabled",
            SeedBasedCorrelation
          )
        }

        {
          this.renderSection(
            "ALFF / f-ALFF",
            "derivatives.alff.enabled",
            ALFF
          )
        }

        {
          this.renderSection(
            "Network Centrality",
            "derivatives.network_centrality.enabled",
            NetworkCentrality
          )
        }

        {
          this.renderSection(
            "Voxel-Mirrored Homotopic Connectivity (VMHC)",
            "derivatives.vmhc.enabled",
            VMHC
          )
        }

        {
          this.renderSection(
            "Regional Homogeneity",
            "derivatives.reho.enabled",
            RegionalHomogeneity
          )
        }

        {
          this.renderSection(
            "PyPEER",
            "derivatives.pypeer.enabled",
            PyPEER
          )
        }

      </React.Fragment>
    )
  }
}

export default withStyles(DerivativesPage.styles)(DerivativesPage);
