import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  updateSearchInput = value => {
    this.setState({searchInput: value})
  }

  getFilteredSuggestions = () => {
    const {searchInput} = this.state
    const {suggestionsList} = this.props
    const lowercasedInput = searchInput.toLowerCase()

    return suggestionsList.filter(suggestion =>
      suggestion.suggestion.toLowerCase().includes(lowercasedInput),
    )
  }

  render() {
    const {searchInput} = this.state
    const filteredSuggestions = this.getFilteredSuggestions()

    return (
      <div className="app-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="google-logo"
        />
        <div className="search-container">
          <div className="input-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search-icon"
            />
            <input
              type="search"
              className="search-input"
              value={searchInput}
              onChange={this.onChangeSearchInput}
              placeholder="Search Google"
            />
          </div>
          <ul className="suggestions-list">
            {filteredSuggestions.map(suggestion => (
              <SuggestionItem
                key={suggestion.id}
                suggestion={suggestion}
                updateSearchInput={this.updateSearchInput}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
