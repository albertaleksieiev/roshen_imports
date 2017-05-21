/**
 * Created by albert on 5/18/17.
 */

import {receiveAlbums, receivePhotos} from './albums';
import vkAPI from '../api/vkAPI'
import {VK_LOGIN_SUCCESS} from './types'

export function vkLoginSuccess() {
    return {
        type: VK_LOGIN_SUCCESS
    }
}
export function login() {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            new vkAPI()
                .login()
                .then(() => {
                    dispatch(vkLoginSuccess());
                    resolve()
                })
                .catch(reject);
        })
    }
}
export function fetchAlbums() {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            new vkAPI()
                .getAlbums()
                .then((data) => {

                    dispatch(receiveAlbums(data.albums));
                    resolve({albums:data.albums});
                })

        });
    };
}
export function fetchPhotos(album) {
    return (dispatch) => {
        return new Promise((resolve, reject) => {

           new vkAPI()
               .getPhotos(album.aid)
               .then((photos) => {
                   dispatch(receivePhotos(photos, album) );
                   resolve(photos);
               });


        });
    }
}