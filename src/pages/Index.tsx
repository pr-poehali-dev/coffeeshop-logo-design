import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const menuItems = [
    {
      category: 'Кофе',
      items: [
        { name: 'Эспрессо', price: '150₽', desc: 'Классический итальянский кофе' },
        { name: 'Капучино', price: '200₽', desc: 'Эспрессо с молочной пенкой' },
        { name: 'Латте', price: '220₽', desc: 'Нежный кофе с молоком' },
        { name: 'Американо', price: '180₽', desc: 'Мягкий кофе с водой' },
      ],
    },
    {
      category: 'Десерты',
      items: [
        { name: 'Чизкейк', price: '280₽', desc: 'Классический нью-йоркский' },
        { name: 'Шоколадный торт', price: '250₽', desc: 'Влажный бельгийский шоколад' },
        { name: 'Круассан', price: '150₽', desc: 'Французская выпечка' },
        { name: 'Макарон', price: '100₽', desc: 'Разные вкусы' },
      ],
    },
    {
      category: 'Детское меню',
      items: [
        { name: 'Какао', price: '150₽', desc: 'На молоке с маршмеллоу' },
        { name: 'Молочный коктейль', price: '200₽', desc: 'Ванильный или шоколадный' },
        { name: 'Панкейки', price: '250₽', desc: 'С ягодами и сиропом' },
        { name: 'Мини-пончики', price: '180₽', desc: 'Набор из 5 штук' },
      ],
    },
  ];

  const promos = [
    {
      title: 'Семейный завтрак',
      desc: 'Два кофе + два десерта со скидкой 20%',
      discount: '-20%',
    },
    {
      title: 'Детский день',
      desc: 'При заказе взрослого напитка — детский напиток в подарок',
      discount: '1+1',
    },
    {
      title: 'Счастливые часы',
      desc: 'С 15:00 до 17:00 скидка 15% на все меню',
      discount: '-15%',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src="https://cdn.poehali.dev/projects/072831bd-b901-4cee-b52e-b83b209d210c/files/9dd5ef4a-4c0a-4c4d-a832-aefb9afd7cc8.jpg" 
                alt="Логотип кофейни" 
                className="h-12 w-12 rounded-full object-cover"
              />
              <h1 className="text-2xl font-bold text-foreground">Кофейня</h1>
            </div>
            <div className="hidden md:flex gap-6">
              {['home', 'menu', 'delivery', 'promos'].map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`text-lg transition-colors ${
                    activeSection === section
                      ? 'text-primary font-semibold'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'menu' && 'Меню'}
                  {section === 'delivery' && 'Доставка'}
                  {section === 'promos' && 'Акции'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        {activeSection === 'home' && (
          <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('https://cdn.poehali.dev/projects/072831bd-b901-4cee-b52e-b83b209d210c/files/73e7cb9f-c303-406e-8c50-287eaca1370f.jpg')`,
              }}
            >
              <div className="absolute inset-0 bg-black/60" />
            </div>
            <div className="relative z-10 text-center px-4 animate-fade-in">
              <h2 className="text-6xl md:text-7xl font-bold text-secondary mb-6">
                Уютное место для всей семьи
              </h2>
              <p className="text-xl md:text-2xl text-secondary/90 mb-8 max-w-2xl mx-auto">
                Качественный кофе, домашние десерты и атмосфера тепла
              </p>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6"
                onClick={() => setActiveSection('menu')}
              >
                Посмотреть меню
              </Button>
            </div>
          </section>
        )}

        {activeSection === 'menu' && (
          <section className="container mx-auto px-4 py-16 animate-fade-in">
            <h2 className="text-5xl font-bold text-center mb-12 text-foreground">Наше меню</h2>
            <div className="grid gap-12">
              {menuItems.map((category) => (
                <div key={category.category}>
                  <h3 className="text-3xl font-semibold mb-6 text-secondary border-b border-border pb-3">
                    {category.category}
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {category.items.map((item) => (
                      <Card key={item.name} className="bg-card border-border hover:border-primary transition-all hover-scale">
                        <CardContent className="p-6">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="text-xl font-semibold text-foreground">{item.name}</h4>
                            <span className="text-2xl font-bold text-primary">{item.price}</span>
                          </div>
                          <p className="text-muted-foreground">{item.desc}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeSection === 'delivery' && (
          <section className="container mx-auto px-4 py-16 animate-fade-in">
            <h2 className="text-5xl font-bold text-center mb-12 text-foreground">Доставка</h2>
            <div className="max-w-3xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <Card className="bg-card border-border text-center p-6">
                  <Icon name="Clock" size={48} className="mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2 text-foreground">30-40 минут</h3>
                  <p className="text-muted-foreground">Среднее время доставки</p>
                </Card>
                <Card className="bg-card border-border text-center p-6">
                  <Icon name="MapPin" size={48} className="mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2 text-foreground">До 5 км</h3>
                  <p className="text-muted-foreground">Бесплатная доставка</p>
                </Card>
                <Card className="bg-card border-border text-center p-6">
                  <Icon name="ShoppingBag" size={48} className="mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2 text-foreground">От 500₽</h3>
                  <p className="text-muted-foreground">Минимальный заказ</p>
                </Card>
              </div>

              <Card className="bg-card border-border p-8">
                <h3 className="text-2xl font-semibold mb-6 text-foreground">Как заказать</h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Позвоните нам</h4>
                      <p className="text-muted-foreground">+7 (999) 123-45-67</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Укажите адрес и состав заказа</h4>
                      <p className="text-muted-foreground">Наш оператор поможет с выбором</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Ожидайте курьера</h4>
                      <p className="text-muted-foreground">Оплата наличными или картой при получении</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </section>
        )}

        {activeSection === 'promos' && (
          <section className="container mx-auto px-4 py-16 animate-fade-in">
            <h2 className="text-5xl font-bold text-center mb-12 text-foreground">Акции</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {promos.map((promo) => (
                <Card key={promo.title} className="bg-card border-border overflow-hidden hover-scale">
                  <div className="bg-primary text-primary-foreground text-center py-4">
                    <span className="text-4xl font-bold">{promo.discount}</span>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-semibold mb-3 text-foreground">{promo.title}</h3>
                    <p className="text-muted-foreground">{promo.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-12 text-center">
              <img 
                src="https://cdn.poehali.dev/projects/072831bd-b901-4cee-b52e-b83b209d210c/files/ec8db93e-3abc-4d45-8928-5ce77dd97225.jpg"
                alt="Кофе и десерты"
                className="w-full max-w-3xl mx-auto rounded-lg shadow-2xl"
              />
            </div>
          </section>
        )}
      </main>

      <footer className="bg-card border-t border-border mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Контакты</h3>
              <div className="space-y-2 text-muted-foreground">
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={20} />
                  +7 (999) 123-45-67
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={20} />
                  info@coffeeshop.ru
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Адрес</h3>
              <p className="text-muted-foreground flex items-start gap-2">
                <Icon name="MapPin" size={20} className="mt-1" />
                г. Москва, ул. Примерная, д. 123
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Режим работы</h3>
              <p className="text-muted-foreground flex items-center gap-2">
                <Icon name="Clock" size={20} />
                Ежедневно: 8:00 - 22:00
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
            <p>© 2024 Кофейня. Уютное место для всей семьи</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
