'use client'
import React, { createContext, useContext, useState } from 'react'

// Создаем контекст
const PageInfoContext = createContext()

// Создаем провайдер контекста
export function PageInfoProvider({ children }) {
  const [pageInfo, setPageInfo] = useState(null) // Состояние для хранения данных страницы

  return (
    <PageInfoContext.Provider value={{ pageInfo, setPageInfo }}>
      {children}
    </PageInfoContext.Provider>
  )
}

// Пользовательский хук для использования контекста
export function usePageInfo() {
  return useContext(PageInfoContext)
}
