import React from 'react';

class SlotsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reels: ["", "", ""],
      payoutTotal: 0
    };

    this.spin = this.spin.bind(this);
    this.calculatePayout = this.calculatePayout.bind(this);
    this.getAverageWin = this.getAverageWin.bind(this);
  }

  componentDidMount() {
    this.setState({ reels: this.state.reels });
  }

  spin() {
    let reelOne = ['C', 'C', 'C', 'C', 'C', 'G', 'G', 'G', 'G', 'O', 'O', 'O', 'O', 'O', 'O', 'W', 'W'];
    let reelTwo = ['C', 'C', 'C', 'C', 'C', 'C', 'C', 'G', 'G', 'O', 'O', 'O', 'W'];
    let reelThree = ['C', 'C', 'C', 'C', 'C', 'C', 'C', 'G', 'G', 'G', 'O', 'O', 'O', 'O', 'W'];

    let outcome = [
      reelOne[Math.floor(Math.random() * reelOne.length)],
      reelTwo[Math.floor(Math.random() * reelTwo.length)],
      reelThree[Math.floor(Math.random() * reelThree.length)]
    ];

    this.setState({
      reels: outcome
    });
    this.calculatePayout(outcome);
  }

  calculatePayout(array) {
    let payout = 0;

    let cherryCount = 0;
    let grapeCount = 0;
    let orangeCount = 0;
    let wildCount = 0;

    for (let i = 0; i < array.length; i++) {
      if (array[i] === 'C') {
        cherryCount++;
      } else if (array[i] === 'G') {
        grapeCount++;
      } else if (array[i] === 'O') {
        orangeCount++;
      } else if (array[i] === 'W') {
        wildCount++;
      }
    }

    if (cherryCount + wildCount === 2) {
      payout = 1;
    } else if (cherryCount + wildCount === 3) {
      payout = 5;
    } else if (grapeCount + wildCount === 3) {
      payout = 10;
    } else if (orangeCount + wildCount === 3) {
      payout = 15;
    } else if (wildCount === 3) {
      payout = 100;
    }

    this.setState({
      payoutTotal: payout
    });
  }

  // getAverageWin()	– determines	an	average	of	how	much	each	spin	will	win
  getAverageWin() {
    // chance of 2 cherries
    let twoCherriesProb = ((7/17) * (8/13) * (7/15)) + ((7/17) * (5/13) * (8/15)) + ((10/17) * (8/13) * (8/15));

    // chance of 3 cherries
    let threeCherriesProb = (7/17) * (8/13) * (8/15);

    // chance of 3 grapes
    let threeGrapesProb = (6/17) * (3/13) * (4/15);

    // chance of 3 oranges
    let threeOrangesProb = (8/17) * (4/13) * (5/13);

    // chance of 3 wilds
    let threeWildsProb = (2/17) * (1/13) * (1/15);

    // calculate payout
    let twoCherriesAvgPay = twoCherriesProb * 1;
    let threeCherriesAvgPay = threeCherriesProb * 5;
    let threeGrapesAvgPay = threeGrapesProb * 10;
    let threeOrangesAvgPay = threeOrangesProb * 15;
    let threeWildsAvgPay = threeWildsProb * 100;

    let totalAvgPay = twoCherriesAvgPay + threeCherriesAvgPay + threeGrapesAvgPay + threeOrangesAvgPay + threeWildsAvgPay;

    return totalAvgPay;
  }

  displayReels(reel) {
    return (
      reel.map(el => (
        <div className="individual-reel">{el}</div>
        ))
    );
  }

  render() {
    return (
      <div className="slots-page">
        <div className="jackpot-header-container">
          <h1 className="jackpot-header">JACKPOT</h1>
        </div>
        <div className="reels-display">{this.displayReels(this.state.reels)}</div>

        <button onClick={this.spin} className="spin-button">Spin!</button>

        <p>Payout: {this.state.payoutTotal}</p>

        <p>Average Payout: ~{Math.round(this.getAverageWin() * 100) / 100}</p>

      </div>
    );
  }
}

export default SlotsPage;
