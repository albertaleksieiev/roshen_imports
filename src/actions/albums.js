/**
 * Created by albert on 5/18/17.
 */
import {RECEIVE_ALBUMS, RECEIVE_PHOTOS} from './types';
export function receiveAlbums(albums) {
    return {
        type: RECEIVE_ALBUMS,
        albums
    }
}
export function receivePhotos(photos, album) {
    return {
        type: RECEIVE_PHOTOS,
        photos: {items: photos, album}
    }
}