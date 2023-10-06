import { Container } from "../../components/container";
import { LayoutBlock } from "../../components/layout-block";
import { Card } from "./card";

const config = [
  {
    title: "Построение\nхранилища данных",
    description:
      "Реализация проектов построения корпоративных хранилищ (Data Warehouse) и хранилищ Big Data на основе российского MDM/ETL решения Combyx, а так же с использованием open-source технологий.",
    icon: "/services/image-1.png",
  },
  {
    title: "Внедрение бизнес-аналитики\nи корпоративной отчетности",
    description:
      "Реализация комплексных проектов и решение локальных задач, внедрение и развитие корпоративной бизнес-аналитики, от CEO дашборда до операционных показателей любых бизнес-направлений фармкомпаний. Разрабатываем методологию анализа бизнес и операционных показателей, консолидируем сырые данные, преобразуем и повышаем качество данных, создаем удобные и понятные дашборды, внедряем BI-системы, подходящие вашему бизнесу.",
    icon: "/services/image-2.png",
  },
  {
    title: "ИТ консалтинг",
    description:
      "Поможем понять, какие изменения в ИТ нужны компании уже сейчас, и как их реализовать. Проведем аудит процессов и потоков данных. Подготовим концепцию корпоративной архитектуры и план трансформации от сегодняшнего дня в целевое состояние.",
    icon: "/services/image-3.png",
  },
  {
    title: "Импортозамещение\nИТ систем",
    description:
      "Поможем с переходом с зарубежной ИТ-инфраструктуры на отечественное ПО. Выполним сбор требований, подготовим план миграции процессов, выберем подходящее решение из доступных на рынке. Подготовим исторические данные для миграции в новую инфраструктуру. Проконтролируем качество создаваемых решений чтобы бизнес получил то, что необходимо для развития.",
    icon: "/services/image-4.png",
  },
  {
    title: "Заказная\nразработка ПО",
    description:
      "С нуля создаем программные продукты под задачи бизнеса. Модернизируем работающие ИТ-решения для поддержки уникальных процессов вашей компании. Помогаем на всем пути – от поиска идей и проектирования до внедрения и развития системы.",
    icon: "/services/image-5.svg",
  },
  {
    title: "Автоматизация процессов\nвзаимодействия с HCP",
    description:
      "Выстраиваем правильные процессы коммуникации с HCP, от сбора персональных данных в соответствии с ФЗ №152 до планирования визитов медицинских представителей. Автоматизируем дистанционные и очные коммуникации по всем каналам с помощью единой CDP ViRM",
    icon: "/services/image-6.png",
  },
];

export const Services = () => {
  return (
    <LayoutBlock
      id="services"
      className="bg-gradient-to-b from-[#6733e2] to-violet-800 py-16 lg:py-20">
      <Container>
        <div className="text-xl lg:text-3xl mb-24 text-white font-bold text-center">
          Мы понимаем фармацевтический бизнес и проблемы, говорим на одном языке и предлагаем лучший
          сервис и надежные ИТ-решения
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-y-16 gap-x-8">
          {config.map((item) => (
            <Card key={item.icon} {...item} />
          ))}
        </div>
      </Container>
    </LayoutBlock>
  );
};
