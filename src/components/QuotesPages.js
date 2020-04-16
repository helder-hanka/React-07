import React from 'react'
import axios from 'axios'
import DisplyaCharacter from './DisplayCharacter'

import './QuotesPages.css'

class QuotesPages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            simpsons: []
        }
    }
    // getSimpsons = () => {
    //     axios.get('https://simpsons-quotes-api.herokuapp.com/quotes?count=1')
    //     //.then(Response => Response.data)
    //     //.then(data => {this.setState({simpsons: data.quote[0]})})
    //     .then(res => console.log(res) || this.setState({simpsons: res.data[0]}))
    //     //.then(res => this.setState({simpsons: res.data}))
    // }

    getCharacters = () => {
        axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
        // .then(res => console.log(res) || this.setState({simpsons: res.data}))
        .then(res => this.setState({simpsons: res.data}))
    }

    componentDidMount (d) {
        this.getCharacters()
    }
    render() {
        //console.log(this)
        //const {simpsons} = this.state
        return (
            <div className="QuotesPages">
                {/* {simpsons.map((simpson) => console.log(simpson) || (<p>{simpson.character}</p>))} */}
                {this.state.simpsons.map((simpson) => (
                    <DisplyaCharacter simpson={simpson} key={simpson.quote}/>
                    
                ))}
                <div>
                    <button type="button" onClick={this.getCharacters}>get Simpsons</button>
                </div>
            </div>
        )

    }
}

export default QuotesPages