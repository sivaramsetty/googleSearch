// Write your code here
// Write your code here
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {userInput: ''}

  onChangeInput = event => {
    this.setState({userInput: event.target.value})
  }

  arrow = suggestion => {
    console.log(suggestion)
    this.setState({userInput: suggestion})
  }

  render() {
    const {suggestionsList} = this.props
    const {userInput} = this.state

    const filteredList = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(userInput.toLowerCase()),
    )
    return (
      <div className="con">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
            className="google"
          />
        </div>
        <div className="card">
          <div className="cardCon">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              className="search"
              alt="search icon"
            />
            <input
              type="search"
              value={userInput}
              placeholder="Search Google"
              className="inputValue"
              onChange={this.onChangeInput}
            />
          </div>
          <div>
            <SuggestionItem filteredList={filteredList} arrow={this.arrow} />
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
