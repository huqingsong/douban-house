import React from 'react';
import Loadable from 'react-loadable';
import Tabs from '@/views/Tabs';

function LoadingComponent({ error, pastDelay }) {
  if (error) {
    return <div>Error!</div>;
  } else if (pastDelay) {
    return <div>Loading...</div>;
  } else {
    return null;
  }
}

const Login = Loadable({
  loader: () => import('@/views/Login'),
  loading: LoadingComponent
});

const HouseDetail = Loadable({
  loader: () => import('@/views/HouseDetail'),
  loading: LoadingComponent
});

const About = Loadable({
  loader: () => import('@/views/About'),
  loading: LoadingComponent
});

const HouseSearch = Loadable({
  loader: () => import('@/views/HouseSearch'),
  loading: LoadingComponent
});

const UserLikes = Loadable({
  loader: () => import('@/views/UserLikes'),
  loading: LoadingComponent
});

export default [
  {
    path: '/',
    exact: true,
    component: Tabs
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/detail/:id',
    component: HouseDetail
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/search',
    component: HouseSearch
  },
  {
    path: '/likes',
    component: UserLikes,
    auth: true
  }
];
