import * as types from './types';

export const loadPosts = async (dispach) => {
  dispach({ type: types.POSTS_LOADING });

  const postsRaw = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await postsRaw.json();
  console.log('Carreguei os posts');

  return () => dispach({ type: types.POSTS_SUCCESS, payload: posts });
};
