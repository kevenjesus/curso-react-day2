import React from 'react';

import { connect } from 'react-redux';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';


const ButtonAppBar = props => (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit">
            {props.profile.name}
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
)

const mapStateToProps = state => ({profile: state.profile});

export default connect(mapStateToProps, null)(ButtonAppBar);