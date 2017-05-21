/**
 * Created by albert on 5/20/17.
 */
export var LOGIN_VK_STEP       = "Login VK";
export var PREVIEW_ALBUMS_STEP = "Preview Albums";
export var PREVIEW_SELECTED_ALBUM_STEP = "Preview Album";
export var LOGIN_FACEBOOK_STEP = "Login facebook";
export var EXPORT_STEP  = "Export Album";
export var DONE_STEP           = "Done";


var steps = [LOGIN_VK_STEP, PREVIEW_ALBUMS_STEP, PREVIEW_SELECTED_ALBUM_STEP, LOGIN_FACEBOOK_STEP, EXPORT_STEP, DONE_STEP];
export function getStepCount() {
    return steps.length;
}
export function getStepAtIndex(index) {
    return steps[index];
}
export function getStepIndex(step) {

    return steps.indexOf(step);
}