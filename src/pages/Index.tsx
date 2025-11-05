import { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const socialNetworks = [
  { id: 'telegram', name: 'Telegram', icon: 'Send', color: '#0088cc' },
  { id: 'vk', name: 'VK', icon: 'Hash', color: '#0077ff' },
  { id: 'instagram', name: 'Instagram', icon: 'Instagram', color: '#e4405f' },
  { id: 'tiktok', name: 'TikTok', icon: 'Music', color: '#000000' },
  { id: 'youtube', name: 'YouTube', icon: 'Youtube', color: '#ff0000' },
  { id: 'twitter', name: 'Twitter', icon: 'Twitter', color: '#1da1f2' },
  { id: 'facebook', name: 'Facebook', icon: 'Facebook', color: '#1877f2' },
  { id: 'ok', name: 'OK', icon: 'Circle', color: '#ee8208' },
  { id: 'twitch', name: 'Twitch', icon: 'Tv', color: '#9146ff' },
  { id: 'pinterest', name: 'Pinterest', icon: 'Heart', color: '#e60023' },
  { id: 'reddit', name: 'Reddit', icon: 'MessageSquare', color: '#ff4500' },
  { id: 'linkedin', name: 'LinkedIn', icon: 'Briefcase', color: '#0077b5' },
];

const reactionTypes = [
  { 
    id: 'positive', 
    title: 'Позитивные реакции',
    price: 2.9,
    time: '0-60 минут',
    icon: 'ThumbsUp'
  },
  { 
    id: 'premium', 
    title: 'Позитивные прем реакции',
    price: 9.1,
    time: '0-60 минут',
    icon: 'Star'
  },
  { 
    id: 'negative', 
    title: 'Негативные реакции',
    price: 2.9,
    time: '0-60 минут',
    icon: 'ThumbsDown'
  },
];

const menuItems = [
  { id: 'reactions', icon: 'Heart', label: 'Реакции', path: '/reactions' },
  { id: 'subscribers', icon: 'Users', label: 'Подписчики', path: '/subscribers' },
  { id: 'premium', icon: 'Crown', label: 'Подписчики в Премиум канал', path: '/premium-subscribers' },
  { id: 'views', icon: 'Eye', label: 'Просмотры', path: '/views' },
  { id: 'stars', icon: 'Star', label: 'Звёзды (Stars)', path: '/' },
  { id: 'reposts', icon: 'Repeat', label: 'Репосты', path: '/' },
  { id: 'news', icon: 'Newspaper', label: 'Новости', path: '/' },
  { id: 'packages', icon: 'Package', label: 'Пусто для паблика', path: '/' },
  { id: 'comments', icon: 'MessageCircle', label: 'Комментарии', path: '/' },
  { id: 'referrals', icon: 'UserPlus', label: 'Рефералы', path: '/' },
];

export default function Index() {
  const [selectedSocial, setSelectedSocial] = useState<string | null>(null);
  const [selectedReaction, setSelectedReaction] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(50);
  const [link, setLink] = useState('');
  const [email, setEmail] = useState('');

  const pricePerUnit = selectedReaction 
    ? reactionTypes.find(r => r.id === selectedReaction)?.price || 0 
    : 0;
  
  const totalPrice = (quantity * pricePerUnit).toFixed(2);

  return (
    <div className="flex h-screen bg-[#0a0a0a] text-white overflow-hidden">
      <aside className="w-16 bg-[#0f0f0f] flex flex-col items-center py-6 border-r border-[#1a1a1a]">
        <div className="mb-8">
          <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center">
            <span className="text-lg font-bold">🚀</span>
          </div>
        </div>
        
        <nav className="flex flex-col gap-4 flex-1">
          {menuItems.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-[#1a1a1a] transition-colors group relative"
            >
              <Icon name={item.icon} size={20} className="text-gray-400 group-hover:text-white transition-colors" />
              <div className="absolute left-full ml-2 px-2 py-1 bg-[#1a1a1a] rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity">
                {item.label}
              </div>
            </Link>
          ))}
        </nav>
      </aside>

      <main className="flex-1 overflow-y-auto">
        <header className="border-b border-[#1a1a1a] px-6 py-4 flex items-center justify-between sticky top-0 bg-[#0a0a0a] z-10">
          <div className="flex items-center gap-2">
            <Icon name="Zap" size={24} className="text-red-500" />
            <h1 className="text-xl font-bold">SpeedSub <span className="text-[#FFD700]">Premium</span></h1>
          </div>
          
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

        <div className="p-6">
          <div className="mb-6">
            <h2 className="text-sm text-gray-400 mb-4">Мне нужны...</h2>
            <div className="flex flex-wrap gap-3">
              {socialNetworks.map((social) => (
                <button
                  key={social.id}
                  onClick={() => setSelectedSocial(social.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all ${
                    selectedSocial === social.id
                      ? 'bg-[#1a1a1a] border-red-500'
                      : 'bg-[#0f0f0f] border-[#1a1a1a] hover:border-gray-600'
                  }`}
                >
                  <Icon name={social.icon} size={18} />
                  <span className="text-sm">{social.name}</span>
                </button>
              ))}
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg border bg-[#0f0f0f] border-[#1a1a1a] hover:border-gray-600">
                <Icon name="Plus" size={18} />
              </button>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex items-center gap-2 mb-4">
              <h2 className="text-sm text-gray-400">Продвижение с умом — результат без забот</h2>
              <div className="flex-1 h-px bg-[#1a1a1a]" />
            </div>

            <div className="grid grid-cols-3 gap-4">
              {reactionTypes.map((reaction) => (
                <button
                  key={reaction.id}
                  onClick={() => setSelectedReaction(reaction.id)}
                  className={`p-4 rounded-lg border transition-all ${
                    selectedReaction === reaction.id
                      ? 'bg-[#1a1a1a] border-red-500'
                      : 'bg-[#0f0f0f] border-[#1a1a1a] hover:border-gray-600'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Icon name={reaction.icon} size={20} className="text-red-500" />
                    <span className="font-medium text-sm">{reaction.title}</span>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-2">
                      <Icon name="Zap" size={14} className="text-orange-400" />
                      <span className="text-xs text-gray-400">{reaction.time}</span>
                    </div>
                    <div className="text-green-400 text-sm font-medium">
                      {reaction.price.toFixed(2)} ₽/шт
                    </div>
                  </div>
                  {selectedReaction === reaction.id && (
                    <div className="mt-3 pt-3 border-t border-[#1a1a1a]">
                      <div className="flex items-center gap-2">
                        <Icon name="CheckCircle" size={16} className="text-green-400" />
                        <span className="text-xs text-gray-400">Для накрутки, ссылки необходимо отправить...</span>
                      </div>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Стоимость</label>
                <div className="bg-[#0f0f0f] border border-[#1a1a1a] rounded-lg px-4 py-3">
                  <div className="text-2xl font-bold">{totalPrice} ₽</div>
                  {quantity > 0 && (
                    <div className="text-xs text-gray-400 mt-1">
                      Есть промокод?
                    </div>
                  )}
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm text-gray-400">Количество</label>
                  <span className="text-xs text-gray-500">{quantity}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setQuantity(Math.max(1, quantity - 10))}
                    className="bg-[#0f0f0f] border-[#1a1a1a] hover:bg-[#1a1a1a]"
                  >
                    <Icon name="Minus" size={16} />
                  </Button>
                  <Input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="flex-1 bg-[#0f0f0f] border-[#1a1a1a] text-center"
                  />
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setQuantity(quantity + 10)}
                    className="bg-[#0f0f0f] border-[#1a1a1a] hover:bg-[#1a1a1a]"
                  >
                    <Icon name="Plus" size={16} />
                  </Button>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Ссылка на Telegram канал
                </label>
                <Input
                  placeholder="https://t.me/channel/12345"
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                  className="bg-[#0f0f0f] border-[#1a1a1a]"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Email для чека
                </label>
                <Input
                  placeholder="example@mail.ru"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-[#0f0f0f] border-[#1a1a1a]"
                />
              </div>
            </div>
          </div>

          <div className="mt-6">
            <Button 
              className="w-full bg-red-500 hover:bg-red-600 text-white py-6 text-lg font-medium"
              disabled={!selectedSocial || !selectedReaction || !link}
            >
              Оформить заказ
            </Button>
            <p className="text-xs text-gray-500 text-center mt-3">
              Оплачивая заказ Вы соглашаетесь с <span className="text-red-500 cursor-pointer">Офертой</span> и <span className="text-red-500 cursor-pointer">Политикой использования</span> нашего сервиса
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}