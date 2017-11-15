import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import HotSearch from './HotSearch';
import UsersList from './UsersList';
import logo from './logo.svg';
import './App.css';

const theme = createMuiTheme();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div>
          <header className="App-header">
            <h1 className="App-title">HotSearch with RxJS</h1>
          </header>

          <div className="App">
            <HotSearch onResult={users => this.setState({ users })} />
            <UsersList users={this.state.users} />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
