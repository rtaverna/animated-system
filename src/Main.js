import React, {Component} from "react";
import axios from "axios";


class Main extends Component    {
    constructor(props) {
        super(props)
    
        this.state = {
          showMenu: false,
          title: null,
          result: null,
          nominations: []
        }

        this.handleChange = this.handleChange.bind(this);
        this.search = this.search.bind(this);
        this.nominate = this.nominate.bind(this);


    }
    
    componentDidMount() {
        console.log(this.state)
    }
    
    handleChange(event) {
        event.preventDefault();
        this.setState({
            ...this.state,
            title: event.target.value
        })
        this.search()

    }

    search()  {
        const API_KEY = process.env.REACT_APP_API_KEY;
        const api = `http://www.omdbapi.com/?t=${this.state.title}&apikey=${API_KEY}`
        axios.get(api)
             .then((res) => {
                 console.log('data: ',res)
                 this.setState({
                     ...this.state,
                     result: res.data
                 })
             })
    }

    nominate(event)  {
        event.preventDefault()
        if (this.state.nominations.length < 5 && !this.state.nominations.includes(this.state.result))   {
            this.setState({
                ...this.state,
                nominations: [...this.state.nominations,this.state.result]
            })
        }

    }

    render()    {
        return(
            <div>
                <div id="header">
                    Welcome to The Shoppies
                </div>
                
                <div>Your Nominations:</div>
                <br></br>
                {this.state.nominations.length === 0 ? <div>Search movies to nominate!</div> : this.state.nominations.map(nom => <div key={nom.imdbID}>{nom.Title}</div>)}
                <div id="search">
                    <input type="text" onChange={this.handleChange}></input>
                    <button onClick={this.search}>Search</button>
                </div>
                {this.state.result ? <div>{this.state.result.Title}, {this.state.result.Year} <div><button onClick={this.nominate}>Nominate</button></div></div> : null}
            </div>
        )
    }
}
      
    
      

      export default Main