// Write your code here

const SuggestionItem = props => {
  const {filteredList, arrow} = props

  return (
    <div>
      <ul>
        {filteredList.map(each => (
          <li key={each.id}>
            <p>{each.suggestion}</p>
            <img
              src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
              alt="arrow"
              className="arrow"
              onClick={() => arrow(each.suggestion)}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SuggestionItem
