import { useState } from 'react'
import { useScreenInit } from './useScreenInit.tsx'

import { Login } from './screens/Login'
import { Cadastro } from './screens/Cadastro'
import { RedefinirSenha } from './screens/RedefinirSenha'

export function App() {
  const screenInit = useScreenInit()
  
  const [activeTab, setActiveTab] = useState(screenInit?.activeTab ?? 'login')

  const renderScreen = () => {
    switch (activeTab) {
      case 'login': return <Login onNavigate={setActiveTab} />
      case 'cadastro': return <Cadastro onNavigate={setActiveTab} />
      case 'redefinir-senha': return <RedefinirSenha onNavigate={setActiveTab} />
    }
  }

  return (
    <div className="flex flex-col min-h-screen font-sans bg-slate-50">
      <div className="flex-1 flex flex-col w-full bg-white">
        {renderScreen()}
      </div>
    </div>
  )
}