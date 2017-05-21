/**
 * Created by albert on 5/20/17.
 */
import React, { Component } from 'react';
//import StepZilla from 'react-stepzilla'

import _ from 'lodash'

import LoginVKStep from './steps/LoginVKStep'
import PreviewAlbumsStep from './steps/PrevieAlbumStep'
import PreviewSelectedAlbumStep from './steps/PreviewAlbumToExportStep';
import ExportingStep from './steps/ExportingStep'
import DoneStep from './steps/DoneStep'
import LoginFacebookStep from './steps/LoginFacebookStep'

import {DONE_STEP,LOGIN_VK_STEP,EXPORT_STEP,PREVIEW_ALBUMS_STEP, LOGIN_FACEBOOK_STEP, PREVIEW_SELECTED_ALBUM_STEP,
getStepAtIndex, getStepIndex, getStepCount} from './steplist';

import {fetchPhotos,login as LoginVK} from '../../actions/vk';
import {login as LoginFB} from '../../actions/facebook'
import {goBackSteps, changeStep} from '../../actions/ui';

class StepManager extends Component{
    render(){
        let index = this.props.index | 0;
        return (
            <div>
                <h4><center>{this.props.steps[index].name}</center></h4>
                <div style={{"padding":"15px"}}>
                    {this.props.steps[index].component}
                </div>
                <div>
                    {index == 0? "": <button type="button" className="btn btn-primary"
                                                     onClick={this.props.goBack}
                                                     disabled={index == 0? "disabled":""} >Back</button>}

                </div>
            </div>
        )
    }
}
export default class Step extends Component{
    constructor(props){
        super(props);
    }

    onLoginVK(){
        this.props.dispatch(LoginVK());
    }
    onPreviewAlbum(album){
        this.props.dispatch(fetchPhotos(album))
    }
    onLoginFacebook(){
        this.props.dispatch(LoginFB());
    }
    onExport(){
        this.props.dispatch(changeStep(LOGIN_FACEBOOK_STEP));
    }
    onDone(){

    }
    goBack(){
        this.props.dispatch(goBackSteps());
    }

    initSteps(){
        console.log('albums',this.props.albums);
        var stepToComponent = {};
        stepToComponent[LOGIN_VK_STEP] = <LoginVKStep onLogin={this.onLoginVK.bind(this)}/>;
        stepToComponent[PREVIEW_ALBUMS_STEP] = <PreviewAlbumsStep {...this.props}
                                                                  onPreview={this.onPreviewAlbum.bind(this)}/>;
        stepToComponent[PREVIEW_SELECTED_ALBUM_STEP] = <PreviewSelectedAlbumStep {...this.props} onUploadToFacebook = {this.onExport.bind(this)} />;
        stepToComponent[LOGIN_FACEBOOK_STEP] = <LoginFacebookStep onLogin={this.onLoginFacebook.bind(this)}/>;
        stepToComponent[EXPORT_STEP] =  <ExportingStep onExport={this.onExport.bind(this)} />;
        stepToComponent[DONE_STEP] = <DoneStep onDone = {this.onDone.bind(this)}/>;


        this.steps = new Array(getStepCount());
        for(var step in stepToComponent){
            this.steps[getStepIndex(step)] = {name: step, component: stepToComponent[step]};
        }
    }


    render(){
        this.initSteps();
        let startIndex = _.findIndex(this.steps,{name:this.props.step});
        console.log("start index", startIndex);
        return ( <StepManager
            steps={this.steps}
            preventEnterSubmission={true}
            nextTextOnFinalActionStep={"Save"}
            goBack = {this.goBack.bind(this)}
            index={startIndex}
        />);


    }
}