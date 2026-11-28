import { MessageSquare, User } from 'lucide-react'

interface BarraLateralProps {
  /** Tela destacada na barra: o perfil também fica destacado na edição do perfil. */
  ativa: 'conversa' | 'perfil';
  onNavigate: (screen: string) => void;
}

/** Navegação principal do desktop (a partir de lg). No celular cada tela tem seu próprio cabeçalho. */
export function BarraLateral({ ativa, onNavigate }: BarraLateralProps) {
  const conversaAtiva = ativa === 'conversa'
  const perfilAtivo = ativa === 'perfil'

  return (
    <nav
      aria-label="Navegação principal"
      className="hidden lg:flex w-20 h-full bg-slate-900 flex-col items-center py-6 border-r border-slate-800 shrink-0 z-20"
    >
      <div className="flex-1 w-full px-3 pt-2">
        <button
          type="button"
          onClick={() => onNavigate('conversa')}
          aria-label="Conversas"
          title="Conversas"
          aria-current={conversaAtiva ? 'page' : undefined}
          className={`w-full aspect-square rounded-xl flex items-center justify-center transition-colors cursor-pointer ${
            conversaAtiva ? 'bg-slate-800 text-white' : 'text-slate-400 hover:bg-slate-800 hover:text-white'
          }`}
        >
          <MessageSquare className="w-6 h-6" />
        </button>
      </div>

      <div className="w-full px-3">
        <button
          type="button"
          onClick={() => onNavigate('perfil')}
          aria-label="Meu perfil"
          title="Meu perfil"
          aria-current={perfilAtivo ? 'page' : undefined}
          className={`w-full aspect-square rounded-xl flex items-center justify-center border-2 transition-colors p-0 overflow-hidden cursor-pointer ${
            perfilAtivo ? 'bg-slate-800 border-brand-500' : 'border-transparent hover:border-slate-700'
          }`}
        >
          <div className="w-full h-full bg-slate-700 flex items-center justify-center text-slate-300">
            <User className="w-5 h-5" />
          </div>
        </button>
      </div>
    </nav>
  )
}
