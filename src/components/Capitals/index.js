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

class Capitals extends Component {
  state = {countryId: countryAndCapitalsList[0].id}

  onChangeCapital = event => {
    this.setState({countryId: event.target.value})
  }

  getCountry = () => {
    const {countryId} = this.state

    const activeCountryAndCapital = countryAndCapitalsList.find(
      eachCapital => eachCapital.id === countryId,
    )

    return activeCountryAndCapital.country
  }

  render() {
    const {countryId} = this.state
    const country = this.getCountry(countryId)
    return (
      <div className="container">
        <div className="subContainer">
          <h1 className="heading">Countries And Capitals</h1>
          <div>
            <select
              className="capital-select"
              onChange={this.onChangeCapital}
              value={countryId}
            >
              {countryAndCapitalsList.map(eachCapital => (
                <option
                  key={eachCapital.id}
                  value={eachCapital.id}
                  className="option"
                >
                  {eachCapital.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="span">is capital of which country?</p>
          </div>
          <p className="country">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
