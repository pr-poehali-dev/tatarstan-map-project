import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import YandexMap from '@/components/YandexMap';

const Index = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToMap = () => {
    mapRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const attractions = [
    {
      name: 'Казанский Кремль',
      description: 'Историческая крепость и главная достопримечательность Казани. Включает башню Сююмбике, мечеть Кул-Шариф и Благовещенский собор.',
      year: 'XVI век',
      status: 'unesco'
    },
    {
      name: 'Мечеть Кул-Шариф',
      description: 'Главная мечеть Татарстана и один из крупнейших мусульманских храмов Европы. Восстановлена в 2005 году.',
      year: '2005',
      status: 'active'
    },
    {
      name: 'Храм всех религий',
      description: 'Уникальный архитектурный комплекс, объединяющий элементы разных мировых религий.',
      year: '1994',
      status: 'active'
    },
    {
      name: 'Раифский монастырь',
      description: 'Старейший действующий мужской монастырь в Татарстане, расположен в живописном месте на берегу озера.',
      year: '1613',
      status: 'active'
    },
    {
      name: 'Свияжск',
      description: 'Город-остров с богатой историей, основанный Иваном Грозным. Включен в список ЮНЕСКО.',
      year: '1551',
      status: 'unesco'
    }
  ];

  const news = [
    {
      title: 'Реставрация башни Сююмбике',
      description: 'Начались работы по укреплению фундамента знаменитой падающей башни Казанского Кремля.',
      date: '15 октября 2024',
      type: 'renovation'
    },
    {
      title: 'Новая экспозиция в музее',
      description: 'В Национальном музее РТ открылась выставка, посвященная истории татарского народа.',
      date: '3 ноября 2024',
      type: 'event'
    },
    {
      title: 'Благоустройство территории',
      description: 'Завершена реконструкция парковой зоны вокруг Раифского монастыря.',
      date: '28 октября 2024',
      type: 'improvement'
    },
    {
      title: 'Цифровизация музеев',
      description: 'В Свияжске запущены AR-экскурсии по историческим местам острова.',
      date: '10 ноября 2024',
      type: 'tech'
    }
  ];



  return (
    <div className="min-h-screen bg-background">
      {showWelcome && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-primary/95 animate-fade-out">
          <div className="text-center animate-slide-up">
            <h1 className="text-6xl font-bold text-primary-foreground mb-4">
              Изучаем Татарстан
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Познакомьтесь с историей и культурой республики
            </p>
          </div>
        </div>
      )}

      <nav className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Button variant="ghost" onClick={scrollToTop} className="font-semibold">
            <Icon name="Home" className="mr-2 h-5 w-5" />
            Главная
          </Button>
          
          <h2 className="text-2xl font-bold text-primary">Изучаем Татарстан</h2>
          
          <Button variant="ghost" onClick={() => window.location.href = '#about'} className="font-semibold">
            О нас
            <Icon name="Info" className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </nav>

      <main className="container py-12">
        <div className="mb-12 text-center">
          <Button 
            size="lg" 
            onClick={scrollToMap}
            className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Icon name="Map" className="mr-3 h-6 w-6" />
            Перейти к карте
            <Icon name="ChevronDown" className="ml-3 h-6 w-6" />
          </Button>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <section className="animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <Icon name="MapPin" className="h-8 w-8 text-accent" />
              <h2 className="text-3xl font-bold">Достопримечательности</h2>
            </div>
            <div className="space-y-4">
              {attractions.map((attraction, index) => (
                <Card 
                  key={index} 
                  className="hover:shadow-lg transition-shadow duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-xl">{attraction.name}</CardTitle>
                      {attraction.status === 'unesco' ? (
                        <Badge variant="secondary" className="ml-2">
                          <Icon name="Award" className="h-3 w-3 mr-1" />
                          ЮНЕСКО
                        </Badge>
                      ) : (
                        <Badge variant="outline" className="ml-2">
                          <Icon name="Check" className="h-3 w-3 mr-1" />
                          Активно
                        </Badge>
                      )}
                    </div>
                    <CardDescription className="text-sm text-muted-foreground">
                      Основано: {attraction.year}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/80">{attraction.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="animate-fade-in" style={{ animationDelay: '200ms' }}>
            <div className="flex items-center gap-3 mb-6">
              <Icon name="Newspaper" className="h-8 w-8 text-accent" />
              <h2 className="text-3xl font-bold">Новости</h2>
            </div>
            <div className="space-y-4">
              {news.map((item, index) => (
                <Card 
                  key={index}
                  className="hover:shadow-lg transition-shadow duration-300"
                  style={{ animationDelay: `${(index + 5) * 100}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                      <Badge 
                        variant={
                          item.type === 'renovation' ? 'destructive' :
                          item.type === 'event' ? 'default' :
                          item.type === 'improvement' ? 'secondary' : 'outline'
                        }
                        className="ml-2 shrink-0"
                      >
                        {item.type === 'renovation' && <Icon name="Wrench" className="h-3 w-3 mr-1" />}
                        {item.type === 'event' && <Icon name="Calendar" className="h-3 w-3 mr-1" />}
                        {item.type === 'improvement' && <Icon name="Sparkles" className="h-3 w-3 mr-1" />}
                        {item.type === 'tech' && <Icon name="Smartphone" className="h-3 w-3 mr-1" />}
                        {item.type === 'renovation' ? 'Ремонт' :
                         item.type === 'event' ? 'Событие' :
                         item.type === 'improvement' ? 'Благоустройство' : 'Технологии'}
                      </Badge>
                    </div>
                    <CardDescription className="text-sm text-muted-foreground">
                      {item.date}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/80">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>

        <section ref={mapRef} className="mb-16 animate-fade-in" style={{ animationDelay: '400ms' }}>
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-3">Интерактивная карта Татарстана</h2>
            <p className="text-muted-foreground text-lg">
              Исследуйте главные города и достопримечательности республики
            </p>
          </div>
          
          <YandexMap />
        </section>

        <section id="about" className="text-center py-16 animate-fade-in" style={{ animationDelay: '600ms' }}>
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-3xl">О нас</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-6xl mb-4">🐹</p>
              <p className="text-lg text-muted-foreground">фарид привет!</p>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="border-t bg-muted/30 py-8 mt-16">
        <div className="container text-center text-muted-foreground">
          <p>© 2024 Изучаем Татарстан. Образовательный проект.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;