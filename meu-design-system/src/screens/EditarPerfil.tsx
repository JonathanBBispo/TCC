import { useState } from 'react'
import {
  ArrowLeft,
  Camera,
  Lock,
  Eye,
  EyeOff,
  User,
  MessageSquare,
  Users,
  BarChart2,
  Settings,
} from 'lucide-react'

interface EditarPerfilProps {
  onNavigate: (screen: string) => void;
}

export function EditarPerfil({ onNavigate }: EditarPerfilProps) {
  const [namePublic, setNamePublic] = useState(true)
  const [whatsappConnected, setWhatsappConnected] = useState(true)
  const [instagramConnected, setInstagramConnected] = useState(true)
  const [facebookConnected, setFacebookConnected] = useState(false)

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-slate-50">
      {/* MOBILE LAYOUT */}
      <div className="flex flex-col h-full lg:hidden">
        {/* Header */}
        <div className="px-4 py-4 flex items-center justify-between bg-white sticky top-0 z-10 border-b border-slate-100">
          <button 
            onClick={() => onNavigate('perfil')}
            className="p-2 hover:bg-slate-100 rounded-full text-slate-600 transition-colors cursor-pointer outline-none"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-lg font-bold text-slate-900">Editar Perfil</h1>
          <button 
            onClick={() => onNavigate('perfil')}
            className="text-brand-600 font-semibold hover:text-brand-700 px-2 cursor-pointer"
          >
            Salvar
          </button>
        </div>

        <div className="p-6 space-y-8">
          {/* Avatar Edit - Substituído por ícone de usuário padrão */}
          <div className="flex flex-col items-center">
            <div className="relative mb-3">
              <div className="w-24 h-24 rounded-full bg-slate-200 border-4 border-white shadow-sm flex items-center justify-center text-slate-400">
                <User className="w-12 h-12" />
              </div>
              <button className="absolute bottom-0 right-0 w-8 h-8 bg-brand-500 rounded-full border-2 border-white flex items-center justify-center text-white shadow-sm hover:bg-brand-600 transition-colors cursor-pointer">
                <Camera className="w-4 h-4" />
              </button>
            </div>
            <button className="text-brand-600 text-sm font-medium hover:underline cursor-pointer">
              Alterar foto
            </button>
          </div>

          {/* Form Fields (Sem telefone e sem localização) */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="space-y-1.5">
              <label className="block text-sm font-medium text-slate-700">
                Nome completo
              </label>
              <input
                type="text"
                defaultValue="Ana Clara"
                className="w-full px-4 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all text-slate-900"
              />
            </div>
            <div className="space-y-1.5">
              <label className="block text-sm font-medium text-slate-700">
                Nome de usuário
              </label>
              <input
                type="text"
                defaultValue="anaclara"
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all text-slate-900"
              />
            </div>
            <div className="space-y-1.5">
              <label className="block text-sm font-medium text-slate-700">
                E-mail
              </label>
              <input
                type="email"
                defaultValue="ana.clara@email.com"
                className="w-full px-4 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all text-slate-900"
              />
            </div>
            <div className="space-y-1.5">
              <label className="block text-sm font-medium text-slate-700">
                Bio
              </label>
              <textarea
                rows={3}
                defaultValue="Gerenciando as redes sociais da minha loja. Adoro café e design! ☕️✨"
                className="w-full px-4 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all text-slate-900 resize-none"
              ></textarea>
            </div>
          </div>

          {/* Privacy Section (Apenas Nome) */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900 mb-3 px-1 flex items-center gap-2">
              <Lock className="w-4 h-4 text-slate-500" />
              Privacidade
            </h3>
            <p className="text-xs text-slate-500 mb-3 px-1">
              Escolha quais informações ficam visíveis para outros usuários.
            </p>
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-50 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-brand-600" />
                  </div>
                  <div>
                    <span className="font-medium text-slate-900 block">
                      Nome
                    </span>
                    <span className="text-xs text-slate-500 flex items-center gap-1">
                      {namePublic ? (
                        <>
                          <Eye className="w-3 h-3" /> Público
                        </>
                      ) : (
                        <>
                          <EyeOff className="w-3 h-3" /> Privado
                        </>
                      )}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setNamePublic(!namePublic)}
                  className={`w-11 h-6 rounded-full relative cursor-pointer transition-colors ${namePublic ? 'bg-brand-500' : 'bg-slate-300'}`}
                >
                  <div
                    className={`w-5 h-5 bg-white rounded-full absolute top-0.5 shadow-sm transition-all ${namePublic ? 'right-0.5' : 'left-0.5'}`}
                  ></div>
                </button>
              </div>
            </div>
          </div>

          {/* Social Networks (Apenas WhatsApp, Instagram e Facebook) */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900 mb-3 px-1">
              Redes Sociais
            </h3>
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden divide-y divide-slate-100">
              {/* WhatsApp */}
              <div className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#25D366] rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                    </svg>
                  </div>
                  <span className="font-medium text-slate-900">WhatsApp</span>
                </div>
                <div 
                  onClick={() => setWhatsappConnected(!whatsappConnected)}
                  className={`w-11 h-6 rounded-full relative cursor-pointer transition-colors ${whatsappConnected ? 'bg-brand-500' : 'bg-slate-300'}`}
                >
                  <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 shadow-sm transition-all ${whatsappConnected ? 'right-0.5' : 'left-0.5'}`}></div>
                </div>
              </div>

              {/* Instagram */}
              <div className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </div>
                  <span className="font-medium text-slate-900">Instagram</span>
                </div>
                <div 
                  onClick={() => setInstagramConnected(!instagramConnected)}
                  className={`w-11 h-6 rounded-full relative cursor-pointer transition-colors ${instagramConnected ? 'bg-brand-500' : 'bg-slate-300'}`}
                >
                  <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 shadow-sm transition-all ${instagramConnected ? 'right-0.5' : 'left-0.5'}`}></div>
                </div>
              </div>

              {/* Facebook */}
              <div className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#1877F2] rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </div>
                  <span className="font-medium text-slate-900">Facebook</span>
                </div>
                <div 
                  onClick={() => setFacebookConnected(!facebookConnected)}
                  className={`w-11 h-6 rounded-full relative cursor-pointer transition-colors ${facebookConnected ? 'bg-brand-500' : 'bg-slate-300'}`}
                >
                  <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 shadow-sm transition-all ${facebookConnected ? 'right-0.5' : 'left-0.5'}`}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* DESKTOP LAYOUT */}
      <div className="hidden lg:flex h-full overflow-hidden w-full">
        {/* LEFT SIDEBAR */}
        <div className="w-20 bg-slate-900 flex flex-col items-center py-6 border-r border-slate-800 shrink-0 z-20">
          <div className="flex flex-col gap-4 flex-1 w-full px-3">
            <button 
              onClick={() => onNavigate('conversa')}
              className="w-full aspect-square rounded-xl flex items-center justify-center text-slate-400 hover:bg-slate-800 hover:text-white transition-colors cursor-pointer"
            >
              <MessageSquare className="w-6 h-6" />
            </button>
            <button className="w-full aspect-square rounded-xl flex items-center justify-center text-slate-400 hover:bg-slate-800 hover:text-white transition-colors cursor-pointer">
              <Users className="w-6 h-6" />
            </button>
            <button className="w-full aspect-square rounded-xl flex items-center justify-center text-slate-400 hover:bg-slate-800 hover:text-white transition-colors cursor-pointer">
              <BarChart2 className="w-6 h-6" />
            </button>
          </div>

          <div className="flex flex-col gap-4 w-full px-3 mt-auto">
            <button className="w-full aspect-square rounded-xl flex items-center justify-center text-slate-400 hover:bg-slate-800 hover:text-white transition-colors cursor-pointer">
              <Settings className="w-6 h-6" />
            </button>
            <button 
              onClick={() => onNavigate('perfil')}
              className="w-full aspect-square rounded-xl flex items-center justify-center bg-slate-800 border-2 border-brand-500 transition-colors p-0 overflow-hidden cursor-pointer"
            >
              <div className="w-full h-full bg-slate-700 flex items-center justify-center text-slate-300">
                <User className="w-5 h-5" />
              </div>
            </button>
          </div>
        </div>

        {/* MAIN AREA */}
        <div className="flex-1 flex flex-col overflow-hidden h-full">
          {/* Header */}
          <div className="h-20 px-8 flex items-center justify-between bg-white border-b border-slate-200 shrink-0">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => onNavigate('perfil')}
                className="p-2 hover:bg-slate-100 rounded-full text-slate-600 transition-colors cursor-pointer outline-none"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>
              <h1 className="text-2xl font-bold text-slate-900">
                Editar Perfil
              </h1>
            </div>
            <button 
              onClick={() => onNavigate('perfil')}
              className="px-6 py-2.5 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-xl transition-colors shadow-sm cursor-pointer"
            >
              Salvar
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-8 lg:p-12">
            <div className="max-w-4xl mx-auto space-y-8">
              {/* Avatar Edit - Substituído por ícone de usuário padrão */}
              <div className="flex flex-col items-center mb-12">
                <div className="relative mb-4">
                  <div className="w-32 h-32 rounded-full bg-slate-200 border-4 border-white shadow-md flex items-center justify-center text-slate-400">
                    <User className="w-16 h-16" />
                  </div>
                  <button className="absolute bottom-0 right-0 w-10 h-10 bg-brand-500 rounded-full border-2 border-white flex items-center justify-center text-white shadow-sm hover:bg-brand-600 transition-colors cursor-pointer">
                    <Camera className="w-5 h-5" />
                  </button>
                </div>
                <button className="text-brand-600 font-medium hover:underline cursor-pointer">
                  Alterar foto
                </button>
              </div>

              {/* Form Fields (Sem telefone e sem localização) */}
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-6">
                  Informações Pessoais
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-slate-700">
                      Nome completo
                    </label>
                    <input
                      type="text"
                      defaultValue="Ana Clara"
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all text-slate-900"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-slate-700">
                      Nome de usuário
                    </label>
                    <input
                      type="text"
                      defaultValue="anaclara"
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all text-slate-900"
                    />
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  <label className="block text-sm font-medium text-slate-700">
                    E-mail
                  </label>
                  <input
                    type="email"
                    defaultValue="ana.clara@email.com"
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all text-slate-900"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-700">
                    Bio
                  </label>
                  <textarea
                    rows={4}
                    defaultValue="Gerenciando as redes sociais da minha loja. Adoro café e design! ☕️✨"
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all text-slate-900 resize-none"
                  ></textarea>
                </div>
              </div>

              {/* Privacy (Apenas Nome) */}
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-slate-100">
                  <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                    <Lock className="w-5 h-5 text-slate-500" />
                    Privacidade
                  </h3>
                  <p className="text-sm text-slate-500 mt-1">
                    Escolha quais informações ficam visíveis para outros
                    usuários.
                  </p>
                </div>
                <div className="divide-y divide-slate-100">
                  <div className="p-6 flex items-center justify-between hover:bg-slate-50 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center">
                        <User className="w-6 h-6 text-brand-600" />
                      </div>
                      <div>
                        <span className="font-bold text-slate-900 block">
                          Nome
                        </span>
                        <span className="text-sm text-slate-500 flex items-center gap-1.5 mt-0.5">
                          {namePublic ? (
                            <>
                              <Eye className="w-3.5 h-3.5" /> Visível para todos
                            </>
                          ) : (
                            <>
                              <EyeOff className="w-3.5 h-3.5" /> Apenas você
                            </>
                          )}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => setNamePublic(!namePublic)}
                      className={`w-12 h-7 rounded-full relative cursor-pointer shadow-inner transition-colors ${namePublic ? 'bg-brand-500' : 'bg-slate-300'}`}
                    >
                      <div
                        className={`w-6 h-6 bg-white rounded-full absolute top-0.5 shadow-sm transition-all ${namePublic ? 'right-0.5' : 'left-0.5'}`}
                      ></div>
                    </button>
                  </div>
                </div>
              </div>

              {/* Social Networks (WhatsApp, Instagram, Facebook) */}
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-slate-100">
                  <h3 className="text-lg font-bold text-slate-900">
                    Redes Sociais
                  </h3>
                  <p className="text-sm text-slate-500 mt-1">
                    Conecte suas contas para receber mensagens no CommuniHub.
                  </p>
                </div>

                <div className="divide-y divide-slate-100">
                  {/* WhatsApp */}
                  <div className="p-6 flex items-center justify-between hover:bg-slate-50 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#25D366] rounded-xl flex items-center justify-center shadow-sm">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                        </svg>
                      </div>
                      <div>
                        <span className="font-bold text-slate-900 block">
                          WhatsApp
                        </span>
                        <span className="text-sm text-slate-500">
                          +55 11 98765-4321
                        </span>
                      </div>
                    </div>
                    <div 
                      onClick={() => setWhatsappConnected(!whatsappConnected)}
                      className={`w-12 h-7 rounded-full relative cursor-pointer shadow-inner transition-colors ${whatsappConnected ? 'bg-brand-500' : 'bg-slate-300'}`}
                    >
                      <div className={`w-6 h-6 bg-white rounded-full absolute top-0.5 shadow-sm transition-all ${whatsappConnected ? 'right-0.5' : 'left-0.5'}`}></div>
                    </div>
                  </div>

                  {/* Instagram */}
                  <div className="p-6 flex items-center justify-between hover:bg-slate-50 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] rounded-xl flex items-center justify-center shadow-sm">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                        </svg>
                      </div>
                      <div>
                        <span className="font-bold text-slate-900 block">
                          Instagram
                        </span>
                        <span className="text-sm text-slate-500">
                          @anaclara_loja
                        </span>
                      </div>
                    </div>
                    <div 
                      onClick={() => setInstagramConnected(!instagramConnected)}
                      className={`w-12 h-7 rounded-full relative cursor-pointer shadow-inner transition-colors ${instagramConnected ? 'bg-brand-500' : 'bg-slate-300'}`}
                    >
                      <div className={`w-6 h-6 bg-white rounded-full absolute top-0.5 shadow-sm transition-all ${instagramConnected ? 'right-0.5' : 'left-0.5'}`}></div>
                    </div>
                  </div>

                  {/* Facebook */}
                  <div className="p-6 flex items-center justify-between hover:bg-slate-50 transition-colors">
                    <div className="flex items-center gap-4 opacity-60">
                      <div className="w-12 h-12 bg-[#1877F2] rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                      </div>
                      <span className="font-bold text-slate-900">Facebook</span>
                    </div>
                    <button className="px-5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium rounded-xl transition-colors cursor-pointer">
                      Conectar
                    </button>
                  </div>
                </div>
              </div>

              {/* Danger Zone */}
              <div className="bg-white p-8 rounded-2xl border border-red-100 shadow-sm">
                <h3 className="text-lg font-bold text-red-600 mb-2">
                  Zona de Perigo
                </h3>
                <p className="text-sm text-slate-500 mb-6">
                  Ao excluir sua conta, todos os seus dados e histórico de
                  conversas serão permanentemente removidos. Esta ação não pode
                  ser desfeita.
                </p>
                <button className="px-6 py-3 border border-red-200 text-red-600 font-semibold rounded-xl hover:bg-red-50 transition-colors cursor-pointer">
                  Excluir Conta
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}