import './index.css'

const SuggestionItem = props => {
  const {suggestion, updateSearchInput} = props
  const {suggestion: suggestionText} = suggestion

  const onClickSuggestion = () => {
    updateSearchInput(suggestionText)
  }

  return (
    <li className="suggestion-item">
      <p className="suggestion-text">{suggestionText}</p>
      <button
        type="button"
        className="arrow-button"
        onClick={onClickSuggestion}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow-icon"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
