import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const services = [
    {
      icon: 'Zap',
      title: 'Ударно-волновая терапия',
      description: 'Современный метод лечения заболеваний опорно-двигательного аппарата без операции'
    },
    {
      icon: 'Magnet',
      title: 'Магнитотерапия',
      description: 'Физиотерапевтическая процедура для снятия боли и ускорения восстановления тканей'
    },
    {
      icon: 'Hand',
      title: 'Лечебный массаж',
      description: 'Профессиональный массаж для лечения заболеваний позвоночника и суставов'
    },
    {
      icon: 'Sparkles',
      title: 'Иглоукалывание',
      description: 'Традиционная восточная медицина для комплексного лечения болевых синдромов'
    }
  ];

  const specialists = [
    {
      name: 'Иванов Сергей Петрович',
      specialty: 'Врач-травматолог высшей категории',
      experience: '15 лет опыта',
      image: 'https://cdn.poehali.dev/projects/7a3184d0-44d4-42af-bd2b-c94e918e6b50/files/3226137a-8684-4ee5-8f0d-05e191b8e388.jpg'
    },
    {
      name: 'Петрова Анна Михайловна',
      specialty: 'Врач-ортопед, специалист по ударно-волновой терапии',
      experience: '12 лет опыта',
      image: 'https://cdn.poehali.dev/projects/7a3184d0-44d4-42af-bd2b-c94e918e6b50/files/3226137a-8684-4ee5-8f0d-05e191b8e388.jpg'
    },
    {
      name: 'Сидоров Владимир Александрович',
      specialty: 'Мануальный терапевт, специалист по иглоукалыванию',
      experience: '10 лет опыта',
      image: 'https://cdn.poehali.dev/projects/7a3184d0-44d4-42af-bd2b-c94e918e6b50/files/3226137a-8684-4ee5-8f0d-05e191b8e388.jpg'
    }
  ];

  const documents = [
    { name: 'Лицензия на медицинскую деятельность', type: 'Лицензия' },
    { name: 'Сертификат соответствия ISO 9001', type: 'Сертификат' },
    { name: 'Разрешение на использование медоборудования', type: 'Разрешение' },
    { name: 'Санитарно-эпидемиологическое заключение', type: 'Заключение' }
  ];

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img src="https://cdn.poehali.dev/files/457fb5c5-825d-420d-8004-59eb112e128e.jpg" alt="Анатомия Здоровья" className="h-12 w-auto" />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-primary">АНАТОМИЯ</span>
                <span className="text-sm text-muted-foreground tracking-wider">ЗДОРОВЬЯ</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <button onClick={() => scrollToSection('home')} className="text-sm font-medium hover:text-primary transition-colors">
                Главная
              </button>
              <button onClick={() => scrollToSection('services')} className="text-sm font-medium hover:text-primary transition-colors">
                Услуги
              </button>
              <button onClick={() => scrollToSection('specialists')} className="text-sm font-medium hover:text-primary transition-colors">
                Специалисты
              </button>
              <button onClick={() => scrollToSection('about')} className="text-sm font-medium hover:text-primary transition-colors">
                О клинике
              </button>
              <button onClick={() => scrollToSection('documents')} className="text-sm font-medium hover:text-primary transition-colors">
                Документы
              </button>
              <button onClick={() => scrollToSection('contacts')} className="text-sm font-medium hover:text-primary transition-colors">
                Контакты
              </button>
              <Dialog>
                <DialogTrigger asChild>
                  <Button>Онлайн-запись</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Записаться на прием</DialogTitle>
                    <DialogDescription>
                      Заполните форму и мы свяжемся с вами для подтверждения записи
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name">Ваше имя</Label>
                      <Input id="name" placeholder="Иван Иванов" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Телефон</Label>
                      <Input id="phone" placeholder="+7 (999) 123-45-67" />
                    </div>
                    <div>
                      <Label htmlFor="service">Выберите услугу</Label>
                      <Input id="service" placeholder="Ударно-волновая терапия" />
                    </div>
                    <div>
                      <Label htmlFor="message">Комментарий</Label>
                      <Textarea id="message" placeholder="Опишите вашу проблему..." />
                    </div>
                    <Button className="w-full">Отправить заявку</Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="relative bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/5 py-20 bg-[length:200%_200%] animate-gradient">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-slide-up">
                <h1 className="text-5xl font-bold text-foreground leading-tight">
                  Клиника травматологии и ортопедии
                </h1>
                <p className="text-xl text-muted-foreground">
                  Современные методы лечения заболеваний опорно-двигательного аппарата. 
                  Профессиональная помощь опытных специалистов.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button size="lg" className="text-lg px-8">
                        Записаться на прием
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle>Записаться на прием</DialogTitle>
                        <DialogDescription>
                          Заполните форму и мы свяжемся с вами для подтверждения записи
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="name2">Ваше имя</Label>
                          <Input id="name2" placeholder="Иван Иванов" />
                        </div>
                        <div>
                          <Label htmlFor="phone2">Телефон</Label>
                          <Input id="phone2" placeholder="+7 (999) 123-45-67" />
                        </div>
                        <div>
                          <Label htmlFor="service2">Выберите услугу</Label>
                          <Input id="service2" placeholder="Ударно-волновая терапия" />
                        </div>
                        <div>
                          <Label htmlFor="message2">Комментарий</Label>
                          <Textarea id="message2" placeholder="Опишите вашу проблему..." />
                        </div>
                        <Button className="w-full">Отправить заявку</Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                  <Button size="lg" variant="outline" className="text-lg px-8" onClick={() => scrollToSection('services')}>
                    Наши услуги
                  </Button>
                </div>
                <div className="grid grid-cols-3 gap-6 pt-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">15+</div>
                    <div className="text-sm text-muted-foreground">лет опыта</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">5000+</div>
                    <div className="text-sm text-muted-foreground">пациентов</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">98%</div>
                    <div className="text-sm text-muted-foreground">успешных случаев</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://cdn.poehali.dev/projects/7a3184d0-44d4-42af-bd2b-c94e918e6b50/files/6298ef87-3191-4e61-a8c5-6755407712bb.jpg" 
                  alt="Клиника" 
                  className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-20 bg-gradient-to-b from-white to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl font-bold text-foreground mb-4">Наши услуги</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Современные методы лечения заболеваний опорно-двигательного аппарата
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 hover:-translate-y-2 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 animate-pulse-slow">
                      <Icon name={service.icon as any} className="text-white" size={24} />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-12">
              <Card className="border-2 border-primary/20">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <img 
                      src="https://cdn.poehali.dev/projects/7a3184d0-44d4-42af-bd2b-c94e918e6b50/files/6db95eab-5ca5-452a-8c4f-94981729a6bc.jpg" 
                      alt="Оборудование" 
                      className="w-48 h-32 object-cover rounded-lg"
                    />
                    <div>
                      <CardTitle className="text-2xl mb-2">Современное оборудование</CardTitle>
                      <CardDescription className="text-base">
                        В нашей клинике используется новейшее медицинское оборудование для диагностики и лечения. 
                        Все процедуры проводятся на сертифицированном оборудовании ведущих мировых производителей.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        <section id="specialists" className="py-20 bg-gradient-to-b from-secondary/5 to-primary/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">Наши специалисты</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Команда опытных врачей с высшей квалификацией
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {specialists.map((specialist, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in" style={{animationDelay: `${index * 0.15}s`}}>
                  <img 
                    src={specialist.image} 
                    alt={specialist.name} 
                    className="w-full h-64 object-cover"
                  />
                  <CardHeader>
                    <CardTitle className="text-xl">{specialist.name}</CardTitle>
                    <CardDescription className="text-base">
                      {specialist.specialty}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="Award" size={16} />
                      <span>{specialist.experience}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-foreground mb-8 text-center">О клинике</h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  Наша клиника специализируется на лечении заболеваний опорно-двигательного аппарата 
                  с использованием современных методов физиотерапии и мануальной терапии.
                </p>
                <p>
                  Мы предлагаем комплексный подход к лечению, включающий диагностику, 
                  индивидуальный подбор терапии и реабилитацию. Наши специалисты регулярно 
                  проходят обучение и повышение квалификации в ведущих медицинских центрах России и зарубежья.
                </p>
                <div className="grid md:grid-cols-2 gap-6 pt-8">
                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                          <Icon name="Check" className="text-white" size={20} />
                        </div>
                        <CardTitle>Индивидуальный подход</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        Каждому пациенту подбирается персональная программа лечения
                      </CardDescription>
                    </CardContent>
                  </Card>
                  <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                          <Icon name="Shield" className="text-white" size={20} />
                        </div>
                        <CardTitle>Безопасность</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        Все процедуры проводятся с соблюдением медицинских стандартов
                      </CardDescription>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="documents" className="py-20 bg-gradient-to-b from-white to-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-foreground mb-8 text-center">Документы и лицензии</h2>
              <p className="text-center text-muted-foreground mb-12 text-lg">
                Наша клиника имеет все необходимые разрешения и сертификаты для оказания медицинских услуг
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {documents.map((doc, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                          <Icon name="FileText" className="text-white" size={24} />
                        </div>
                        <div>
                          <CardTitle className="text-lg mb-1">{doc.name}</CardTitle>
                          <CardDescription>{doc.type}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Button variant="outline" size="sm" className="w-full">
                        <Icon name="Download" size={16} className="mr-2" />
                        Скачать документ
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contacts" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Контакты</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <Icon name="MapPin" className="text-primary" size={24} />
                        <CardTitle>Адрес</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">г. Москва, ул. Примерная, д. 123</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <Icon name="Phone" className="text-primary" size={24} />
                        <CardTitle>Телефон</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <Icon name="Mail" className="text-primary" size={24} />
                        <CardTitle>Email</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">info@medcenter.ru</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <Icon name="Clock" className="text-primary" size={24} />
                        <CardTitle>Режим работы</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">Пн-Пт: 8:00 - 20:00</p>
                      <p className="text-muted-foreground">Сб-Вс: 9:00 - 18:00</p>
                    </CardContent>
                  </Card>
                </div>
                <div>
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle>Обратная связь</CardTitle>
                      <CardDescription>Оставьте ваш вопрос и мы свяжемся с вами</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <Label htmlFor="contact-name">Имя</Label>
                        <Input id="contact-name" placeholder="Ваше имя" />
                      </div>
                      <div>
                        <Label htmlFor="contact-phone">Телефон</Label>
                        <Input id="contact-phone" placeholder="+7 (999) 123-45-67" />
                      </div>
                      <div>
                        <Label htmlFor="contact-message">Сообщение</Label>
                        <Textarea id="contact-message" placeholder="Ваш вопрос..." rows={5} />
                      </div>
                      <Button className="w-full">Отправить</Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img src="https://cdn.poehali.dev/files/457fb5c5-825d-420d-8004-59eb112e128e.jpg" alt="Анатомия Здоровья" className="h-12 w-auto" />
                <div className="flex flex-col">
                  <span className="text-xl font-bold">АНАТОМИЯ</span>
                  <span className="text-sm tracking-wider opacity-80">ЗДОРОВЬЯ</span>
                </div>
              </div>
              <p className="text-background/80">
                Современная клиника травматологии и ортопедии с профессиональным подходом к каждому пациенту
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Навигация</h3>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('home')} className="text-background/80 hover:text-background transition-colors">Главная</button></li>
                <li><button onClick={() => scrollToSection('services')} className="text-background/80 hover:text-background transition-colors">Услуги</button></li>
                <li><button onClick={() => scrollToSection('specialists')} className="text-background/80 hover:text-background transition-colors">Специалисты</button></li>
                <li><button onClick={() => scrollToSection('contacts')} className="text-background/80 hover:text-background transition-colors">Контакты</button></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Контакты</h3>
              <ul className="space-y-2 text-background/80">
                <li>г. Москва, ул. Примерная, д. 123</li>
                <li>+7 (495) 123-45-67</li>
                <li>info@medcenter.ru</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center text-background/60">
            <p>&copy; 2024 МедЦентр Ортопедия. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;