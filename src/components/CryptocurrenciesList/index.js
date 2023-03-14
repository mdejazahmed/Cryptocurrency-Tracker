// Write your JS code here
import Component from 'react'

import './index.css'

class CryptocurrenciesList extends Component {
  render() {
    return (
      <div className="cryptoListContainer">
        <h1 className="cryptoListHeading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="cryptoListImg"
        />
        <div className="cryptoTableContainer">
          <div className="cryptoTableColumn">
            <p className="columnPara column1">Coin type</p>
            <div className="leftDiv">
              <p className="columnPara column2">USD</p>
              <p className="columnPara column3">EURO</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default CryptocurrenciesList
