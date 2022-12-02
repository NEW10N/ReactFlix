import React, { useContext, createContext, useState } from 'react'

export const pageContext = createContext()
const { Provider } = pageContext;


const PageContext = ({ children }) => {

  const [page, setPage] = useState("")

  const actualPage = (page) => {
    setPage(page)
  }

  const dataPage = {
    page,
    actualPage
  }
  return (
    <Provider value={dataPage} >{children}</Provider>
  )
}

export default PageContext