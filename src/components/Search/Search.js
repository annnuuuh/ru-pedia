import React, { Component } from 'react';
import { useEffect, useState } from 'react';
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
      [event.target.name]: event.target.value
    })
    this.props.findQueen(this.state.searchTerm)
  }

  render() {

    return (
      <form className="search">
        <label>Find a Queen
        <input
        type="text"
        name="searchTerm"
        placeholder="She done already done had herses..."
        value={this.state.searchTerm}
        onChange={event => this.handleChange(event)}
        />
        </label>
      </form>
    )
  }
}

export default Search;
