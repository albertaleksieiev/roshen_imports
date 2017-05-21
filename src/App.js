import React, { Component } from 'react';

import {Provider} from 'react-redux'
import store from './stores'



class App extends Component {
    constructor(props) {
        super(props);
    }

  render() {
    return (
        <Provider store={store}>
            {this.props.children}
        </Provider>
    );
  }
}


export default App;

//export default App;
