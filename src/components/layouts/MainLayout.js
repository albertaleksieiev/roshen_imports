/**
 * Created by albert on 5/21/17.
 */
import React,{Component} from 'react';
export default class MainLayout extends Component{
    render(){
        return(
           <div>

               <h3 id="whatwearedoing">What we are doing?</h3>

               <p>We imports your photo Albums from <a href="https://vk.com">vk.com</a> to <a href="https://www.facebook.com">facebook.com</a>. That is :)</p>
               <br/>
               <a href="export"> <button type="button" className="btn btn-success">Start Importing</button>
               </a>
           </div>
        )
    }
}