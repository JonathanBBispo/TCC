// import React from 'react'
import {
  Edit2,
  MapPin,
  Settings,
  Bell,
  Shield,
  HelpCircle,
  LogOut,
  ChevronRight,
  MessageSquare,
  Users,
  BarChart2,
} from 'lucide-react'
export function Perfil() {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-slate-50">
      {/* MOBILE LAYOUT */}
      <div className="flex flex-col h-full lg:hidden">
        {/* Header */}
        <div className="px-4 py-4 flex items-center justify-between bg-white sticky top-0 z-10 border-b border-slate-100">
          <div className="w-10"></div> {/* Spacer */}
          <h1 className="text-lg font-bold text-slate-900">Meu Perfil</h1>
          <button className="p-2 hover:bg-slate-100 rounded-full text-slate-600 transition-colors">
            <Edit2 className="w-5 h-5" />
          </button>
        </div>

        {/* Profile Info */}
        <div className="bg-white px-6 py-8 flex flex-col items-center border-b border-slate-200">
          <div className="relative mb-4">
            <div className="absolute inset-0 bg-brand-100 rounded-full scale-110"></div>
            <img
              src="https://i.pravatar.cc/150?img=32"
              alt="Avatar"
              className="relative w-24 h-24 rounded-full object-cover border-4 border-white shadow-sm"
            />
          </div>

          <h2 className="text-2xl font-bold text-slate-900">Ana Clara</h2>
          <p className="text-slate-500 font-medium">@anaclara</p>

          <div className="flex items-center gap-1.5 text-slate-500 mt-2 text-sm">
            <MapPin className="w-4 h-4" />
            <span>São Paulo, SP</span>
          </div>

          <p className="text-center text-slate-600 mt-4 text-sm max-w-[280px]">
            Gerenciando as redes sociais da minha loja. Adoro café e design!
            ☕️✨
          </p>

          {/* Stats */}
          <div className="flex w-full justify-between mt-8 pt-6 border-t border-slate-100">
            <div className="text-center flex-1">
              <p className="text-xl font-bold text-slate-900">1.2k</p>
              <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">
                Conversas
              </p>
            </div>
            <div className="w-px bg-slate-200"></div>
            <div className="text-center flex-1">
              <p className="text-xl font-bold text-slate-900">850</p>
              <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">
                Contatos
              </p>
            </div>
            <div className="w-px bg-slate-200"></div>
            <div className="text-center flex-1">
              <p className="text-xl font-bold text-slate-900">3</p>
              <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">
                Redes
              </p>
            </div>
          </div>
        </div>

        {/* Connected Networks */}
        <div className="px-6 py-6">
          <h3 className="text-sm font-semibold text-slate-900 mb-4">
            Redes Sociais Conectadas
          </h3>
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
            <div className="flex flex-col items-center gap-2 min-w-[64px]">
              <div className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-sm">
                <svg
                  className="w-7 h-7 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
              </div>
              <span className="text-xs font-medium text-slate-700">
                WhatsApp
              </span>
            </div>
            <div className="flex flex-col items-center gap-2 min-w-[64px]">
              <div className="w-14 h-14 bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] rounded-full flex items-center justify-center shadow-sm">
                <svg
                  className="w-7 h-7 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </div>
              <span className="text-xs font-medium text-slate-700">
                Instagram
              </span>
            </div>
            <div className="flex flex-col items-center gap-2 min-w-[64px]">
              <div className="w-14 h-14 bg-[#0088CC] rounded-full flex items-center justify-center shadow-sm">
                <svg
                  className="w-7 h-7 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
              </div>
              <span className="text-xs font-medium text-slate-700">
                Telegram
              </span>
            </div>
            <div className="flex flex-col items-center gap-2 min-w-[64px]">
              <div className="w-14 h-14 bg-slate-200 rounded-full flex items-center justify-center border border-dashed border-slate-300">
                <span className="text-2xl text-slate-400">+</span>
              </div>
              <span className="text-xs font-medium text-slate-500">
                Conectar
              </span>
            </div>
          </div>
        </div>

        {/* Menu List */}
        <div className="bg-white border-y border-slate-200 mb-8">
          <button className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-50 transition-colors border-b border-slate-100">
            <div className="flex items-center gap-3 text-slate-700">
              <Settings className="w-5 h-5 text-slate-400" />
              <span className="font-medium">Configurações de conta</span>
            </div>
            <ChevronRight className="w-5 h-5 text-slate-300" />
          </button>
          <button className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-50 transition-colors border-b border-slate-100">
            <div className="flex items-center gap-3 text-slate-700">
              <Bell className="w-5 h-5 text-slate-400" />
              <span className="font-medium">Notificações</span>
            </div>
            <ChevronRight className="w-5 h-5 text-slate-300" />
          </button>
          <button className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-50 transition-colors border-b border-slate-100">
            <div className="flex items-center gap-3 text-slate-700">
              <Shield className="w-5 h-5 text-slate-400" />
              <span className="font-medium">Privacidade</span>
            </div>
            <ChevronRight className="w-5 h-5 text-slate-300" />
          </button>
          <button className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-50 transition-colors border-b border-slate-100">
            <div className="flex items-center gap-3 text-slate-700">
              <HelpCircle className="w-5 h-5 text-slate-400" />
              <span className="font-medium">Ajuda</span>
            </div>
            <ChevronRight className="w-5 h-5 text-slate-300" />
          </button>
          <button className="w-full px-6 py-4 flex items-center justify-between hover:bg-red-50 transition-colors">
            <div className="flex items-center gap-3 text-red-600">
              <LogOut className="w-5 h-5" />
              <span className="font-medium">Sair</span>
            </div>
          </button>
        </div>
      </div>

      {/* DESKTOP LAYOUT */}
      <div className="hidden lg:flex h-full overflow-hidden">
        {/* LEFT SIDEBAR */}
        <div className="w-20 bg-slate-900 flex flex-col items-center py-6 border-r border-slate-800 shrink-0 z-20">
          <div className="w-10 h-10 bg-brand-500 rounded-xl flex items-center justify-center mb-8 shadow-sm">
            <MessageSquare className="w-6 h-6 text-white" />
          </div>

          <div className="flex flex-col gap-4 flex-1 w-full px-3">
            <button className="w-full aspect-square rounded-xl flex items-center justify-center text-slate-400 hover:bg-slate-800 hover:text-white transition-colors">
              <MessageSquare className="w-6 h-6" />
            </button>
            <button className="w-full aspect-square rounded-xl flex items-center justify-center text-slate-400 hover:bg-slate-800 hover:text-white transition-colors">
              <Users className="w-6 h-6" />
            </button>
            <button className="w-full aspect-square rounded-xl flex items-center justify-center text-slate-400 hover:bg-slate-800 hover:text-white transition-colors">
              <BarChart2 className="w-6 h-6" />
            </button>
          </div>

          <div className="flex flex-col gap-4 w-full px-3 mt-auto">
            <button className="w-full aspect-square rounded-xl flex items-center justify-center text-slate-400 hover:bg-slate-800 hover:text-white transition-colors">
              <Settings className="w-6 h-6" />
            </button>
            <button className="w-full aspect-square rounded-xl flex items-center justify-center bg-slate-800 border-2 border-brand-500 transition-colors p-0 overflow-hidden">
              <img
                src="https://i.pravatar.cc/150?img=32"
                alt="Avatar"
                className="w-full h-full object-cover"
              />
            </button>
          </div>
        </div>

        {/* MIDDLE COLUMN - Profile Info */}
        <div className="w-96 bg-white border-r border-slate-200 flex flex-col shrink-0 z-10 overflow-y-auto">
          <div className="p-8 flex flex-col items-center">
            <h1 className="text-2xl font-bold text-slate-900 w-full mb-8">
              Meu Perfil
            </h1>

            <div className="relative mb-6">
              <div className="absolute inset-0 bg-brand-100 rounded-full scale-110"></div>
              <img
                src="https://i.pravatar.cc/150?img=32"
                alt="Avatar"
                className="relative w-32 h-32 rounded-full object-cover border-4 border-white shadow-sm"
              />
            </div>

            <h2 className="text-2xl font-bold text-slate-900">Ana Clara</h2>
            <p className="text-slate-500 font-medium text-lg">@anaclara</p>

            <div className="flex items-center gap-2 text-slate-500 mt-3">
              <MapPin className="w-5 h-5" />
              <span>São Paulo, SP</span>
            </div>

            <p className="text-center text-slate-600 mt-6 leading-relaxed">
              Gerenciando as redes sociais da minha loja. Adoro café e design!
              ☕️✨
            </p>

            {/* Stats */}
            <div className="flex w-full justify-between mt-10 pt-8 border-t border-slate-100">
              <div className="text-center flex-1">
                <p className="text-2xl font-bold text-slate-900">1.2k</p>
                <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">
                  Conversas
                </p>
              </div>
              <div className="w-px bg-slate-200"></div>
              <div className="text-center flex-1">
                <p className="text-2xl font-bold text-slate-900">850</p>
                <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">
                  Contatos
                </p>
              </div>
              <div className="w-px bg-slate-200"></div>
              <div className="text-center flex-1">
                <p className="text-2xl font-bold text-slate-900">3</p>
                <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">
                  Redes
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT MAIN AREA */}
        <div className="flex-1 overflow-y-auto p-12 relative">
          <div className="max-w-4xl mx-auto">
            {/* Top Actions */}
            <div className="flex justify-end mb-8">
              <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-medium rounded-xl transition-colors shadow-sm">
                <Edit2 className="w-4 h-4" />
                Editar Perfil
              </button>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
              {/* Connected Networks Card */}
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
                <h3 className="text-lg font-bold text-slate-900 mb-6">
                  Redes Sociais Conectadas
                </h3>

                <div className="grid grid-cols-3 gap-6">
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-16 h-16 bg-[#25D366] rounded-2xl flex items-center justify-center shadow-sm relative">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                      </svg>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-brand-500 rounded-full border-2 border-white flex items-center justify-center">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={3}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                    </div>
                    <span className="text-sm font-medium text-slate-700">
                      WhatsApp
                    </span>
                  </div>
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-16 h-16 bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] rounded-2xl flex items-center justify-center shadow-sm relative">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                      </svg>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-brand-500 rounded-full border-2 border-white flex items-center justify-center">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={3}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                    </div>
                    <span className="text-sm font-medium text-slate-700">
                      Instagram
                    </span>
                  </div>
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-16 h-16 bg-[#0088CC] rounded-2xl flex items-center justify-center shadow-sm relative">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                      </svg>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-brand-500 rounded-full border-2 border-white flex items-center justify-center">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={3}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                    </div>
                    <span className="text-sm font-medium text-slate-700">
                      Telegram
                    </span>
                  </div>
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center border-2 border-dashed border-slate-300 hover:bg-slate-200 transition-colors cursor-pointer">
                      <span className="text-3xl text-slate-400">+</span>
                    </div>
                    <span className="text-sm font-medium text-slate-500">
                      Conectar
                    </span>
                  </div>
                </div>
              </div>

              {/* Menu Card */}
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-slate-100">
                  <h3 className="text-lg font-bold text-slate-900">
                    Conta e Preferências
                  </h3>
                </div>
                <div className="flex flex-col">
                  <button className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-50 transition-colors border-b border-slate-100">
                    <div className="flex items-center gap-4 text-slate-700">
                      <Settings className="w-5 h-5 text-slate-400" />
                      <span className="font-medium">
                        Configurações de conta
                      </span>
                    </div>
                    <ChevronRight className="w-5 h-5 text-slate-300" />
                  </button>
                  <button className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-50 transition-colors border-b border-slate-100">
                    <div className="flex items-center gap-4 text-slate-700">
                      <Bell className="w-5 h-5 text-slate-400" />
                      <span className="font-medium">Notificações</span>
                    </div>
                    <ChevronRight className="w-5 h-5 text-slate-300" />
                  </button>
                  <button className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-50 transition-colors border-b border-slate-100">
                    <div className="flex items-center gap-4 text-slate-700">
                      <Shield className="w-5 h-5 text-slate-400" />
                      <span className="font-medium">Privacidade</span>
                    </div>
                    <ChevronRight className="w-5 h-5 text-slate-300" />
                  </button>
                  <button className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-50 transition-colors border-b border-slate-100">
                    <div className="flex items-center gap-4 text-slate-700">
                      <HelpCircle className="w-5 h-5 text-slate-400" />
                      <span className="font-medium">Ajuda</span>
                    </div>
                    <ChevronRight className="w-5 h-5 text-slate-300" />
                  </button>
                  <button className="w-full px-6 py-4 flex items-center justify-between hover:bg-red-50 transition-colors">
                    <div className="flex items-center gap-4 text-red-600">
                      <LogOut className="w-5 h-5" />
                      <span className="font-medium">Sair</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
