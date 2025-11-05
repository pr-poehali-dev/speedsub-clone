import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqItems = [
  {
    question: 'Как быстро выполняются заказы?',
    answer: 'Большинство заказов начинают выполняться в течение 0-60 минут после оплаты. Скорость зависит от типа услуги и выбранной платформы.'
  },
  {
    question: 'Безопасно ли использовать услуги?',
    answer: 'Да, мы используем только проверенные методы продвижения, которые не нарушают правила платформ. Все аккаунты работают в безопасном режиме.'
  },
  {
    question: 'Какие способы оплаты принимаются?',
    answer: 'Мы принимаем банковские карты (Visa, MasterCard, МИР), электронные кошельки (ЮMoney, Qiwi), криптовалюту и другие популярные способы оплаты.'
  },
  {
    question: 'Что делать, если заказ не выполнен?',
    answer: 'Если заказ не начал выполняться в течение указанного времени, свяжитесь с нашей поддержкой в Telegram. Мы решим проблему или вернём средства.'
  },
  {
    question: 'Есть ли гарантия на услуги?',
    answer: 'Да, на все услуги действует гарантия. Если показатели снизятся в течение гарантийного периода, мы бесплатно довыполним заказ.'
  },
  {
    question: 'Можно ли заказать услуги оптом?',
    answer: 'Конечно! Для оптовых заказов от 10 000₽ действуют специальные скидки. Свяжитесь с нами для уточнения условий.'
  },
  {
    question: 'Нужны ли пароли от аккаунтов?',
    answer: 'Нет, мы никогда не запрашиваем пароли. Для выполнения заказа нужна только ссылка на публикацию или профиль.'
  },
  {
    question: 'Можно ли отменить заказ?',
    answer: 'Заказ можно отменить до начала выполнения. После старта выполнения отмена невозможна, но вы можете связаться с поддержкой для решения вопроса.'
  },
];

export default function FAQ() {
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
            <Button variant="ghost" size="sm" className="text-white">
              FAQ
            </Button>
          </Link>
          <Button className="bg-red-500 hover:bg-red-600 text-white">
            Войти в аккаунт
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-3">Частые вопросы</h1>
            <p className="text-gray-400">Ответы на популярные вопросы о наших услугах</p>
          </div>

          <div className="bg-[#0f0f0f] border border-[#1a1a1a] rounded-lg p-6">
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-[#1a1a1a] rounded-lg px-4 bg-[#0a0a0a]"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-red-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon name="HelpCircle" size={16} className="text-red-500" />
                      </div>
                      <span className="font-medium">{item.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400 pl-11 pb-4">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="mt-8 bg-[#0f0f0f] border border-[#1a1a1a] rounded-lg p-6 text-center">
            <Icon name="MessageCircle" size={32} className="text-red-500 mx-auto mb-3" />
            <h3 className="text-xl font-bold mb-2">Не нашли ответ?</h3>
            <p className="text-gray-400 mb-4">Наша поддержка всегда готова помочь</p>
            <Link to="/contacts">
              <Button className="bg-red-500 hover:bg-red-600 text-white">
                Связаться с нами
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
