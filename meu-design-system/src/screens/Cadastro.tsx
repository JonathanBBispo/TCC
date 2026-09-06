import { ArrowLeft, Camera, CheckCircle2 } from 'lucide-react'

interface CadastroProps {
  onNavigate: (screen: string) => void;
}

export function Cadastro({ onNavigate }: CadastroProps) {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] bg-white overflow-hidden">
      <div className="hidden lg:flex w-1/2 bg-slate-900 relative flex-col justify-center items-center p-12 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-500 rounded-full mix-blend-overlay filter blur-[100px]"></div>
        </div>

        <div className="relative z-10 max-w-md text-white">
          <h1 className="text-5xl font-bold mb-8 leading-tight">
            Junte-se a milhares de profissionais
          </h1>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-brand-400 shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-1">
                  Centralize todas as redes sociais
                </h3>
                <p className="text-slate-400">
                  Gerencie WhatsApp, Instagram, Facebook e muito mais em um
                  único painel.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-brand-400 shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-1">
                  Responda mais rápido
                </h3>
                <p className="text-slate-400">
                  Aumente sua produtividade e melhore o tempo de resposta aos
                  seus clientes.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-brand-400 shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-1">
                  Não perca nenhum cliente
                </h3>
                <p className="text-slate-400">
                  Tenha o histórico completo de todas as interações,
                  independente do canal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex flex-col p-0 lg:p-12 overflow-y-auto">
        <div className="px-4 py-4 flex items-center sticky top-0 bg-white/80 backdrop-blur-md z-10 lg:hidden">
          <button 
            onClick={() => onNavigate('login')}
            className="p-2 hover:bg-slate-100 rounded-full text-slate-600 transition-colors outline-none">
            <ArrowLeft className="w-6 h-6" />
          </button>
        </div>

        <div className="w-full max-w-xl mx-auto px-6 pb-8 lg:px-0 lg:pb-0">
          <button 
            onClick={() => onNavigate('login')}
            className="hidden lg:inline-flex p-2 -ml-2 mb-6 hover:bg-slate-100 rounded-full text-slate-600 transition-colors outline-none cursor-pointer">
            <ArrowLeft className="w-6 h-6" />
          </button>

          <div className="mb-8 lg:mb-10">
            <h1 className="text-2xl lg:text-3xl font-bold text-slate-900">
              Crie sua conta
            </h1>
            <p className="text-slate-500 mt-1 lg:mt-2">
              Preencha os dados para começar
            </p>
          </div>

          <div className="flex justify-center lg:justify-start mb-8 lg:mb-10">
            <div className="relative">
              <div className="w-24 h-24 bg-slate-100 rounded-full border-2 border-dashed border-slate-300 flex items-center justify-center text-slate-400 hover:bg-slate-50 transition-colors cursor-pointer">
                <Camera className="w-8 h-8" />
              </div>
              <button className="absolute bottom-0 right-0 w-8 h-8 bg-brand-500 rounded-full border-2 border-white flex items-center justify-center text-white shadow-sm hover:bg-brand-600 transition-colors">
                <span className="text-lg leading-none mb-0.5">+</span>
              </button>
            </div>
          </div>

          <div className="space-y-4 lg:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
              <div className="space-y-1.5 lg:space-y-2">
                <label className="block text-sm font-medium text-slate-700">
                  Nome completo
                </label>
                <input
                  type="text"
                  placeholder="Seu nome"
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all text-slate-900 placeholder:text-slate-400"
                />
              </div>

              <div className="space-y-1.5 lg:space-y-2">
                <label className="block text-sm font-medium text-slate-700">
                  E-mail
                </label>
                <input
                  type="email"
                  placeholder="seu@email.com"
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all text-slate-900 placeholder:text-slate-400"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
              <div className="space-y-1.5 lg:space-y-2">
                <label className="block text-sm font-medium text-slate-700">
                  Telefone
                </label>
                <input
                  type="tel"
                  placeholder="(00) 00000-0000"
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all text-slate-900 placeholder:text-slate-400"
                />
              </div>
              <div className="hidden md:block"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
              <div className="space-y-1.5 lg:space-y-2">
                <label className="block text-sm font-medium text-slate-700">
                  Senha
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all text-slate-900 placeholder:text-slate-400"
                />
              </div>

              <div className="space-y-1.5 lg:space-y-2">
                <label className="block text-sm font-medium text-slate-700">
                  Confirmar senha
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all text-slate-900 placeholder:text-slate-400"
                />
              </div>
            </div>

            <div className="flex items-start gap-3 pt-2 lg:pt-4">
              <input
                type="checkbox"
                id="terms"
                className="mt-1 w-4 h-4 lg:w-5 lg:h-5 text-brand-500 border-slate-300 rounded focus:ring-brand-500 cursor-pointer"
              />
              <label
                htmlFor="terms"
                className="text-sm text-slate-600 leading-tight lg:leading-relaxed cursor-pointer"
              >
                Eu concordo com os{' '}
                <a
                  href="#"
                  className="text-brand-600 font-medium hover:underline"
                >
                  Termos de Uso
                </a>{' '}
                e{' '}
                <a
                  href="#"
                  className="text-brand-600 font-medium hover:underline"
                >
                  Política de Privacidade
                </a>
              </label>
            </div>

            <button 
              onClick={() => onNavigate('conversa')}
              className="w-full py-3.5 lg:py-4 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-xl transition-colors shadow-sm mt-6 lg:mt-8 lg:text-lg cursor-pointer">
              Criar Conta
            </button>
          </div>

          <div className="mt-8 lg:mt-10 text-center">
            <p className="text-slate-600 text-sm lg:text-base">
              Já tem conta?{' '}
              <button
                onClick={() => onNavigate('login')}
                className="text-brand-600 font-semibold hover:underline outline-none bg-transparent border-none p-0 cursor-pointer"
              >
                Entrar
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}