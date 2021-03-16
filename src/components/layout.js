import React from "react"
import "./layout.css"

export default function Layout({ children }) {
  return (
    <div>
      <header>
        <h1>Header</h1>
      </header>
      <main>{children}</main>
    </div>
  )
}
