import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Search.css';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value,
    })
    this.props.findQueen(this.state.searchTerm)
  }

  clearSearch = () => {
    this.setState({
      searchTerm: '',
    })
    window.location.reload(true)
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
        {this.state.searchTerm.length > 0 && <button onClick={this.clearSearch}>
          Clear Search</button>}
      </form>
    )
  }
}

export default Search;

Search.propTypes = {
  findQueen: PropTypes.func
};
