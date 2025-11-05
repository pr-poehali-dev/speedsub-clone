import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const services = [
  {
    category: 'Telegram',
    icon: 'Send',
    items: [
      { name: 'Реакции', count: '15 услуг', price: 'от 2.9₽' },
      { name: 'Подписчики', count: '8 услуг', price: 'от 2.9₽' },
      { name: 'Просмотры', count: '12 услуг', price: 'от 2.9₽' },
      { name: 'Комментарии', count: '5 услуг', price: 'от 2.9₽' },
    ]
  },
  {
    category: 'Instagram',
    icon: 'Instagram',
    items: [
      { name: 'Лайки', count: '10 услуг', price: 'от 2.9₽' },
      { name: 'Подписчики', count: '7 услуг', price: 'от 2.9₽' },
      { name: 'Просмотры сторис', count: '6 услуг', price: 'от 2.9₽' },
      { name: 'Комментарии', count: '4 услуг', price: 'от 2.9₽' },
    ]
  },
  {
    category: 'YouTube',
    icon: 'Youtube',
    items: [
      { name: 'Просмотры', count: '9 услуг', price: 'от 2.9₽' },
      { name: 'Подписчики', count: '6 услуг', price: 'от 2.9₽' },
      { name: 'Лайки', count: '5 услуг', price: 'от 2.9₽' },
      { name: 'Комментарии', count: '3 услуги', price: 'от 2.9₽' },
    ]
  },
  {
    category: 'VK',
    icon: 'Hash',
    items: [
      { name: 'Лайки', count: '8 услуг', price: 'от 2.9₽' },
      { name: 'Подписчики', count: '5 услуг', price: 'от 2.9₽' },
      { name: 'Репосты', count: '4 услуги', price: 'от 2.9₽' },
      { name: 'Просмотры', count: '6 услуг', price: 'от 2.9₽' },
    ]
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <header className="border-b border-[#1a1a1a] px-6 py-4 flex items-center justify-between sticky top-0 bg-[#0a0a0a] z-10">
        <Link to="/" className="flex items-center gap-2">
          <Icon name="Zap" size={24} className="text-red-500" />
          <h1 className="text-xl font-bold">SpeedSub <span className="text-[#FFD700]">Premium</span></h1>
        </Link>
        
        <div className="flex items-center gap-4">
          <Link to="/services">
            <Button variant="ghost" size="sm" className="text-white">
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
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-3">Наши услуги</h1>
          <p className="text-gray-400">Выберите платформу и тип услуги для продвижения</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div key={service.category} className="bg-[#0f0f0f] border border-[#1a1a1a] rounded-lg p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#1a1a1a] rounded-lg flex items-center justify-center">
                  <Icon name={service.icon} size={24} className="text-red-500" />
                </div>
                <h2 className="text-2xl font-bold">{service.category}</h2>
              </div>

              <div className="space-y-3">
                {service.items.map((item) => (
                  <Link 
                    key={item.name}
                    to="/"
                    className="flex items-center justify-between p-3 rounded-lg bg-[#0a0a0a] hover:bg-[#1a1a1a] transition-colors border border-transparent hover:border-red-500/30"
                  >
                    <div>
                      <div className="font-medium">{item.name}</div>
                      <div className="text-sm text-gray-400">{item.count}</div>
                    </div>
                    <div className="text-green-400 font-medium">{item.price}</div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
