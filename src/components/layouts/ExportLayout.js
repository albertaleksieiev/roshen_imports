/**
 * Created by albert on 5/18/17.
 */
import React, { Component } from 'react';

import {connect} from 'react-redux';

import StepComponent from '../step';

class ExportLayout extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount(){

    }

    render() {

        return (
            <StepComponent dispatch ={this.props.dispatch}
                           photos={this.props.photos.items}
                           albums={this.props.albums}
                           step={this.props.ui.steps.step}/>
        );


    }
}

const mapStateToProps = (state, ownProps) => {
    return state;
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch
    }
};
const ConnectedMainComponent = connect(mapStateToProps, mapDispatchToProps)(ExportLayout);
export default ConnectedMainComponent;

//export default App;
