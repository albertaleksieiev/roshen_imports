/**
 * Created by albert on 5/18/17.
 */
import {SHOW_PHOTOS, HIDE_PHOTOS, CHANGE_STEP,GO_BACK_STEPS} from './types';

export function showPhotoModal() {
    return {
        type: SHOW_PHOTOS,
    }
}
export function goBackSteps() {
    return {
        type: GO_BACK_STEPS
    }
}
export function changeStep(step) {
    return {
        type: CHANGE_STEP,
        step: step
    }
}
export function hidePhotoModal() {
    return {
        type: HIDE_PHOTOS,
    }
}