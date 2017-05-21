/**
 * Created by albert on 5/20/17.
 */
import React,{ Component } from 'react';
import {fetchAlbums, fetchPhotos} from '../../../actions/vk'

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {hidePhotoModal} from '../../../actions/ui';

export default class Step extends Component{
    componentWillMount(){
        this.props.dispatch(fetchAlbums())
    }
    CardComponent(album){
        return (
            <div className="card p-3" key={album.aid}>
                <img className="card-img-top" src={album.thumb_src} alt="Card image cap" />
                <div className="card-block">
                    <h4 className="card-title">{album.title}</h4>
                    <p className="card-text">{album.description}</p>

                    <button type="button" className="btn btn-primary" onClick={((album) => () => this.props.onPreview(album))(album) }>Upload to FB</button>
                </div>

            </div>);
    }
    render(){

        return (

            <div className="card-columns">
                {this.props.albums.map(album => this.CardComponent(album))}
            </div>

        )
    }
}