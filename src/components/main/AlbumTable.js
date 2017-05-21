/**
 * Created by albert on 5/18/17.
 */
import React from 'react';

export default class AlbumTable extends React.Component{
    AlbumTable(){

        this.props.onShowPhotos = (album) => {};
    }
    CardComponent(album){
        return (
            <div className="card p-3" key={album.aid}>
                <img className="card-img-top" src={album.thumb_src} alt="Card image cap" />
                <div className="card-block">
                    <h4 className="card-title">{album.title}</h4>
                    <p className="card-text">{album.description}</p>

                    <button type="button" class="btn btn-primary" onClick={((album) => () => this.props.onShowPhotos(album))(album) }>Upload to FB</button>
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