import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function Reactions() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <header className="border-b border-[#1a1a1a] px-6 py-4 flex items-center justify-between sticky top-0 bg-[#0a0a0a] z-10">
        <Link to="/" className="flex items-center gap-2">
          <Icon name="Zap" size={24} className="text-red-500" />
          <h1 className="text-xl font-bold">SpeedSub <span className="text-[#FFD700]">Premium</span></h1>
        </Link>
        
        <div className="flex items-center gap-4">
          <Link to="/services">
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
              Услуги
            </Button>
          </Link>
          <Link to="/contacts">
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
              Контакты
            </Button>
          </Link>
          <Link to="/faq">
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
              FAQ
            </Button>
          </Link>
          <Link to="/login">
            <Button className="bg-red-500 hover:bg-red-600 text-white">
              Войти в аккаунт
            </Button>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-3">Реакции</h1>
            <p className="text-gray-400">Накрутка реакций для постов в Telegram</p>
          </div>

          <div className="grid gap-6">
            <div className="bg-[#0f0f0f] border border-[#1a1a1a] rounded-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                    <Icon name="ThumbsUp" size={24} className="text-green-500" />
                    Позитивные реакции
                  </h3>
                  <p className="text-gray-400 text-sm">👍 ❤️ 🔥 🎉 😍</p>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-400 mb-1">Старт</div>
                  <div className="font-bold text-green-500">0-60 минут</div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-red-500">2.9 ₽</div>
                  <div className="text-xs text-gray-400">за реакцию</div>
                </div>
                <Link to="/">
                  <Button className="bg-red-500 hover:bg-red-600">Заказать</Button>
                </Link>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#FFD700]/10 to-[#FF8C00]/10 border border-[#FFD700]/20 rounded-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                    <Icon name="Star" size={24} className="text-[#FFD700]" />
                    Позитивные прем реакции
                  </h3>
                  <p className="text-gray-400 text-sm">От аккаунтов с Telegram Premium</p>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-400 mb-1">Старт</div>
                  <div className="font-bold text-[#FFD700]">0-60 минут</div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-[#FFD700]">9.1 ₽</div>
                  <div className="text-xs text-gray-400">за реакцию</div>
                </div>
                <Link to="/">
                  <Button className="bg-[#FFD700] hover:bg-[#FFD700]/90 text-black font-bold">
                    Заказать
                  </Button>
                </Link>
              </div>
            </div>

            <div className="bg-[#0f0f0f] border border-[#1a1a1a] rounded-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                    <Icon name="ThumbsDown" size={24} className="text-red-500" />
                    Негативные реакции
                  </h3>
                  <p className="text-gray-400 text-sm">👎 😢 💩 🤮</p>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-400 mb-1">Старт</div>
                  <div className="font-bold text-orange-500">0-60 минут</div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-red-500">2.9 ₽</div>
                  <div className="text-xs text-gray-400">за реакцию</div>
                </div>
                <Link to="/">
                  <Button className="bg-red-500 hover:bg-red-600">Заказать</Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-[#0f0f0f] border border-[#1a1a1a] rounded-lg p-6">
            <h3 className="font-bold mb-4 flex items-center gap-2">
              <Icon name="Info" size={20} className="text-blue-500" />
              Информация
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>• Реакции начинают поступать в течение 0-60 минут</li>
              <li>• Для заказа нужна прямая ссылка на пост</li>
              <li>• Минимальный заказ: 10 реакций</li>
              <li>• Максимальный заказ: 10000 реакций</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}