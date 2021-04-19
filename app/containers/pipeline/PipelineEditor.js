import React, { Component } from 'react';

import { withStyles } from '@material-ui/core';

import Content from '../../components/Content';
import Header, { HeaderText, HeaderAvatar, HeaderTools } from '../../components/Header';

import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabScrollButton from '@material-ui/core/TabScrollButton';
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
} from 'components/icons';

import { PipelinePart } from 'containers/pipeline/parts';

import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton'
import Switch from '@material-ui/core/Switch';

import Collapse from '@material-ui/core/Collapse';

class PipelineEditor extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tab: [...props.configuration.keySeq()][0],  // first tab
    };
  }

  static styles = theme => ({
    content: {
      padding: 20,
      marginTop: 20,
    },
    tabWrap: {
      flexDirection: 'row'
    }
  });

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

    const disable = (event) => {
      event.stopPropagation()
    }

    return (
      <>
        <Tabs
          value={tab}
          onChange={this.handleTabChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
        >
          {
            configuration.keySeq().toJS().map((k) => (
              <Tab label={k.split("_").join(" ")} value={k} key={`tabtab-${k}`} />
            ))
          }
        </Tabs>

        {
          configuration.entrySeq().map((entry, i) => (
            <Collapse key={`${entry[0]}-${i}`} in={tab === entry[0]}>
              <PipelinePart configuration={entry[1]} onChange={onChange} parents={[entry[0]]} />
            </Collapse>
          ))
          }
      </>
    );
  }
}

export default withStyles(PipelineEditor.styles)(PipelineEditor);
