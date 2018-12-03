import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'

import classnames from 'classnames'
import { withStyles } from '@material-ui/core/styles'

import Grid from '@material-ui/core/Grid'

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import green from '@material-ui/core/colors/green'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'

import {
  EnvironmentIcon,
  PipelineIcon,
  PipelineStepIcon,
  PipelineExecutionTimeIcon,
  SubjectIcon,
  RunIcon,
  LaunchIcon,
  SettingsIcon,
  NavigateNextIcon,
  TimerIcon,
  LogIcon,
  BrainIcon
} from './icons';

class PipelineCard extends Component {

  static styles = theme => ({
    card: {
      minWidth: 240
    },
    actions: {
      display: 'flex',
      paddingLeft: 20,
      justifyContent: 'flex-end'
    },
    action: {
    },
    avatar: {
    },
    info: {
      padding: 0
    }
  })

  handleOpen = ( pipeline) => {
    this.props.history.push(`/pipelines/${pipeline}`)
  }

  render() {
    const { classes, pipeline } = this.props

    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar className={classes.avatar}>
              <PipelineIcon />
            </Avatar>
          }
          title={pipeline.get('name')}
        />
        <CardContent className={classes.info}>
          <List>
            <ListItem>
              <ListItemIcon>
                <PipelineStepIcon />
              </ListItemIcon>
              <ListItemText primary={`Anatomical`} />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <PipelineStepIcon />
              </ListItemIcon>
              <ListItemText primary={`Functional`} />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <PipelineStepIcon />
              </ListItemIcon>
              <ListItemText primary={`5 derivatives`} />
            </ListItem>
          </List>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton className={classes.expand} onClick={() => this.handleOpen(pipeline.get('id'))}>
            <NavigateNextIcon />
          </IconButton>
        </CardActions>
      </Card>
    )
  }
}

export default withRouter(withStyles(PipelineCard.styles)(PipelineCard))
