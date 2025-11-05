import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function Subscribers() {
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
          <Button className="bg-red-500 hover:bg-red-600 text-white">
            Войти в аккаунт
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-3">Подписчики</h1>
            <p className="text-gray-400">Накрутка подписчиков для всех популярных платформ</p>
          </div>

          <div className="grid gap-6">
            <div className="bg-[#0f0f0f] border border-[#1a1a1a] rounded-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold mb-2">Telegram подписчики</h3>
                  <p className="text-gray-400 text-sm">Живые аккаунты с активностью</p>
                </div>
                <Icon name="Send" size={32} className="text-[#0088cc]" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-red-500">0.5 ₽</div>
                  <div className="text-xs text-gray-400">за подписчика</div>
                </div>
                <Link to="/">
                  <Button className="bg-red-500 hover:bg-red-600">Заказать</Button>
                </Link>
              </div>
            </div>

            <div className="bg-[#0f0f0f] border border-[#1a1a1a] rounded-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold mb-2">Instagram подписчики</h3>
                  <p className="text-gray-400 text-sm">Качественные живые аккаунты</p>
                </div>
                <Icon name="Instagram" size={32} className="text-[#e4405f]" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-red-500">1.2 ₽</div>
                  <div className="text-xs text-gray-400">за подписчика</div>
                </div>
                <Link to="/">
                  <Button className="bg-red-500 hover:bg-red-600">Заказать</Button>
                </Link>
              </div>
            </div>

            <div className="bg-[#0f0f0f] border border-[#1a1a1a] rounded-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold mb-2">YouTube подписчики</h3>
                  <p className="text-gray-400 text-sm">Реальные пользователи</p>
                </div>
                <Icon name="Youtube" size={32} className="text-[#ff0000]" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-red-500">2.0 ₽</div>
                  <div className="text-xs text-gray-400">за подписчика</div>
                </div>
                <Link to="/">
                  <Button className="bg-red-500 hover:bg-red-600">Заказать</Button>
                </Link>
              </div>
            </div>

            <div className="bg-[#0f0f0f] border border-[#1a1a1a] rounded-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold mb-2">VK подписчики</h3>
                  <p className="text-gray-400 text-sm">Активные русскоязычные аккаунты</p>
                </div>
                <Icon name="Hash" size={32} className="text-[#0077ff]" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-red-500">0.8 ₽</div>
                  <div className="text-xs text-gray-400">за подписчика</div>
                </div>
                <Link to="/">
                  <Button className="bg-red-500 hover:bg-red-600">Заказать</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
