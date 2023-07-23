import React from 'react'
import { Route, Routes } from 'react-router-dom'
import pageData from './pageData'

const Router = () => {
  return (
    <Routes>
        {pageData.map(page => <Route key={page.title} path={page.path} element={<page.element/>}></Route>)}
    </Routes>
  )
}

export default Router