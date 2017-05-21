/**
 * Created by albert on 5/18/17.
 */
import {albumReducer,photosReducer } from './albumReducer';
import {uiReducer} from './uiReducer'
export default function roshenImportsApp(state, action){


    return Object.assign({},state,{
        albums: albumReducer(state.albums, action),
        photos: photosReducer(state.photos, action),
        ui: uiReducer(state.ui, action)
    });
};