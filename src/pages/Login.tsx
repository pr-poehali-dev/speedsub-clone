import { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Login() {
  const [contact, setContact] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
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
          <h2 className="text-2xl font-bold mb-2 text-center">Вход в аккаунт</h2>
          <p className="text-gray-400 text-center mb-6">Введите номер телефона или email</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm text-gray-400 mb-2">Телефон или Email</label>
              <Input
                type="text"
                placeholder="+7 (999) 123-45-67 или email@example.com"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                className="bg-[#0a0a0a] border-[#1a1a1a] h-12"
              />
            </div>

            <Button type="submit" className="w-full bg-red-500 hover:bg-red-600 text-white h-12 text-base">
              Продолжить
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-400">
              Нет аккаунта?{' '}
              <Link to="/register" className="text-red-500 hover:text-red-400 font-medium">
                Зарегистрироваться
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
