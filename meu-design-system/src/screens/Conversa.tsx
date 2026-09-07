import { useState } from 'react'
import {
  ArrowLeft,
  Phone,
  Video,
  MoreVertical,
  Paperclip,
  Smile,
  Mic,
  Send,
  CheckCheck,
  Image as ImageIcon,
  MessageSquare,
  Users,
  Settings,
  Search,
  ListOrdered,
  User,
} from 'lucide-react'

interface ConversaProps {
  onNavigate: (screen: string) => void;
}

export function Conversa({ onNavigate }: ConversaProps) {
  const [message, setMessage] = useState('')

  return (
    <div className="h-screen w-full bg-[#E5DDD5] overflow-hidden">
      {/* MOBILE LAYOUT */}
      <div className="flex flex-col h-full lg:hidden relative overflow-hidden">
        {/* Background Pattern (Subtle) */} 
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage:
              'url("https://www.transparenttextures.com/patterns/cubes.png")',
          }}
        ></div>

        {/* Header */}
        <div className="px-3 py-3 flex items-center justify-between bg-white sticky top-0 z-10 shadow-sm">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => onNavigate('perfil')}
              className="p-1.5 -ml-1.5 hover:bg-slate-100 rounded-full text-slate-600 transition-colors cursor-pointer outline-none"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>

            <div className="flex items-center gap-3 cursor-pointer">
              <div className="relative">
                <img
                  src="https://i.pravatar.cc/150?img=32"
                  alt="Avatar"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-[#25D366] rounded-full border-2 border-white flex items-center justify-center">
                  <svg
                    className="w-2.5 h-2.5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                  </svg>
                </div>
              </div>
              <div>
                <h2 className="text-base font-semibold text-slate-900 leading-tight">
                  Ana Clara
                </h2>
                <p className="text-xs text-brand-600 font-medium">online</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1 text-slate-500">
            <button className="p-2 hover:bg-slate-100 rounded-full transition-colors cursor-pointer">
              <Video className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-slate-100 rounded-full transition-colors cursor-pointer">
              <Phone className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-slate-100 rounded-full transition-colors cursor-pointer">
              <MoreVertical className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 relative z-0">
          <div className="flex justify-center my-4">
            <div className="bg-white/80 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-medium text-slate-500 shadow-sm">
              Hoje
            </div>
          </div>

          <div className="flex justify-start">
            <div className="bg-white text-slate-800 px-4 py-2.5 rounded-2xl rounded-tl-sm max-w-[85%] shadow-sm relative">
              <p className="text-[15px] leading-snug">
                Olá! Vi seu produto no Instagram e fiquei interessada 😊
              </p>
              <div className="text-[10px] text-slate-400 text-right mt-1 font-medium">
                10:35
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <div className="bg-brand-500 text-white px-4 py-2.5 rounded-2xl rounded-tr-sm max-w-[85%] shadow-sm relative">
              <p className="text-[15px] leading-snug">
                Olá Ana! Que bom! Posso te ajudar com mais informações.
              </p>
              <div className="flex items-center justify-end gap-1 mt-1">
                <span className="text-[10px] text-brand-100 font-medium">
                  10:36
                </span>
                <CheckCheck className="w-3.5 h-3.5 text-brand-200" />
              </div>
            </div>
          </div>

          <div className="flex justify-start">
            <div className="bg-white text-slate-800 px-4 py-2.5 rounded-2xl rounded-tl-sm max-w-[85%] shadow-sm relative">
              <p className="text-[15px] leading-snug">
                Vocês têm em estoque o modelo azul?
              </p>
              <div className="text-[10px] text-slate-400 text-right mt-1 font-medium">
                10:38
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <div className="bg-brand-500 text-white px-4 py-2.5 rounded-2xl rounded-tr-sm max-w-[85%] shadow-sm relative">
              <p className="text-[15px] leading-snug">
                Sim! Temos sim. Vou te mandar uma foto.
              </p>
              <div className="flex items-center justify-end gap-1 mt-1">
                <span className="text-[10px] text-brand-100 font-medium">
                  10:38
                </span>
                <CheckCheck className="w-3.5 h-3.5 text-brand-200" />
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <div className="bg-brand-500 p-1 rounded-2xl rounded-tr-sm max-w-[70%] shadow-sm relative">
              <div className="w-full aspect-square bg-brand-400 rounded-xl flex items-center justify-center mb-1">
                <ImageIcon className="w-8 h-8 text-brand-200" />
              </div>
              <div className="flex items-center justify-end gap-1 px-2 pb-1">
                <span className="text-[10px] text-brand-100 font-medium">
                  10:39
                </span>
                <CheckCheck className="w-3.5 h-3.5 text-brand-200" />
              </div>
            </div>
          </div>

          <div className="flex justify-start">
            <div className="bg-white text-slate-800 px-4 py-2.5 rounded-2xl rounded-tl-sm max-w-[85%] shadow-sm relative">
              <p className="text-[15px] leading-snug">
                Perfeito! Quanto fica com frete para São Paulo?
              </p>
              <div className="text-[10px] text-slate-400 text-right mt-1 font-medium">
                10:42
              </div>
            </div>
          </div>
        </div>

        {/* Input Bar */}
        <div className="bg-slate-50 px-2 py-3 flex items-end gap-2 z-10">
          <div className="flex-1 bg-white rounded-3xl flex items-end border border-slate-200 shadow-sm">
            <button className="p-3 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer">
              <Smile className="w-6 h-6" />
            </button>
            <textarea
              rows={1}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Mensagem..."
              className="flex-1 max-h-32 py-3.5 bg-transparent outline-none resize-none text-[15px] text-slate-900 placeholder:text-slate-400"
              style={{
                minHeight: '52px',
              }}
            ></textarea>
            <button className="p-3 text-slate-400 hover:text-slate-600 transition-colors transform -rotate-45 cursor-pointer">
              <Paperclip className="w-6 h-6" />
            </button>
          </div>

          <button className="w-12 h-12 rounded-full bg-brand-500 text-white flex items-center justify-center shadow-sm hover:bg-brand-600 transition-colors flex-shrink-0 cursor-pointer">
            {message.trim() ? (
              <Send className="w-5 h-5 ml-1" />
            ) : (
              <Mic className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* DESKTOP LAYOUT */}
      <div className="hidden lg:flex h-full overflow-hidden w-full">
        {/* LEFT SIDEBAR */}
        <div className="w-20 bg-slate-900 flex flex-col items-center py-6 border-r border-slate-800 shrink-0 z-20 h-full">
          <div className="flex flex-col gap-4 flex-1 w-full px-3 pt-2">
            <button className="w-full aspect-square rounded-xl flex items-center justify-center bg-slate-800 text-white transition-colors cursor-pointer">
              <MessageSquare className="w-6 h-6" />
            </button>
            <button className="w-full aspect-square rounded-xl flex items-center justify-center text-slate-400 hover:bg-slate-800 hover:text-white transition-colors cursor-pointer">
              <Users className="w-6 h-6" />
            </button>
            <button className="w-full aspect-square rounded-xl flex items-center justify-center text-slate-400 hover:bg-slate-800 hover:text-white transition-colors cursor-pointer">
              <ListOrdered className="w-6 h-6" />
            </button>
          </div>

          <div className="flex flex-col gap-4 w-full px-3 mt-auto">
            <button className="w-full aspect-square rounded-xl flex items-center justify-center text-slate-400 hover:bg-slate-800 hover:text-white transition-colors cursor-pointer">
              <Settings className="w-6 h-6" />
            </button>
            <button 
              onClick={() => onNavigate('perfil')}
              className="w-full aspect-square rounded-xl flex items-center justify-center border-2 border-transparent hover:border-slate-700 transition-colors p-0 overflow-hidden cursor-pointer"
            >
              <div className="w-full h-full bg-slate-700 flex items-center justify-center text-slate-300">
                <User className="w-5 h-5" />
              </div>
            </button>
          </div>
        </div>

        {/* MIDDLE COLUMN - Chat List */}
        <div className="w-96 bg-white border-r border-slate-200 flex flex-col shrink-0 z-10 h-full">
          <div className="p-6 border-b border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Conversas
            </h2>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-slate-400" />
              </div>
              <input
                type="text"
                placeholder="Buscar conversa..."
                className="w-full pl-10 pr-4 py-2.5 bg-slate-100 border-transparent focus:bg-white border focus:border-brand-500 focus:ring-2 focus:ring-brand-100 rounded-xl outline-none transition-all text-slate-900 placeholder:text-slate-500"
              />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto">
            {/* Active Chat */}
            <div className="p-4 bg-brand-50 border-l-4 border-brand-500 flex items-start gap-4 cursor-pointer">
              <div className="relative">
                <img
                  src="https://i.pravatar.cc/150?img=32"
                  alt="Avatar"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#25D366] rounded-full border-2 border-white flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                  </svg>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline mb-1">
                  <h4 className="font-semibold text-slate-900 truncate">
                    Ana Clara
                  </h4>
                  <span className="text-xs font-medium text-brand-600">
                    10:42
                  </span>
                </div>
                <p className="text-sm text-slate-600 truncate">
                  Perfeito! Quanto fica com frete para São Paulo?
                </p>
              </div>
            </div>

            {/* Other Chats */}
            <div className="p-4 border-b border-slate-100 flex items-start gap-4 cursor-pointer hover:bg-slate-50 transition-colors">
              <div className="relative">
                <img
                  src="https://i.pravatar.cc/150?img=11"
                  alt="Avatar"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] rounded-full border-2 border-white flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline mb-1">
                  <h4 className="font-medium text-slate-900 truncate">
                    Marcos Paulo
                  </h4>
                  <span className="text-xs text-brand-600 font-medium">
                    09:15
                  </span>
                </div>
                <p className="text-sm text-slate-900 font-medium truncate">
                  Perfeito, muito obrigado pelo retorno!
                </p>
              </div>
              <div className="w-5 h-5 bg-brand-500 rounded-full flex items-center justify-center text-[10px] font-bold text-white mt-6">
                1
              </div>
            </div>

            <div className="p-4 border-b border-slate-100 flex items-start gap-4 cursor-pointer hover:bg-slate-50 transition-colors">
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold text-lg">
                  E
                </div>
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#0088CC] rounded-full border-2 border-white flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                  </svg>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline mb-1">
                  <h4 className="font-medium text-slate-900 truncate">
                    Empresa XYZ
                  </h4>
                  <span className="text-xs text-slate-500">Ontem</span>
                </div>
                <p className="text-sm text-slate-500 truncate">
                  Segue o comprovante em anexo.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT MAIN AREA - Chat */}
        <div className="flex-1 flex flex-col bg-[#E5DDD5] relative h-full">
          {/* Background Pattern */}
          <div
            className="absolute inset-0 opacity-5 pointer-events-none"
            style={{
              backgroundImage:
                'url("https://www.transparenttextures.com/patterns/cubes.png")',
            }}
          ></div>

          {/* Chat Header */}
          <div className="h-20 px-6 flex items-center justify-between bg-white border-b border-slate-200 z-10 shrink-0">
            <div className="flex items-center gap-4">
              <div className="relative">
                <img
                  src="https://i.pravatar.cc/150?img=32"
                  alt="Avatar"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="absolute -bottom-0.5 -right-0.5 w-5 h-5 bg-[#25D366] rounded-full border-2 border-white flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                  </svg>
                </div>
              </div>
              <div>
                <h2 className="text-lg font-bold text-slate-900 leading-tight">
                  Ana Clara
                </h2>
                <p className="text-sm text-brand-600 font-medium">online</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-slate-500">
              <button className="p-2.5 hover:bg-slate-100 rounded-full transition-colors cursor-pointer">
                <Video className="w-5 h-5" />
              </button>
              <button className="p-2.5 hover:bg-slate-100 rounded-full transition-colors cursor-pointer">
                <Phone className="w-5 h-5" />
              </button>
              <div className="w-px h-6 bg-slate-200 mx-1"></div>
              <button className="p-2.5 hover:bg-slate-100 rounded-full transition-colors cursor-pointer">
                <Search className="w-5 h-5" />
              </button>
              <button className="p-2.5 hover:bg-slate-100 rounded-full transition-colors cursor-pointer">
                <MoreVertical className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-8 space-y-6 relative z-0">
            <div className="flex justify-center my-6">
              <div className="bg-white/80 backdrop-blur-sm px-4 py-1.5 rounded-lg text-xs font-medium text-slate-500 shadow-sm">
                Hoje
              </div>
            </div>

            <div className="flex justify-start">
              <div className="bg-white text-slate-800 px-5 py-3 rounded-2xl rounded-tl-sm max-w-[70%] shadow-sm relative">
                <p className="text-[15px] leading-relaxed">
                  Olá! Vi seu produto no Instagram e fiquei interessada 😊
                </p>
                <div className="text-[10px] text-slate-400 text-right mt-1 font-medium">
                  10:35
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <div className="bg-brand-500 text-white px-5 py-3 rounded-2xl rounded-tr-sm max-w-[70%] shadow-sm relative">
                <p className="text-[15px] leading-relaxed">
                  Olá Ana! Que bom! Posso te ajudar com mais informações.
                </p>
                <div className="flex items-center justify-end gap-1 mt-1">
                  <span className="text-[10px] text-brand-100 font-medium">
                    10:36
                  </span>
                  <CheckCheck className="w-4 h-4 text-brand-200" />
                </div>
              </div>
            </div>

            <div className="flex justify-start">
              <div className="bg-white text-slate-800 px-5 py-3 rounded-2xl rounded-tl-sm max-w-[70%] shadow-sm relative">
                <p className="text-[15px] leading-relaxed">
                  Vocês têm em estoque o modelo azul?
                </p>
                <div className="text-[10px] text-slate-400 text-right mt-1 font-medium">
                  10:38
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <div className="bg-brand-500 text-white px-5 py-3 rounded-2xl rounded-tr-sm max-w-[70%] shadow-sm relative">
                <p className="text-[15px] leading-relaxed">
                  Sim! Temos sim. Vou te mandar uma foto.
                </p>
                <div className="flex items-center justify-end gap-1 mt-1">
                  <span className="text-[10px] text-brand-100 font-medium">
                    10:38
                  </span>
                  <CheckCheck className="w-4 h-4 text-brand-200" />
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <div className="bg-brand-500 p-1.5 rounded-2xl rounded-tr-sm max-w-[50%] shadow-sm relative">
                <div className="w-full aspect-square bg-brand-400 rounded-xl flex items-center justify-center mb-1">
                  <ImageIcon className="w-12 h-12 text-brand-200" />
                </div>
                <div className="flex items-center justify-end gap-1 px-2 pb-1">
                  <span className="text-[10px] text-brand-100 font-medium">
                    10:39
                  </span>
                  <CheckCheck className="w-4 h-4 text-brand-200" />
                </div>
              </div>
            </div>

            <div className="flex justify-start">
              <div className="bg-white text-slate-800 px-5 py-3 rounded-2xl rounded-tl-sm max-w-[70%] shadow-sm relative">
                <p className="text-[15px] leading-relaxed">
                  Perfeito! Quanto fica com frete para São Paulo?
                </p>
                <div className="text-[10px] text-slate-400 text-right mt-1 font-medium">
                  10:42
                </div>
              </div>
            </div>
          </div>

          {/* Input Bar */}
          <div className="bg-slate-50 px-6 py-4 flex items-end gap-4 z-10 shrink-0">
            <div className="flex-1 bg-white rounded-3xl flex items-end border border-slate-200 shadow-sm">
              <button className="p-4 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer">
                <Smile className="w-6 h-6" />
              </button>
              <button className="p-4 text-slate-400 hover:text-slate-600 transition-colors transform -rotate-45 cursor-pointer">
                <Paperclip className="w-6 h-6" />
              </button>
              <textarea
                rows={1}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Mensagem..."
                className="flex-1 max-h-32 py-4 bg-transparent outline-none resize-none text-[15px] text-slate-900 placeholder:text-slate-400"
                style={{
                  minHeight: '56px',
                }}
              ></textarea>
            </div>

            <button className="w-14 h-14 rounded-full bg-brand-500 text-white flex items-center justify-center shadow-sm hover:bg-brand-600 transition-colors flex-shrink-0 cursor-pointer">
              {message.trim() ? (
                <Send className="w-6 h-6 ml-1" />
              ) : (
                <Mic className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}