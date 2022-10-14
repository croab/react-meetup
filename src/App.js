import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router';
import AllEventsPage from "./pages/AllEvents";
import NewEventPage from "./pages/NewEvent";
import TopEventsPage from "./pages/TopEvents";

import Layout from "./components/ui/Layout";

class App extends Component {

  render() {
    return (
      <Layout>
        <Routes>
          <Route path="/events/" element={<AllEventsPage />} />
          <Route path="/events/new" element={<NewEventPage />} />
          <Route path="/events/top" element={<TopEventsPage />} />
        </Routes>
      </Layout>
    );
  }
}

export default App;
