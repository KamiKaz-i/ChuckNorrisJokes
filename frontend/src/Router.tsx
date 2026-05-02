import {
  createRouter,
  createRoute,
  createRootRoute,
} from '@tanstack/react-router'

import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import RandomJoke from './pages/RandomJoke.tsx';
import AddJoke from './pages/AddJoke.tsx';
import Login from './pages/Login.tsx';
import Register from './pages/Register.tsx';
import MyJoke from './pages/MyJoke.tsx';
import App from './App.tsx'

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
  path: '/randomJokes',
  component: () =>  <RandomJoke /> 
});

const addJokeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/addJoke',
  component: () =>  <AddJoke></AddJoke> 
});
const myJokesRoute = createRoute({
  getParentRoute: () => rootRoute,
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