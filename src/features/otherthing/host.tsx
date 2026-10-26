'use client'

import { createContext, useContext, type ReactNode } from 'react'
import { brand } from './config/brand'
import type { HostConfig } from './types'

const HostContext = createContext<HostConfig>(brand)
export function OtherthingHostProvider({ children, ...config }: HostConfig & { children: ReactNode }) {
  return <HostContext.Provider value={config}>{children}</HostContext.Provider>
}
export const useOtherthingHost = () => useContext(HostContext)
