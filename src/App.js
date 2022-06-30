import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './style.css';
import { UIContext } from './Context/UIContext';

import Home from './Pages/Home/Home';
import BookmarkedRestaurants from './Pages/BookmarkedRestaurants/BookmarkedRestaurants';

const App = () => {
  const [sidebarOpen, setSidebarOpen] = React.useState(true);

  return (
    <>
      <UIContext.Provider value={{ sidebarOpen, setSidebarOpen }}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/bm-restaurants" element={<BookmarkedRestaurants />} />
          </Routes>
        </Router>
      </UIContext.Provider>
    </>
  );
};
export default App;
