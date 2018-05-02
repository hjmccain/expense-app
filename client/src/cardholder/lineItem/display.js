import React, { Component } from 'react';
import { receipts } from 'cardholder/data/receipts';
import { expenses } from 'cardholder/data/expenses';
import LineItem from './LineItem';
import LineItemHeader from './Header';

class LineItemDisplay extends Component {
  state = {
    numToDisplay: 3,
    entries: [],
    displayReceipts: null
  }

  componentDidMount = () => this.updateEntries();
  componentDidUpdate = (prevProps) => (prevProps !== this.props) && this.updateEntries();

  updateLineItems = () => {
    const num = this.state.numToDisplay + 3;
    this.setState({ numToDisplay: num });
    this.updateEntries(num);
  }

  updateEntries = (num) => {
    if (this.props.displayReceipts !== this.state.displayReceipts) {
      this.setState({ displayReceipts: this.props.displayReceipts });
    }
    this.setState({ entries: this.props.displayReceipts ? this.getArray(receipts, num) : this.getArray(expenses, num) });
  }

  getArray = (entriesObject, num) => {
    const entriesArray = Object.entries(entriesObject).map(ary => ary[1]);
    return entriesArray.slice(0, num || this.state.numToDisplay);
  }

  render() {
    console.log('====================================');
    console.log(this.props, this.state);
    console.log('====================================');
    return (
      <div className="line-item-display">
        <LineItemHeader />
        {
          Object.entries(this.state.entries).map(ary => {
            return <LineItem key={ary[0]} data={ary[1]} />
          })
        }
        <button className="button -load-more" onClick={this.updateLineItems.bind(this)}>Load More</button>
      </div>
    );
  }
};

export default LineItemDisplay;