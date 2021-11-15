import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Search.css';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      hasSearched: false
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
    this.setState({
      hasSearched: true
    })
    this.props.findQueen(this.state.searchTerm)
  }

  clearSearch = () => {
    this.setState({
      searchTerm: '',
      hasSearched: false
    })
    this.props.findQueen(this.state.searchTerm)
  }

  render() {

    return (
      <form className="search">
        <label>Find a Queen:
        <input
        type="text"
        name="searchTerm"
        placeholder="She done already done had herses..."
        value={this.state.searchTerm}
        onChange={event => this.handleChange(event)}
        />
        </label>
        <button onClick={this.clearSearch}>
          Clear Search</button>
      </form>
    )
  }
}

export default Search;

Search.propTypes = {
  findQueen: PropTypes.func
};
