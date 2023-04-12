// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {total: 0, heads: 0, tails: 0, value: 0}

  onClickedButton = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({
        heads: prevState.heads + 1,
      }))

      this.setState(prevState => ({
        total: prevState.total + 1,
      }))
      this.setState({value: 0})
    } else {
      this.setState(prevState => ({
        tails: prevState.tails + 1,
      }))

      this.setState(prevState => ({
        total: prevState.total + 1,
      }))
      this.setState({value: 1})
    }
  }

  render() {
    const {heads, tails, total, value} = this.state

    return (
      <div className="app-container">
        <div className="coin-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="heads-tails">Heads (or) Tails</p>
          <img
            className="image"
            alt="toss result"
            src={
              value === 0
                ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
            }
          />
          <br />
          <button
            type="button"
            className="button"
            onClick={this.onClickedButton}
          >
            Toss Coin
          </button>
          <div className="result-container">
            <p className="count">Total: {total}</p>
            <p className="count">Heads: {heads}</p>
            <p className="count">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
