import React from 'react'
import Navbar from './components/Molecules/Navbar/Navbar'
import  Card from "./components/Molecules/Card/Card"
import Todo from "./components/Molecules/Todo/Todo"

export default function App() {
  return (
    <div>
      <Navbar/>
      <Card/>
      {/* <Card/>
      <Card/> */}
      <Todo/>
    </div>
  )
}
