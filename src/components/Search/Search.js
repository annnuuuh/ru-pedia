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

  render() {

    return (
      <form className="search">
        <label>Find a Queen
        <input
        type="text"
        name="input"
        placeholder="She done already done had herses..."
        onChange={this.props.handleChange}
        />
        </label>
      </form>
    )
  }
}

export default Search;
