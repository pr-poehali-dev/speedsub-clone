import { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Register() {
  const [step, setStep] = useState<'contact' | 'verify'>('contact');
  const [contact, setContact] = useState('');
  const [code, setCode] = useState('');
  const [name, setName] = useState('');

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('verify');
  };

  const handleVerifySubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <Link to="/" className="flex items-center justify-center gap-2 mb-8">
          <Icon name="Zap" size={32} className="text-red-500" />
          <h1 className="text-2xl font-bold">SpeedSub <span className="text-[#FFD700]">Premium</span></h1>
        </Link>

        <div className="bg-[#0f0f0f] border border-[#1a1a1a] rounded-lg p-8">
          {step === 'contact' ? (
            <>
              <h2 className="text-2xl font-bold mb-2 text-center">Регистрация</h2>
              <p className="text-gray-400 text-center mb-6">Создайте аккаунт для заказов</p>

              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Ваше имя</label>
                  <Input
                    type="text"
                    placeholder="Иван"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-[#0a0a0a] border-[#1a1a1a] h-12"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">Телефон или Email</label>
                  <Input
                    type="text"
                    placeholder="+7 (999) 123-45-67 или email@example.com"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    className="bg-[#0a0a0a] border-[#1a1a1a] h-12"
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-red-500 hover:bg-red-600 text-white h-12 text-base">
                  Продолжить
                </Button>
              </form>
            </>
          ) : (
            <>
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mail" size={32} className="text-red-500" />
                </div>
                <h2 className="text-2xl font-bold mb-2">Подтверждение</h2>
                <p className="text-gray-400">
                  Код отправлен на<br />
                  <span className="text-white font-medium">{contact}</span>
                </p>
              </div>

              <form onSubmit={handleVerifySubmit} className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Код подтверждения</label>
                  <Input
                    type="text"
                    placeholder="123456"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    className="bg-[#0a0a0a] border-[#1a1a1a] h-12 text-center text-2xl tracking-widest"
                    maxLength={6}
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-red-500 hover:bg-red-600 text-white h-12 text-base">
                  Подтвердить
                </Button>

                <Button
                  type="button"
                  variant="ghost"
                  className="w-full text-gray-400 hover:text-white"
                  onClick={() => setStep('contact')}
                >
                  Изменить контакт
                </Button>
              </form>

              <div className="mt-6 text-center">
                <button className="text-sm text-gray-400 hover:text-white">
                  Отправить код повторно
                </button>
              </div>
            </>
          )}

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-400">
              Уже есть аккаунт?{' '}
              <Link to="/login" className="text-red-500 hover:text-red-400 font-medium">
                Войти
              </Link>
            </p>
          </div>
        </div>

        <div className="mt-6 text-center">
          <Link to="/" className="text-gray-400 hover:text-white text-sm flex items-center justify-center gap-2">
            <Icon name="ArrowLeft" size={16} />
            Вернуться на главную
          </Link>
        </div>
      </div>
    </div>
  );
}
