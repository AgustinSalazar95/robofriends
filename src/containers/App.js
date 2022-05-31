import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
// import {robots}  from './robots';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';


// Creamos una clase
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response =>  response.json())
        .then(users => this.setState({ robots: users}));
    }

    //funcion q invneto, que es un objeto
    onSearchChange = (event) => {
        // cuadno algo va volver a hacer vacio
        this.setState({ searchfield: event.target.value });       
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });
        // CONTROL console.log(filteredRobots);
        if(this.state.robots.length === 0){
            return <h1>Loading</h1>
        }else {
            //  arrow function tiene q devolver algo todo adentro de esa return solo una cosa return 
            return (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    {/* Creamos un COMPONENTE(React) para cuadro de busqueda */}
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filteredRobots}/>
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );
        } 
    }
}

export default App;