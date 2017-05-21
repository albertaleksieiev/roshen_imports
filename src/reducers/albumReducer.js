/**
 * Created by albert on 5/18/17.
 */
import {FETCH_ALBUMS, FETCH_PHOTOS, RECEIVE_ALBUMS, RECEIVE_PHOTOS} from '../actions/types';


export function albumReducer(albums, action) {
    switch( action.type){
        case FETCH_ALBUMS:
            return albums;
            break;
        case RECEIVE_ALBUMS:
            return action.albums;
             break;
        default:
            return albums;
            break;
    }
}

export function photosReducer(photos, action) {
    switch( action.type){
        case FETCH_PHOTOS:
            return photos;
            break;
        case RECEIVE_PHOTOS:
            return action.photos;
            break;
        default:
            return photos;
            break;
    }
}