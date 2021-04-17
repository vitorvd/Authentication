import {BrowserRouter, Route, Switch} from 'react-router-dom';

import './App.css';	

import Register from './pages/Register'
import Login from './pages/Login'

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Switch>
					<Route path="/" exact component={Login}/>
					<Route path="/register" exact component={Register}/>
				</Switch>
			</BrowserRouter>
    	</div>
  	);
}

export default App;
