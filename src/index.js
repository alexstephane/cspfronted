
import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
// import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'semantic-ui-css/semantic.min.css'

render((

    

    
        <App />

        

  
), document.getElementById('root'));
 reportWebVitals();










// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';

//  import { BrowserRouter as Router, Route, Switch, Redirect} from "react-bootstrap";





// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,


//   <BrowserRouter>
//     <Switch>
//       <Route path="/" exact render={props => <Index {...props} />} />
//       <Route
//         path="/landing-page"
//         exact
//         render={props => <App {...props} />}
//       />
//       <Route path="/login-page" exact render={props => <Login {...props} />} />
      
      
//       <Redirect to="/" />
//     </Switch>
//   </BrowserRouter>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

