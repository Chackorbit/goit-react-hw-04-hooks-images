import React, { Component } from 'react';
import s from './Searchbar.module.css';
import { FcSearch } from 'react-icons/fc';

export default class Searchbar extends Component {
  state = { searchQuery: '' };

  onInputWord = e => {
    this.setState({
      searchQuery: e.currentTarget.value.trim(),
    });
  };

  formSubmit = e => {
    e.preventDefault();
    console.log(e.target.lastChild.value);
    console.log(this.state.searchQuery);
    this.props.setSearchQuery(this.state.searchQuery);
  };

  render() {
    return (
      <header className={s.searchbar}>
        <form className={s.SearchForm} onSubmit={this.formSubmit}>
          <button type="submit" className={s.SearchForm_button}>
            <span className={s.button_label}></span>
            <FcSearch />
          </button>

          <input
            onInput={this.onInputWord}
            className={s.SearchForm_input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
