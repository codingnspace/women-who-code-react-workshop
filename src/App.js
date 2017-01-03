import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

/* Add tap accessibility for mobile devices, needed for Material-UI library */
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
