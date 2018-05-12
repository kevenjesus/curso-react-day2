import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Grid from 'material-ui/Grid';
import ButtonAppBar from './Header';
import Profile from './Profile';
import FormExemplo from './Form';
import store from './store';

class App extends Component {
  render() {
    
    return (
      <Provider store={store}>
        <Grid container spacing={24}>
        <ButtonAppBar />
          <Grid item sm={4}>
          <Profile />
          <FormExemplo />
            

          </Grid>
        </Grid>
      </Provider>
    );
  }
}

export default App;
