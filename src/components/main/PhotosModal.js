/**
 * Created by albert on 5/18/17.
 */
import React from 'react'

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {hidePhotoModal} from '../../actions/ui';
export default class PhotosModal extends React.Component{
    renderPhoto(photo){
        return <div className="card p-3" key={photo.pid}>
            <img className="card-img-top" src={photo.src_big} style={{width:"100%"}} alt="Card image cap" />
            <div className="card-block">
                <p className="card-text">{photo.text}</p>
            </div>

        </div>;
    }
    render(){
        var maxPhotos = 25;
        return (
            <div style={{overflowY:'scroll'}}>
                <Modal  isOpen={this.props.visible} className={this.props.className + " modal-lg"}>
                    <ModalHeader>Photos</ModalHeader>
                    <ModalBody>
                        <Button color="primary" onClick={() => {
                            this.props.onUploadToFacebook(this.props.photos)
                        }}>Upload</Button>{' '}
                        <Button color="secondary" onClick={this.props.onClose}>Cancel</Button>
                        <div className="card-columns">
                            {this.props.photos.slice(0,maxPhotos).map(photo => this.renderPhoto(photo))}
                        </div>
                        {this.props.photos.length > maxPhotos ? <h3>{"and " +(this.props.photos.length - maxPhotos)+ " photos hiden..."}</h3>:""}
                    </ModalBody>
                </Modal>
            </div>
        )

    }
}