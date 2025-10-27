import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
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

  const [isBookFormOpen, setIsBookFormOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<string | null>(null);

  const articles = {
    mistakes: {
      title: '10 ошибок владельцев магазинов, которые убивают продажи',
      content: `Разбираем самые распространённые ошибки владельцев розничных магазинов и показываем, как их исправить.

**1. Отсутствие обучения персонала**
Большинство владельцев думают, что продавец сам научится продавать. Это не так. Без системного обучения вы теряете 30-50% потенциальной прибыли.

**2. Игнорирование повторных продаж**
Привлечь нового клиента в 5-7 раз дороже, чем продать существующему. Программа лояльности окупается за 2-3 месяца.

**3. Неправильное ценообразование**
Многие ставят цены "как у конкурентов" или "себестоимость + 30%". Правильное ценообразование учитывает ценность для клиента.

**4. Отсутствие стандартов обслуживания**
Каждый продавец работает по-своему. Результат — непредсказуемый сервис и потеря клиентов.

**5. Игнорирование аналитики**
Не знаете средний чек, конверсию, самые продаваемые товары? Вы управляете бизнесом вслепую.

Продолжение статьи доступно в полной версии книги.`
    },
    training: {
      title: 'Как обучить продавцов продавать в 2 раза больше',
      content: `Пошаговая система обучения персонала, которая увеличивает продажи минимум на 40%.

**Шаг 1. Диагностика текущего уровня**
Проведите тайную покупку. Запишите, как работают продавцы сейчас. Выявите слабые места.

**Шаг 2. Создайте скрипты продаж**
Не импровизация, а чёткие алгоритмы для типовых ситуаций. Скрипты должны быть гибкими, но структурированными.

**Шаг 3. Обучение через ролевые игры**
Теория без практики не работает. Отрабатывайте скрипты в безопасной среде до автоматизма.

**Шаг 4. Система наставничества**
Лучшие продавцы обучают новичков. Это мотивирует обе стороны и передаёт корпоративную культуру.

**Шаг 5. Постоянный контроль качества**
Еженедельные разборы реальных продаж. Что сработало? Что можно улучшить?

**Шаг 6. Мотивация и геймификация**
Связывайте бонусы с конкретными показателями. Делайте результаты видимыми для всей команды.

Полная методика с шаблонами и чек-листами — в книге "35 способов получить клиентов без затрат".`
    },
    loyalty: {
      title: 'Программа лояльности: делаем правильно',
      content: `Программа лояльности может стать мощным инструментом роста или бесполезной тратой денег. Разница — в деталях.

**Что НЕ работает:**
- Скидка 5% после 10 покупок (слишком маленькая мотивация)
- Сложные условия начисления бонусов (клиенты не понимают)
- Одинаковые бонусы для всех (нет персонализации)

**Что работает:**

**1. Мгновенная ценность**
Дайте бонус сразу при регистрации. Клиент должен почувствовать выгоду в первые 5 минут.

**2. Понятная механика**
"Потратил 1000₽ — получил 100 бонусов = 100₽ к следующей покупке". Просто и ясно.

**3. Уровни и статусы**
Бронза → Серебро → Золото. Людям нравится повышать статус. Каждый уровень даёт больше привилегий.

**4. Эксклюзивность**
Закрытые распродажи только для участников программы. Ранний доступ к новинкам.

**5. Эмоциональная связь**
Поздравления с днём рождения + подарок. Персональные предложения на основе истории покупок.

**6. Напоминания**
SMS/Email: "У вас 500 бонусов, сгорают через 5 дней". Это возвращает клиентов в магазин.

Примеры успешных программ лояльности с цифрами ROI — в полной версии материалов.`
    },
    noads: {
      title: '5 способов привлечь клиентов без рекламы',
      content: `Реклама дорогая и не всегда эффективна. Есть способы привлечения клиентов, которые работают лучше и стоят дешевле.

**1. Партнёрский маркетинг**
Найдите бизнесы с той же аудиторией, но без конкуренции. Пример: магазин детской одежды + детская парикмахерская.

Схема: Вы даёте скидку 10% клиентам партнёра, партнёр — вашим клиентам. Оба получаете новых покупателей бесплатно.

**2. Реферальная программа**
"Приведи друга — получи 500₽ на счёт". Клиент становится вашим продавцом.

Важно: Бонус должен получить и тот, кто привёл, и тот, кого привели. Иначе не работает.

**3. Локальные активности**
Мастер-классы, презентации, участие в районных мероприятиях. Вы становитесь частью сообщества.

Пример: Магазин спорттоваров проводит бесплатную зарядку в парке по субботам. 20-30 новых клиентов каждую неделю.

**4. Контент-маркетинг**
Полезные статьи, видео, чек-листы по вашей теме. Люди находят вас через поиск, когда ищут решение проблемы.

**5. Сарафанное радио (но правильное)**
Просто хороший сервис не создаёт сарафанное радио. Нужен WOW-эффект.

Примеры:
- Неожиданный подарок к покупке
- Решение проблемы клиента сверх ожиданий
- Персональное внимание и забота

Каждый способ подробно разобран с примерами внедрения в книге "35 способов получить клиентов без затрат".`
    }
  };

  const handleBookDownload = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://functions.poehali.dev/f40e43fc-4a13-468f-8686-75b97822d6bc', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookFormData)
      });
      
      const data = await response.json();
      
      if (response.ok && data.success) {
        alert('Письмо со ссылкой на книгу отправлено на ваш email!');
        setIsBookFormOpen(false);
        setBookFormData({ name: '', email: '', phone: '' });
      } else {
        alert('Ошибка отправки: ' + (data.error || 'Попробуйте позже'));
      }
    } catch (error) {
      alert('Ошибка сети. Проверьте подключение и попробуйте снова.');
      console.error('Error:', error);
    }
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
                <span className="font-bold">Приёмы, методы и секретные фишки</span><br />
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
              <a href="#footer-menu" className="text-base font-medium hover:text-accent transition-colors">
                Меню
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
                  <div className="flex-1 w-full">
                    {!isBookFormOpen ? (
                      <div className="text-center">
                        <Button 
                          onClick={() => setIsBookFormOpen(true)}
                          className="bg-accent hover:bg-accent/90 text-accent-foreground"
                          size="lg"
                        >
                          <Icon name="Download" size={20} className="mr-2" />
                          Скачать книгу бесплатно
                        </Button>
                      </div>
                    ) : (
                      <form onSubmit={handleBookDownload} className="space-y-4 animate-fade-in">
                        <div>
                          <Input
                            type="text"
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
                            placeholder="Телефон (необязательно)"
                            value={bookFormData.phone}
                            onChange={(e) => setBookFormData({ ...bookFormData, phone: e.target.value })}
                          />
                        </div>
                        <Button 
                          type="submit" 
                          className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                          size="lg"
                        >
                          <Icon name="Download" size={20} className="mr-2" />
                          Получить книгу на email
                        </Button>
                        <p className="text-xs text-muted-foreground text-center">
                          Отправляя форму, вы соглашаетесь с политикой конфиденциальности
                        </p>
                      </form>
                    )}
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        <section id="video" className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Видео о методах увеличения продаж
              </h2>
              <p className="text-center text-muted-foreground mb-12">
                Практические советы и разборы реальных кейсов
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video bg-gradient-to-br from-sky-400 to-sky-600 flex items-center justify-center">
                    <Icon name="Play" size={64} className="text-white" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">
                      Как удвоить средний чек
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      5 проверенных техник увеличения среднего чека без давления на клиента
                    </p>
                  </div>
                </Card>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video bg-gradient-to-br from-sky-400 to-sky-600 flex items-center justify-center">
                    <Icon name="Play" size={64} className="text-white" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">
                      Работа с возражениями
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Как превращать сомнения клиентов в покупки
                    </p>
                  </div>
                </Card>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video bg-gradient-to-br from-sky-400 to-sky-600 flex items-center justify-center">
                    <Icon name="Play" size={64} className="text-white" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">
                      Мотивация персонала
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Система KPI и бонусов, которая реально работает
                    </p>
                  </div>
                </Card>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video bg-gradient-to-br from-sky-400 to-sky-600 flex items-center justify-center">
                    <Icon name="Play" size={64} className="text-white" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">
                      Привлечение клиентов
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Бюджетные способы привлечения покупателей в магазин
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section id="articles" className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Статьи и полезные материалы
              </h2>
              <p className="text-center text-muted-foreground mb-12">
                Читайте о проверенных методах роста бизнеса
              </p>
              <div className="space-y-6">
                <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setSelectedArticle('mistakes')}>
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-24 h-24 bg-gradient-to-br from-accent/20 to-accent/40 rounded-lg flex items-center justify-center">
                      <Icon name="FileText" size={40} className="text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">
                        10 ошибок владельцев магазинов, которые убивают продажи
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Разбираем типичные ошибки и показываем, как их исправить. На примерах из практики.
                      </p>
                      <span className="text-accent hover:underline text-sm font-medium">
                        Читать далее →
                      </span>
                    </div>
                  </div>
                </Card>
                <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setSelectedArticle('training')}>
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-24 h-24 bg-gradient-to-br from-accent/20 to-accent/40 rounded-lg flex items-center justify-center">
                      <Icon name="FileText" size={40} className="text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">
                        Как обучить продавцов продавать в 2 раза больше
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Пошаговая система обучения персонала. Скрипты, чек-листы и контроль результатов.
                      </p>
                      <span className="text-accent hover:underline text-sm font-medium">
                        Читать далее →
                      </span>
                    </div>
                  </div>
                </Card>
                <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setSelectedArticle('loyalty')}>
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-24 h-24 bg-gradient-to-br from-accent/20 to-accent/40 rounded-lg flex items-center justify-center">
                      <Icon name="FileText" size={40} className="text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">
                        Программа лояльности: делаем правильно
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Как создать программу лояльности, которая приносит повторные продажи и увеличивает чек.
                      </p>
                      <span className="text-accent hover:underline text-sm font-medium">
                        Читать далее →
                      </span>
                    </div>
                  </div>
                </Card>
                <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setSelectedArticle('noads')}>
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-24 h-24 bg-gradient-to-br from-accent/20 to-accent/40 rounded-lg flex items-center justify-center">
                      <Icon name="FileText" size={40} className="text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">
                        5 способов привлечь клиентов без рекламы
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Партнёрства, кросс-маркетинг, локальные активности — работающие схемы с примерами.
                      </p>
                      <span className="text-accent hover:underline text-sm font-medium">
                        Читать далее →
                      </span>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <Dialog open={selectedArticle !== null} onOpenChange={() => setSelectedArticle(null)}>
          <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold">
                {selectedArticle && articles[selectedArticle as keyof typeof articles].title}
              </DialogTitle>
            </DialogHeader>
            <div className="prose prose-sm max-w-none mt-4">
              {selectedArticle && articles[selectedArticle as keyof typeof articles].content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4 whitespace-pre-line">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="mt-6 p-4 bg-accent/10 rounded-lg">
              <p className="text-sm text-center mb-3">
                Хотите получить полную версию всех материалов?
              </p>
              <a href="#book">
                <Button 
                  onClick={() => setSelectedArticle(null)}
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                >
                  <Icon name="Download" size={20} className="mr-2" />
                  Скачать книгу бесплатно
                </Button>
              </a>
            </div>
          </DialogContent>
        </Dialog>

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

      <nav id="footer-menu" className="bg-card border-t border-border py-6">
        <div className="container mx-auto px-4 flex items-center justify-center">
          <div className="flex gap-8">
            <a href="#services" className="text-sm hover:text-accent transition-colors">Услуги</a>
            <a href="#results" className="text-sm hover:text-accent transition-colors">Результаты</a>
            <a href="#about" className="text-sm hover:text-accent transition-colors">Обо мне</a>
            <a href="#book" className="text-sm hover:text-accent transition-colors">Скачать</a>
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