import { useId, useState, type InputHTMLAttributes } from 'react'
import { ArrowLeft } from 'lucide-react'
import { BarraLateral } from '../components/BarraLateral'
import { ConectarTelegram } from '../components/ConectarTelegram'
import { ConectarSignal } from '../components/ConectarSignal'
import { redesConectadas, removerRedesConectadas } from '../redesSociais'
import { mascararData, validarDadosUsuario } from '../validarUsuario'
import {
  atualizarUsuario,
  excluirConta,
  logout,
  mensagemDeErro,
  type AtualizarUsuarioPayload,
  type Conversa,
  type Sessao,
} from '../api'

interface EditarPerfilProps {
  onNavigate: (screen: string) => void;
  sessao: Sessao;
  onSessaoAtualizada: () => Promise<void>;
  onSincronizarConversas: () => Promise<Conversa[]>;
  onContaExcluida: () => void;
}

const classeCartao = 'bg-white rounded-2xl border shadow-sm'

const REDES_EM_BREVE = [
  { nome: 'WhatsApp', sigla: 'WA', cor: 'bg-[#25D366]' },
  { nome: 'Instagram', sigla: 'IG', cor: 'bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF]' },
  { nome: 'Facebook', sigla: 'FB', cor: 'bg-[#1877F2]' },
]

function Campo({ rotulo, ...input }: { rotulo: string } & InputHTMLAttributes<HTMLInputElement>) {
  const id = useId()
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="block text-sm font-medium text-slate-700">
        {rotulo}
      </label>
      <input
        id={id}
        {...input}
        className="w-full px-4 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all text-slate-900 placeholder:text-slate-400"
      />
    </div>
  )
}

export function EditarPerfil({
  onNavigate,
  sessao,
  onSessaoAtualizada,
  onSincronizarConversas,
  onContaExcluida,
}: EditarPerfilProps) {
  const { usuario } = sessao
  const [nome, setNome] = useState(usuario.nome)
  const [username, setUsername] = useState(usuario.nome_usuario)
  const [email, setEmail] = useState(usuario.email)
  const [dataNascimento, setDataNascimento] = useState(usuario.data_nascimento)
  const [loading, setLoading] = useState(false)
  const [loadingExclusao, setLoadingExclusao] = useState(false)
  const [erro, setErro] = useState('')
  const [erroExclusao, setErroExclusao] = useState('')

  const conectadas = redesConectadas(sessao.conversas)

  const handleSalvar = async (e: React.FormEvent) => {
    e.preventDefault()
    // A senha nunca vai neste PATCH: a rota a gravaria sem criptografia.
    const dados: Required<AtualizarUsuarioPayload> = {
      nome: nome.trim(),
      nome_usuario: username.trim(),
      email: email.trim(),
      data_nascimento: dataNascimento,
    }

    const erroDados = validarDadosUsuario(dados)
    if (erroDados) {
      setErro(erroDados)
      return
    }

    setLoading(true)
    setErro('')

    try {
      await atualizarUsuario(usuario.cod, dados)
      await onSessaoAtualizada()
      onNavigate('perfil')
    } catch (err) {
      setErro(mensagemDeErro(err))
      setLoading(false)
    }
  }

  const handleExcluirConta = async () => {
    const confirmar = window.confirm('Tem certeza de que deseja excluir sua conta permanentemente?')
    if (!confirmar) return

    setLoadingExclusao(true)
    setErroExclusao('')

    try {
      await excluirConta()
      await logout()
      removerRedesConectadas(usuario.cod)
      onContaExcluida()
    } catch (err) {
      setErroExclusao(mensagemDeErro(err))
      setLoadingExclusao(false)
    }
  }

  return (
    <div className="flex h-screen w-full bg-slate-50 overflow-hidden">
      <BarraLateral ativa="perfil" onNavigate={onNavigate} />

      <div className="flex-1 flex flex-col h-full min-w-0">
        <header className="h-16 lg:h-20 px-3 lg:px-8 flex items-center gap-2 lg:gap-4 bg-white border-b border-slate-200 shrink-0">
          <button
            type="button"
            onClick={() => onNavigate('perfil')}
            aria-label="Voltar para o perfil"
            className="p-2 hover:bg-slate-100 rounded-full text-slate-600 transition-colors cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-lg lg:text-2xl font-bold text-slate-900">Editar Perfil</h1>
        </header>

        <main className="flex-1 overflow-y-auto">
          <div className="max-w-3xl mx-auto px-4 py-6 lg:px-10 lg:py-10 space-y-4 lg:space-y-6">
            <form onSubmit={handleSalvar} noValidate className={`${classeCartao} border-slate-200 p-5 lg:p-6`}>
              <h2 className="text-base lg:text-lg font-bold text-slate-900 mb-4">Informações pessoais</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Campo
                  rotulo="Nome completo"
                  type="text"
                  autoComplete="name"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  placeholder="Digite seu nome completo"
                />
                <Campo
                  rotulo="Nome de usuário"
                  type="text"
                  autoComplete="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="seu_usuario"
                />
                <Campo
                  rotulo="E-mail"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu@email.com"
                />
                <Campo
                  rotulo="Data de nascimento"
                  type="text"
                  inputMode="numeric"
                  value={dataNascimento}
                  onChange={(e) => setDataNascimento(mascararData(e.target.value))}
                  placeholder="DD/MM/AAAA"
                  maxLength={10}
                />
              </div>

              {erro && (
                <div role="alert" className="mt-4 p-3 text-sm text-red-600 bg-red-50 rounded-xl">
                  {erro}
                </div>
              )}

              <div className="mt-5 flex justify-end">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto px-6 py-2.5 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-xl transition-colors shadow-sm cursor-pointer disabled:opacity-50"
                >
                  {loading ? 'Salvando...' : 'Salvar alterações'}
                </button>
              </div>
            </form>

            <section className={`${classeCartao} border-slate-200 overflow-hidden`}>
              <div className="px-5 pt-5 lg:px-6 lg:pt-6">
                <h2 className="text-base lg:text-lg font-bold text-slate-900">Redes sociais</h2>
                <p className="text-sm text-slate-500 mt-1">
                  Conecte suas contas para centralizar as conversas em um só lugar.
                </p>
              </div>
              <div className="divide-y divide-slate-100">
                <ConectarTelegram
                  codUsuario={usuario.cod}
                  conectado={conectadas.includes('telegram')}
                  onConectado={onSincronizarConversas}
                />
                <ConectarSignal
                  codUsuario={usuario.cod}
                  conectado={conectadas.includes('signal')}
                  onSincronizarConversas={onSincronizarConversas}
                />
                {REDES_EM_BREVE.map((rede) => (
                  <div key={rede.nome} className="px-5 py-4 lg:px-6 lg:py-5 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3 opacity-60">
                      <div className={`w-10 h-10 ${rede.cor} rounded-full flex items-center justify-center shrink-0`}>
                        <span className="text-white font-bold text-xs">{rede.sigla}</span>
                      </div>
                      <span className="font-medium text-slate-900">{rede.nome}</span>
                    </div>
                    <span className="px-2.5 py-1 text-xs font-semibold text-slate-500 bg-slate-100 rounded-full shrink-0">
                      Em breve
                    </span>
                  </div>
                ))}
              </div>
            </section>

            <section className={`${classeCartao} border-red-100 p-5 lg:p-6`}>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex-1">
                  <h2 className="text-base lg:text-lg font-bold text-red-600">Zona de perigo</h2>
                  <p className="text-sm text-slate-500 mt-1">
                    Ao excluir sua conta, todos os seus dados e histórico de conversas serão permanentemente removidos.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleExcluirConta}
                  disabled={loadingExclusao}
                  className="shrink-0 px-5 py-2.5 border border-red-200 text-red-600 font-semibold rounded-xl hover:bg-red-50 transition-colors cursor-pointer disabled:opacity-50"
                >
                  {loadingExclusao ? 'Excluindo...' : 'Excluir conta'}
                </button>
              </div>
              {erroExclusao && (
                <div role="alert" className="mt-4 p-3 text-sm text-red-600 bg-red-50 rounded-xl">
                  {erroExclusao}
                </div>
              )}
            </section>
          </div>
        </main>
      </div>
    </div>
  )
}
