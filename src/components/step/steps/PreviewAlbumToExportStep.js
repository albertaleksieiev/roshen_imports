/**
 * Created by albert on 5/21/17.
 */

import React,{ Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
export default class Step extends Component{
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

                    <h1>Photos</h1>
                    <div>
                        <Button color="primary" onClick={() => {
                            this.props.onUploadToFacebook(this.props.photos)
                        }}>Upload</Button>{' '}

                        <div className="card-columns">
                            {this.props.photos.slice(0,maxPhotos).map(photo => this.renderPhoto(photo))}
                        </div>
                        {this.props.photos.length > maxPhotos ? <h3>{"and " +(this.props.photos.length - maxPhotos)+ " photos hiden..."}</h3>:""}
                    </div>

            </div>
        )

    }
}