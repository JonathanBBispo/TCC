import { useState } from 'react'
import { Check, ChevronRight, LogOut, MessageSquare, Pencil, Plus } from 'lucide-react'
import { BarraLateral } from '../components/BarraLateral'
import { REDES_SOCIAIS, ehConversaIndividual, redesConectadas } from '../redesSociais'
import type { Sessao } from '../api'

interface PerfilProps {
  onNavigate: (screen: string) => void;
  sessao: Sessao;
  onLogout: () => Promise<void>;
}

const classeCartao = 'bg-white rounded-2xl border border-slate-200 shadow-sm'

export function Perfil({ onNavigate, sessao, onLogout }: PerfilProps) {
  const [saindo, setSaindo] = useState(false)
  const { usuario, conversas } = sessao

  const nome = usuario.nome || 'Usuário'
  const username = `@${usuario.nome_usuario.replace(/^@/, '')}`
  const redes = redesConectadas(conversas)
  const estatisticas = [
    { rotulo: 'Conversas', valor: conversas.length },
    { rotulo: 'Contatos', valor: conversas.filter(ehConversaIndividual).length },
    { rotulo: 'Redes', valor: redes.length },
  ]

  const handleSair = async () => {
    setSaindo(true)
    await onLogout()
  }

  return (
    <div className="flex h-screen w-full bg-slate-50 overflow-hidden">
      <BarraLateral ativa="perfil" onNavigate={onNavigate} />

      <main className="flex-1 h-full overflow-y-auto">
        <div className="max-w-3xl mx-auto px-4 py-6 lg:px-10 lg:py-12 space-y-4 lg:space-y-6">
          <h1 className="text-xl lg:text-2xl font-bold text-slate-900">Meu Perfil</h1>

          <section className={`${classeCartao} p-5 lg:p-6`}>
            <div className="flex flex-wrap items-center gap-4">
              <div
                aria-hidden="true"
                className="w-16 h-16 lg:w-20 lg:h-20 shrink-0 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center text-2xl lg:text-3xl font-bold"
              >
                {nome.trim().charAt(0).toUpperCase()}
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="text-xl lg:text-2xl font-bold text-slate-900 truncate">{nome}</h2>
                <p className="text-slate-500 font-medium truncate">{username}</p>
              </div>
              <div className="flex gap-2 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => onNavigate('editar-perfil')}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-medium rounded-xl transition-colors shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-brand-500 cursor-pointer"
                >
                  <Pencil className="w-4 h-4" />
                  Editar perfil
                </button>
                <button
                  type="button"
                  onClick={handleSair}
                  disabled={saindo}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2 border border-red-200 text-red-600 hover:bg-red-50 font-medium rounded-xl transition-colors outline-none focus-visible:ring-2 focus-visible:ring-red-400 cursor-pointer disabled:opacity-50"
                >
                  <LogOut className="w-4 h-4" />
                  {saindo ? 'Saindo...' : 'Sair'}
                </button>
              </div>
            </div>

            <dl className="grid grid-cols-3 mt-5 pt-5 border-t border-slate-100 divide-x divide-slate-200">
              {estatisticas.map(({ rotulo, valor }) => (
                <div key={rotulo} className="flex flex-col-reverse items-center">
                  <dt className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">{rotulo}</dt>
                  <dd className="text-xl lg:text-2xl font-bold text-slate-900">{valor}</dd>
                </div>
              ))}
            </dl>
          </section>

          {/* No desktop as conversas ficam na barra lateral. */}
          <button
            type="button"
            onClick={() => onNavigate('conversa')}
            className={`${classeCartao} lg:hidden w-full px-5 py-4 flex items-center justify-between hover:bg-slate-50 transition-colors cursor-pointer`}
          >
            <span className="flex items-center gap-3 font-medium text-slate-700">
              <MessageSquare className="w-5 h-5 text-slate-400" />
              Conversas
            </span>
            <ChevronRight className="w-5 h-5 text-slate-300" />
          </button>

          <section className={`${classeCartao} p-5 lg:p-6`}>
            <div className="flex items-center justify-between gap-3 mb-4">
              <h3 className="text-base lg:text-lg font-bold text-slate-900">Redes sociais conectadas</h3>
              <button
                type="button"
                onClick={() => onNavigate('editar-perfil')}
                className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-semibold text-brand-600 border border-brand-200 hover:bg-brand-50 rounded-xl transition-colors outline-none focus-visible:ring-2 focus-visible:ring-brand-500 cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                Conectar rede
              </button>
            </div>

            {redes.length > 0 ? (
              <ul className="flex flex-wrap gap-3">
                {redes.map((rede) => {
                  const { nome: nomeRede, cor, Icone } = REDES_SOCIAIS[rede]
                  return (
                    <li
                      key={rede}
                      className="flex items-center gap-2.5 py-1.5 pl-1.5 pr-3 bg-slate-50 border border-slate-200 rounded-full"
                    >
                      <span className={`w-8 h-8 ${cor} rounded-full flex items-center justify-center`}>
                        <Icone className="w-5 h-5 text-white" />
                      </span>
                      <span className="text-sm font-medium text-slate-700">{nomeRede}</span>
                      <Check className="w-4 h-4 text-brand-500" strokeWidth={3} aria-label="Conectado" />
                    </li>
                  )
                })}
              </ul>
            ) : (
              <p className="rounded-xl border border-dashed border-slate-300 px-4 py-3 text-sm text-slate-500">
                Nenhuma rede social conectada ainda.
              </p>
            )}
          </section>
        </div>
      </main>
    </div>
  )
}
