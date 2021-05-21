import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import CreatePoll from './CreatePoll'
import Dashboard from './Dashboard'
import Poll from './Poll'
import PollResults from './PollResults'

import MainLayout from '../layouts/MainLayout'

const Pages = () => {
  return (
    <Router>
      <MainLayout>
        <Switch>
          <Route exact path="/poll" component={Dashboard} />
          <Route path="/poll/new" component={CreatePoll} />
          <Route path="/poll/:pollId/results" component={PollResults} />
          <Route path="/poll/:pollId" component={Poll} />
        </Switch>
      </MainLayout>
    </Router>
  )
}

export default Pages
