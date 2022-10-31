import React from 'react';
import ReactDOM from 'react-dom/client';
import Homepage from './homepage';
import Blog from './blog';
import Rules from './rules';
import Post from './post';
import "./css/scrollbar.css";
import store from './app/store';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='/MangoCube/homepage' element={<Homepage/>}></Route>
        <Route path='/MangoCube/blog' element={<Blog/>}></Route>
        <Route path='/MangoCube/rules' element={<Rules/>}></Route>
        <Route path='/MangoCube/post' element={<Post/>}></Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
