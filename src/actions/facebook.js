/**
 * Created by albert on 5/19/17.
 */
import facebookAPI from '../api/facebookAPI'
import {PHOTOS_TO_FB_UPLOAD_FAIL, PHOTOS_TO_FB_UPLOAD_PROGRESS,
    PHOTOS_TO_FB_UPLOAD_UPLOADED,PHOTOS_TO_FB_UPLOAD, FACEBOOK_LOGIN_SUCESS} from './types'
export function uploadProgress(progress) {
    return {
        action: PHOTOS_TO_FB_UPLOAD_PROGRESS,
        progress
    }
}
export function uploadDone() {
    return {
        action: PHOTOS_TO_FB_UPLOAD_UPLOADED
    }
}
export function uploadFail() {
    return {
        action: PHOTOS_TO_FB_UPLOAD_FAIL
    }
}
export function facebookLoginSuccess() {
    return {
        action: FACEBOOK_LOGIN_SUCESS
    }
}
export function login() {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            new facebookAPI()
                .login()
                .then( () => {
                    resolve();
                    dispatch(facebookLoginSuccess())
                })
                .catch(reject);
        });

    }
}
export function uploadPhotos(photos, album) {
    return (dispatch) => {
        return new Promise((resolve, reject ) => {
            new facebookAPI()
                .uploadPhotos(photos, album.title, (progress) => dispatch(uploadProgress(progress)))
                .then(() => {
                    dispatch(uploadDone());
                    resolve();
                })
                .catch((e) => {
                    dispatch(uploadFail());
                    reject(e);
                })
        });
    }
}