import React from 'react';
import '../styles/Main.css'
import { Switch, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Todo from '../pages/todo/Todo'
import Contact from '../pages/Contact'


const Main = () => {
    return (
        <div className="main">
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/todo' component={Todo} />
                <Route path='/contact' component={Contact} />
            </Switch>
        </div>
    );
}

export default Main;