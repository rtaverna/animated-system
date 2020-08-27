import React, {Component} from "react";
import axios from "axios";
import Nomination from "./Nomination";
import Result from "./Result";


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
        this.unNominate = this.unNominate.bind(this);



    }
    
    componentDidMount() {
        console.log(this.state)
    }
    
    handleChange(event) {
        event.preventDefault();
        this.setState({title: event.target.value}, this.search)

    }

    search()  {
        const API_KEY = process.env.REACT_APP_API_KEY;
        const api = `http://www.omdbapi.com/?t=${this.state.title}&apikey=${API_KEY}`
        axios.get(api)
             .then((res) => {
                 console.log('data: ',res)
                 this.setState({result: res.data})
             })
    }

    nominate(event)  {
        event.preventDefault();
        if (this.state.nominations.length < 5 && !this.state.nominations.includes(this.state.result))   {
            this.setState({nominations: [...this.state.nominations,this.state.result]})
        }   else if (this.state.nominations.length === 5)   {
                alert("Max 5 Nominations!")
        }
    }

    unNominate(event)   {
        event.preventDefault();
        let newNoms = this.state.nominations.filter(nom => nom.imdbID !== event.target.value);
        this.setState({nominations: newNoms})

    }

    render()    {
        return(
            <div>
                <div id="header">
                    Welcome to The Shoppies!
                </div>
                <div className="nominations">
                    <div id="navTitle">Your Nominations:</div>
                    <br></br>
                    {this.state.nominations.length === 0 ? <div>You haven't nominated anything yet. Search for your favorites below!</div> : this.state.nominations.map(nom => <Nomination key={nom.imdbID} nom={nom} unNominate={this.unNominate}/>)}
                </div>
                <div id="search">
                    <input type="text" onChange={this.handleChange}></input>
                    <button onClick={this.search}>Search</button>
                </div>
                {this.state.result && this.state.result.Title ? <Result key={this.state.result.imdbID} nominations={this.state.nominations} result={this.state.result} nominate={this.nominate}/> : null}
            </div>
        )
    }
}
      
    
      

      export default Main