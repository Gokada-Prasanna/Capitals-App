import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {
    selectedCapitalId: countryAndCapitalsList[0].id,
  }

  onChangeCapital = event => {
    this.setState({selectedCapitalId: event.target.value})
  }

  getCountry = () => {
    const {selectedCapitalId} = this.state

    const activeCountryAndCapital = countryAndCapitalsList.find(
      eachCapital => eachCapital.id === selectedCapitalId,
    )

    return activeCountryAndCapital.country
  }

  render() {
    const {selectedCapitalId} = this.state
    const country = this.getCountry()

    return (
      <div className="bg-container">
        <div className="inner-container">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="questionContainer">
            <select
              name="capitals"
              className="selectedCapital"
              value={selectedCapitalId}
              onChange={this.onChangeCapital}
            >
              {countryAndCapitalsList.map(eachOption => (
                <option
                  key={eachOption.id}
                  value={eachOption.id}
                  className="option"
                >
                  {eachOption.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="question">Is capital of which country?</p>
          </div>
          <p className="country">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
