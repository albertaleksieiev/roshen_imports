/**
 * Created by albert on 5/20/17.
 */
import React,{ Component } from 'react';

export default class Step extends Component{
    render() {
        return (
            <div>

                <a className="btn btn-social btn-facebook" style={{color:"white", cursor:"pointer"}} onClick={this.props.onLogin}>
                    <span className="fa fa-facebook"></span> Sign in Facebook
                </a>
                <p>Please login in facebook to export selected album.  <strong>We do not <a href="./privacy_policy.html">collect</a> any information about you!</strong></p>
            </div>
        )
    }
}