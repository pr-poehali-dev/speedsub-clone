import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function PremiumSubscribers() {
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
            <div className="flex items-center gap-3 mb-3">
              <Icon name="Crown" size={40} className="text-[#FFD700]" />
              <h1 className="text-4xl font-bold">Подписчики в Премиум канал</h1>
            </div>
            <p className="text-gray-400">Премиум подписчики для Telegram каналов</p>
          </div>

          <div className="bg-gradient-to-br from-[#FFD700]/10 to-[#FF8C00]/10 border border-[#FFD700]/20 rounded-lg p-8 mb-6">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-[#FFD700]/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Icon name="Crown" size={32} className="text-[#FFD700]" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3">Премиум подписчики Telegram</h3>
                <p className="text-gray-300 mb-4">
                  Живые аккаунты с Telegram Premium подпиской. Идеально для премиум-каналов и повышения статуса.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-[#0f0f0f] border border-[#1a1a1a] rounded-lg p-4">
                    <div className="text-sm text-gray-400 mb-1">Скорость</div>
                    <div className="font-bold">5-30 минут</div>
                  </div>
                  <div className="bg-[#0f0f0f] border border-[#1a1a1a] rounded-lg p-4">
                    <div className="text-sm text-gray-400 mb-1">Гарантия</div>
                    <div className="font-bold">30 дней</div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-3xl font-bold text-[#FFD700]">1.8 ₽</div>
                    <div className="text-sm text-gray-400">за подписчика</div>
                  </div>
                  <Link to="/">
                    <Button className="bg-[#FFD700] hover:bg-[#FFD700]/90 text-black font-bold">
                      Заказать сейчас
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="bg-[#0f0f0f] border border-[#1a1a1a] rounded-lg p-6">
              <div className="flex items-center gap-3 mb-2">
                <Icon name="Shield" size={20} className="text-green-500" />
                <h4 className="font-bold">Высокое качество</h4>
              </div>
              <p className="text-gray-400 text-sm">Только живые аккаунты с активной Telegram Premium подпиской</p>
            </div>

            <div className="bg-[#0f0f0f] border border-[#1a1a1a] rounded-lg p-6">
              <div className="flex items-center gap-3 mb-2">
                <Icon name="Zap" size={20} className="text-yellow-500" />
                <h4 className="font-bold">Быстрый старт</h4>
              </div>
              <p className="text-gray-400 text-sm">Подписчики начинают приходить через 5-30 минут после оплаты</p>
            </div>

            <div className="bg-[#0f0f0f] border border-[#1a1a1a] rounded-lg p-6">
              <div className="flex items-center gap-3 mb-2">
                <Icon name="TrendingUp" size={20} className="text-blue-500" />
                <h4 className="font-bold">Повышение статуса</h4>
              </div>
              <p className="text-gray-400 text-sm">Премиум подписчики повышают престиж вашего канала</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}