import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';



import { BrowserRouter as Router, Route } from 'react-router-dom';
import ExportLayout from './components/layouts/ExportLayout'
import PrivacyPolicyLayout from './components/layouts/PrivacyPolicyLayout';
import MainLayout from './components/layouts/MainLayout'
ReactDOM.render(
    <App>
        <Router>
            <div>
                <Route exact path="/" component={MainLayout}/>
                <Route path="/export" component={ExportLayout} />
                <Route path="/privacy_policy" component={PrivacyPolicyLayout}/>
            </div>
        </Router>
    </App>
    ,
  document.getElementById('root')
);
