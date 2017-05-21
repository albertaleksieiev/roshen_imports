/**
 * Created by albert on 5/20/17.
 */
import React,{ Component } from 'react';

export default class Step extends Component{
    render() {
        return (
           <div>

               <a style={{cursor:"pointer"}} className="btn btn-social btn-twitter" onClick={this.props.onLogin}>
                   <span className="fa fa-vk"></span>
                   Sign in with Vkontakte
               </a>
               <p>Please login in Vk to select album which will be imported. <strong>We do not <a href="./privacy_policy.html">collect</a> any information about you!</strong></p>
           </div>
        )
    }
}