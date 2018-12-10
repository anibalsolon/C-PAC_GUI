import React, { Component } from 'react';

import { withStyles } from '@material-ui/core';

import Content from '../Content';
import Header, { HeaderText, HeaderAvatar, HeaderTools } from '../Header';

import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';

import {
  DatasetIcon,
  DownloadIcon,
  EditIcon,
  ExpandMoreIcon,
  HomeIcon,
  NavigateNextIcon,
  PipelineIcon,
  RevertIcon,
  SaveIcon,
  SubjectIcon,
} from '../icons';

import {
  Anatomical,
  Functional,
  Derivatives,
} from './parts'

import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton'
import Switch from '@material-ui/core/Switch';

import Collapse from '@material-ui/core/Collapse';


class PipelineEditor extends Component {

  static styles = theme => ({
    content: {
      padding: 20,
      marginTop: 20,
    }
  });

  state = {
    tab: 0,
  };

  handleTabChange = (event, tab) => {
    this.setState({ tab });
  };

  handleStateChange = (event) => {
    const name = event.target.name
    const value = event.target.checked

    const props = [
      [name, value]
    ]

    if (name == "functional.enabled") {
      this.setState({ tab: value ? 1 : 0 });
      props.push(["derivatives.enabled", value])
    }

    this.props.onChange(props)
  }

  render() {
    const { classes, onChange, configuration } = this.props
    const { tab } = this.state

    const tools = (
      <React.Fragment>
        <Button size="small">
          <DownloadIcon />
        </Button>
        <Button size="small">
          <SaveIcon />
        </Button>
        <Button size="small">
          <RevertIcon />
        </Button>
      </React.Fragment>
    )

    const disable = (event) => {
      event.stopPropagation()
    }

    return (
      <React.Fragment>
        <Tabs
          value={tab}
          onChange={this.handleTabChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label={(
            <React.Fragment>
              Anatomical
            </React.Fragment>
          )} />
          { configuration.getIn(["anatomical", "enabled"]) ?
          <Tab label={(
            <React.Fragment>
              <Switch
                name="functional.enabled"
                checked={configuration.getIn(["functional", "enabled"])}
                onClick={disable}
                onChange={this.handleStateChange}
                color="primary"
              />
              Functional
            </React.Fragment>
          )} />
          : null }
          { configuration.getIn(["derivatives", "enabled"]) ?
          <Tab label="Derivatives" />
          : null }
        </Tabs>

        { tab === 0 && <Anatomical configuration={configuration} onChange={onChange} /> }
        { tab === 1 && <Functional configuration={configuration} onChange={onChange} /> }
        { tab === 2 && <Derivatives configuration={configuration} onChange={onChange} /> }
      </React.Fragment>
    );
  }
}

export default withStyles(PipelineEditor.styles)(PipelineEditor);