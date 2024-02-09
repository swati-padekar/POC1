import * as React from 'react'
import '../components/WebPartStyle.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import CollapseTreeView from './CollapseTreeView';
import { HashRouter, Route, Routes } from 'react-router-dom';
function TreeView() {
  return (
    <>
      <div className='Performance-root'>
      <HashRouter>
        <Routes>
          <Route path='/' element={<CollapseTreeView  />} />
        </Routes>
      </HashRouter>
      </div>
    </>
  )
}

export default TreeView