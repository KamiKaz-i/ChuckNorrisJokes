import {
  createRouter,
  createRoute,
  createRootRoute,
  redirect,
} from '@tanstack/react-router'

import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import RandomJoke from './pages/RandomJoke.tsx';
import AddJoke from './pages/AddJoke.tsx';
import Login from './pages/Login.tsx';
import Register from './pages/Register.tsx';
import MyJoke from './pages/MyJoke.tsx';
import App from './App.tsx'
const isAuthenticated = ()=>{
  
  const token = localStorage.getItem('token');
  if(token){
    return true;
  }
  else{
    return false;
  }
}
const rootRoute = createRootRoute({
  component: () => (
    <>
      <App/>
      <TanStackRouterDevtools />
    </>
  ),
})

const randomJokesRoute = createRoute({
  getParentRoute: () => rootRoute,
  beforeLoad: async ({ location }) => {
    if (!isAuthenticated()) {
      throw redirect({
        to: '/',
        search: {
          redirect: location.href,
        },
      })
    }
  },
  path: '/randomJokes',
  component: () =>  <RandomJoke /> 
});

const addJokeRoute = createRoute({
  getParentRoute: () => rootRoute,
  beforeLoad: async ({ location }) => {
    if (!isAuthenticated()) {
      throw redirect({
        to: '/',
        search: {
          redirect: location.href,
        },
      })
    }
  },
  path: '/addJoke',
  component: () =>  <AddJoke></AddJoke> 
});
const myJokesRoute = createRoute({
  getParentRoute: () => rootRoute,
  beforeLoad: async ({ location }) => {
    if (!isAuthenticated()) {
      throw redirect({
        to: '/',
        search: {
          redirect: location.href,
        },
      })
    }
  },
  path: '/myJokes',
  component: () =>  <MyJoke /> 
});
const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: () =>  <Login /> 
});
const registerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/register',
  component: () =>  <Register /> 
});

const routeTree = rootRoute.addChildren([randomJokesRoute, addJokeRoute, myJokesRoute, loginRoute, registerRoute])

export const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}