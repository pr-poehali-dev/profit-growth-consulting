import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [bookFormData, setBookFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleBookDownload = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Book download requested:', bookFormData);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen">
      <main>
        <section className="bg-sky-500 py-6">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-3 leading-tight text-white">
                Как удвоить прибыль магазина
              </h1>
              <p className="text-lg md:text-xl text-white/90 font-semibold mb-6">
                своими руками
              </p>
              <p className="text-base md:text-lg text-white/95 leading-relaxed">
                Только практика. Никакой воды.<br />
                Приёмы, методы и секретные фишки<br />
                от предпринимателя со стажем 27 лет
              </p>
            </div>
          </div>
        </section>

        <nav className="bg-card border-b border-border py-4">
          <div className="container mx-auto px-4">
            <div className="flex justify-center gap-8">
              <a href="#book" className="text-base font-medium hover:text-accent transition-colors">
                Скачать
              </a>
              <a href="#video" className="text-base font-medium hover:text-accent transition-colors">
                Смотреть
              </a>
              <a href="#articles" className="text-base font-medium hover:text-accent transition-colors">
                Читать
              </a>
            </div>
          </div>
        </nav>

        <section id="book" className="pt-8 pb-24 bg-accent/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Скачай бесплатно книгу
              </h2>
              <p className="text-center text-lg text-muted-foreground mb-8">
                "35 способов получить клиентов без затрат"
              </p>
              <Card className="p-8">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="flex-shrink-0">
                    <img 
                      src="https://cdn.poehali.dev/files/50545208-cfc4-4de4-9ef8-48f2f1ac35eb.jpg" 
                      alt="35 способов получить клиентов без затрат"
                      className="w-48 h-auto rounded-lg shadow-lg"
                    />
                  </div>
                  <form onSubmit={handleBookDownload} className="flex-1 space-y-4 w-full">
                    <div>
                      <Input
                        placeholder="Ваше имя"
                        value={bookFormData.name}
                        onChange={(e) => setBookFormData({ ...bookFormData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Email для получения книги"
                        value={bookFormData.email}
                        onChange={(e) => setBookFormData({ ...bookFormData, email: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Input
                        type="tel"
                        placeholder="Телефон"
                        value={bookFormData.phone}
                        onChange={(e) => setBookFormData({ ...bookFormData, phone: e.target.value })}
                        required
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                      size="lg"
                    >
                      <Icon name="Download" size={20} className="mr-2" />
                      Скачать книгу бесплатно
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">
                      Отправляя форму, вы соглашаетесь с политикой конфиденциальности
                    </p>
                  </form>
                </div>
              </Card>
            </div>
          </div>
        </section>

        <section id="results" className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              Результаты в цифрах
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="p-8 text-center hover:shadow-lg transition-shadow animate-scale-in">
                <div className="text-6xl font-bold text-accent mb-4">+127%</div>
                <p className="text-lg text-muted-foreground">
                  Средний рост прибыли клиентов
                </p>
              </Card>
              <Card className="p-8 text-center hover:shadow-lg transition-shadow animate-scale-in" style={{ animationDelay: '0.1s' }}>
                <div className="text-6xl font-bold text-accent mb-4">27</div>
                <p className="text-lg text-muted-foreground">
                  Лет практического опыта
                </p>
              </Card>
              <Card className="p-8 text-center hover:shadow-lg transition-shadow animate-scale-in" style={{ animationDelay: '0.2s' }}>
                <div className="text-6xl font-bold text-accent mb-4">500+</div>
                <p className="text-lg text-muted-foreground">
                  Успешных внедрений
                </p>
              </Card>
            </div>
          </div>
        </section>

        <section id="services" className="py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              Услуги консалтинга
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="p-8 hover:shadow-lg transition-shadow">
                <Icon name="Users" size={48} className="text-accent mb-4" />
                <h3 className="text-2xl font-bold mb-4">
                  Обучение персонала
                </h3>
                <p className="text-muted-foreground mb-4">
                  Эффективные техники продаж и работы с клиентами. Повышение квалификации сотрудников для максимальной конверсии.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-accent mt-0.5 flex-shrink-0" />
                    <span>Активные продажи и работа с возражениями</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-accent mt-0.5 flex-shrink-0" />
                    <span>Психология клиента и мотивация покупки</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-accent mt-0.5 flex-shrink-0" />
                    <span>Построение долгосрочных отношений</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8 hover:shadow-lg transition-shadow">
                <Icon name="TrendingUp" size={48} className="text-accent mb-4" />
                <h3 className="text-2xl font-bold mb-4">
                  Увеличение продаж
                </h3>
                <p className="text-muted-foreground mb-4">
                  Проверенные методы привлечения клиентов и увеличения среднего чека. Аудит текущих процессов и внедрение улучшений.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-accent mt-0.5 flex-shrink-0" />
                    <span>Анализ воронки продаж и точек роста</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-accent mt-0.5 flex-shrink-0" />
                    <span>Оптимизация ассортимента и ценообразования</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-accent mt-0.5 flex-shrink-0" />
                    <span>Разработка программы лояльности</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8 hover:shadow-lg transition-shadow">
                <Icon name="Target" size={48} className="text-accent mb-4" />
                <h3 className="text-2xl font-bold mb-4">
                  Привлечение клиентов
                </h3>
                <p className="text-muted-foreground mb-4">
                  Стратегии маркетинга для розничного бизнеса. Как привлекать целевую аудиторию с минимальными затратами.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-accent mt-0.5 flex-shrink-0" />
                    <span>Локальный маркетинг и BTL-активности</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-accent mt-0.5 flex-shrink-0" />
                    <span>Цифровые каналы привлечения</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-accent mt-0.5 flex-shrink-0" />
                    <span>Партнёрские программы и кросс-продажи</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8 hover:shadow-lg transition-shadow">
                <Icon name="LineChart" size={48} className="text-accent mb-4" />
                <h3 className="text-2xl font-bold mb-4">
                  Системный рост
                </h3>
                <p className="text-muted-foreground mb-4">
                  Построение масштабируемой системы продаж. Внедрение процессов, которые работают без вашего постоянного участия.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-accent mt-0.5 flex-shrink-0" />
                    <span>Стандартизация процессов обслуживания</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-accent mt-0.5 flex-shrink-0" />
                    <span>KPI и система мотивации персонала</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-accent mt-0.5 flex-shrink-0" />
                    <span>Автоматизация рутинных операций</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        <section id="about" className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Обо мне
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                27 лет в розничном бизнесе. Прошёл путь от продавца до владельца сети магазинов. 
                Знаю все подводные камни и секретные приёмы, которые реально работают.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Помог более 500 предпринимателям увеличить прибыль в среднем на 127%. 
                Не теория из книг, а только проверенные на практике методы.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Icon name="Award" size={24} className="text-accent" />
                  <span>Сертифицированный бизнес-тренер</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Icon name="BookOpen" size={24} className="text-accent" />
                  <span>Автор 3 книг по продажам</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
                Получить консультацию
              </h2>
              <p className="text-center text-muted-foreground mb-12">
                Оставьте заявку, и я свяжусь с вами в течение 24 часов
              </p>
              <Card className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Имя</label>
                    <Input
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Телефон</label>
                    <Input
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Сообщение</label>
                    <Textarea
                      placeholder="Расскажите о вашем бизнесе и задачах..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                    size="lg"
                  >
                    Отправить заявку
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <nav className="bg-card border-t border-border py-6">
        <div className="container mx-auto px-4 flex items-center justify-center">
          <div className="flex gap-8">
            <a href="#services" className="text-sm hover:text-accent transition-colors">Услуги</a>
            <a href="#results" className="text-sm hover:text-accent transition-colors">Результаты</a>
            <a href="#about" className="text-sm hover:text-accent transition-colors">Обо мне</a>
            <a href="#contact" className="text-sm hover:text-accent transition-colors">Контакты</a>
          </div>
        </div>
      </nav>

      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">БизнесРост</h3>
              <p className="text-sm opacity-80">
                Консалтинг по увеличению прибыли розничного бизнеса
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm opacity-80">
                <p>Email: info@biznesrost.ru</p>
                <p>Телефон: +7 (999) 123-45-67</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Документы</h4>
              <div className="space-y-2 text-sm opacity-80">
                <a href="#" className="block hover:opacity-100 transition-opacity">Оферта</a>
                <a href="#" className="block hover:opacity-100 transition-opacity">Политика конфиденциальности</a>
              </div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-80">
            © 2025 БизнесРост. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}