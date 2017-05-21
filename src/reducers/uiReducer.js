/**
 * Created by albert on 5/18/17.
 */
import {HIDE_PHOTOS, SHOW_PHOTOS, RECEIVE_PHOTOS,
    PHOTOS_TO_FB_UPLOAD_FAIL, PHOTOS_TO_FB_UPLOAD_PROGRESS,
    PHOTOS_TO_FB_UPLOAD_UPLOADED,PHOTOS_TO_FB_UPLOAD,
    VK_LOGIN_SUCCESS,
    CHANGE_STEP, GO_BACK_STEPS}
    from '../actions/types'
import {changeStep} from '../actions/ui'

import {LOGIN_VK_STEP, PREVIEW_ALBUMS_STEP, PREVIEW_SELECTED_ALBUM_STEP, getStepIndex, getStepAtIndex} from '../components/step/steplist'
function uploadingReducer(ui, action) {
    switch( action.type) {
        case PHOTOS_TO_FB_UPLOAD:
            return Object.assign({}, ui, {started:true} );
            break;
        case PHOTOS_TO_FB_UPLOAD_PROGRESS:
            return Object.assign({}, ui, {progress:action.progress} );
            break;
    }
}
function stepsReducer(ui, action) {


    switch (action.type){
        case RECEIVE_PHOTOS:
            return Object.assign({}, ui, {step: PREVIEW_SELECTED_ALBUM_STEP});
            break;
        case VK_LOGIN_SUCCESS:
            return Object.assign({}, ui, {step: PREVIEW_ALBUMS_STEP});
            break;
        case CHANGE_STEP:
            return Object.assign({}, ui, {step: action.step});
            break;
        case GO_BACK_STEPS:
            var cur_step_index = getStepIndex(ui.steps.step);
            return Object.assign({}, ui, {
                step: cur_step_index > 0 ? getStepAtIndex(cur_step_index - 1): ui.steps.step
            });
            break;

        default:
            return Object.assign({},ui, {step: ui.steps.step})
    }
}
export function uiReducer(ui, action) {
    ui = Object.assign({}, ui, {
        uploading   : uploadingReducer(ui, action),
        steps       : stepsReducer(ui, action)
    });
    switch( action.type){
        case RECEIVE_PHOTOS:
        case SHOW_PHOTOS:
            return ui;
            break;
        default:
            return ui;
            break;
    }
}