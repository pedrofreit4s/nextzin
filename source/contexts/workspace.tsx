import { createContext, useContext, useState } from 'react'

interface Workspace {
  items: { id: number; name: string; iconClass: string }[]
  item: { id: number; name: string; iconClass: string }
  setItems: any
  setItem: any
}

export const WorkspaceContext = createContext<Workspace>(null)

export function WorkspaceProvider({ children }) {
  const [items, setItems] = useState<
    { id: number; name: string; iconClass: string }[]
  >([
    { id: 0, name: 'Financial', iconClass: 'bx bx-money' },
    { id: 1, name: 'Development', iconClass: 'bx bx-code-alt' },
    { id: 2, name: 'Administration', iconClass: 'bx bx-infinite' },
  ])
  const [item, setItem] = useState<{
    id: number
    name: string
    iconClass: string
  }>({ id: 0, name: 'Financial', iconClass: 'bx bx-money' })

  return (
    <WorkspaceContext.Provider
      value={{
        items,
        item,
        setItems,
        setItem,
      }}
    >
      {children}
    </WorkspaceContext.Provider>
  )
}

export function useWorkspace() {
  return useContext(WorkspaceContext)
}
