import { useReducer } from 'react';
import axios from 'axios'

// data
import githubContext from './githubContext';
import githubReducer from './githubReducer';

let githubClientId;
let githubClientSecret;

githubClientId = process.env.GITHUB_CLIENT_ID;
githubClientSecret = process.env.GITHUB_CLIENT_SECRET;

import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS
} from '../types'


export default function GithubState( props ) {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false
  }

  const [ state, dispatch ] = useReducer( githubReducer, initialState )

  // search users
  async function searchUsers( text ) {
    setLoading()

    const response = await axios.get( `https://api.github.com/search/users?q=${text}` )

    //dispatch the data
    dispatch( {
      type: SEARCH_USERS,
      payload: response.data.items
    } )
  }

  // get a user
  async function getUser( username ) {
    setLoading()
    const response = await axios.get( `https://api.github.com/users/${username}?client_id=${githubClientId}&client_secret=${githubClientSecret}` )

    //dispatch the data
    dispatch( {
      type: GET_USER,
      payload: response.data
    } )
  }

  // get user repos
  async function getUserRepos( username ) {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=12&sort=created:asc?client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );

    dispatch( {
      type: GET_REPOS,
      payload: res.data
    } );
  };
  // Clear Users
  function clearUsers() {
    dispatch( { type: CLEAR_USERS } )
  }

  // Set Loading
  function setLoading() {
    dispatch( { type: SET_LOADING } )
  }

  return (
    <githubContext.Provider
      value={ {
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos
      } }
    >
      { props.children }
    </githubContext.Provider>
  );
}

