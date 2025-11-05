import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function Contacts() {
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
            <Button variant="ghost" size="sm" className="text-white">
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
            <h1 className="text-4xl font-bold mb-3">Контакты</h1>
            <p className="text-gray-400">Свяжитесь с нами любым удобным способом</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <a 
              href="https://t.me/speedsub_support" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0f0f0f] border border-[#1a1a1a] rounded-lg p-6 hover:border-red-500/50 transition-colors"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 bg-[#0088cc] rounded-lg flex items-center justify-center">
                  <Icon name="Send" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Telegram</h3>
                  <p className="text-sm text-gray-400">Быстрая поддержка 24/7</p>
                </div>
              </div>
              <p className="text-gray-300">@speedsub_support</p>
            </a>

            <a 
              href="mailto:support@speedsub.ru"
              className="bg-[#0f0f0f] border border-[#1a1a1a] rounded-lg p-6 hover:border-red-500/50 transition-colors"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center">
                  <Icon name="Mail" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Email</h3>
                  <p className="text-sm text-gray-400">Ответим в течение часа</p>
                </div>
              </div>
              <p className="text-gray-300">support@speedsub.ru</p>
            </a>
          </div>

          <div className="bg-[#0f0f0f] border border-[#1a1a1a] rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Отправить сообщение</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Имя</label>
                <Input 
                  placeholder="Ваше имя"
                  className="bg-[#0a0a0a] border-[#1a1a1a]"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">Email</label>
                <Input 
                  type="email"
                  placeholder="example@mail.ru"
                  className="bg-[#0a0a0a] border-[#1a1a1a]"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">Сообщение</label>
                <Textarea 
                  placeholder="Расскажите, чем мы можем помочь"
                  rows={5}
                  className="bg-[#0a0a0a] border-[#1a1a1a] resize-none"
                />
              </div>

              <Button className="w-full bg-red-500 hover:bg-red-600 text-white">
                Отправить
              </Button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
