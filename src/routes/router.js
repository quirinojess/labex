import React from 'react'
import HomePage from '../pages/homePage'
import AdminHomePage from '../pages/adminHomePage'
import ErrorPage from '../pages/errorPage.js'
import LoginPage from '../pages/loginPage'
import TripDetail from '../pages/tripDetailPage'
import Header from '../components/header'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function Router() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/labex">
            <HomePage />
          </Route>

          <Route exact path="/adminHomePage">
            <AdminHomePage />
          </Route>

          <Route exact path="/loginPage">
            <LoginPage />
          </Route>

          <Route exact path="/tripDetailPage/:id">
            <TripDetail />
          </Route>

          <Route>
            <HomePage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default Router
