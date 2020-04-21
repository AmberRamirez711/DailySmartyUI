import { SET_RECENT_POSTS } from './types';

import Axios from "axios"

export function fetchRecentPosts() {
    return function(dispatch) {
        Axios.get('https://api.dailysmarty.com/posts')
            .then(response => {
                console.log(response.data.posts);
                dispatch({
                    type: SET_RECENT_POSTS,
                    payload: response.data.posts
                })
            })
    }
}