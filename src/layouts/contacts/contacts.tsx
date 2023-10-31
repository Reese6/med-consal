import { Container } from "../../components/container";
import { ScrollToBlock } from "../../components/scroll-to-block";
import { FeedbackForm } from "./feedback-form";

const contacts = [
  {
    label: "Почта",
    value: (
      <a href="mailto:welcome@medtechconsult.ru" className="cursor-pointer">
        welcome@medtechconsult.ru
      </a>
    ),
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6 12.0001V10.0001H18V12.0001M3.02832 10.0002L10.2246 14.8168C10.8661 15.2444 11.1869 15.4583 11.5336 15.5414C11.8399 15.6148 12.1593 15.6148 12.4657 15.5414C12.8124 15.4583 13.1332 15.2444 13.7747 14.8168L20.9709 10.0001M10.2981 4.06892L4.49814 7.71139C3.95121 8.05487 3.67775 8.2266 3.4794 8.45876C3.30385 8.66424 3.17176 8.90317 3.09111 9.16112C3 9.45256 3 9.77548 3 10.4213V16.8001C3 17.9202 3 18.4803 3.21799 18.9081C3.40973 19.2844 3.71569 19.5904 4.09202 19.7821C4.51984 20.0001 5.07989 20.0001 6.2 20.0001H17.8C18.9201 20.0001 19.4802 20.0001 19.908 19.7821C20.2843 19.5904 20.5903 19.2844 20.782 18.9081C21 18.4803 21 17.9202 21 16.8001V10.4213C21 9.77548 21 9.45256 20.9089 9.16112C20.8282 8.90317 20.6962 8.66424 20.5206 8.45876C20.3223 8.2266 20.0488 8.05487 19.5019 7.71139L13.7019 4.06891C13.0846 3.68129 12.776 3.48747 12.4449 3.41192C12.152 3.34512 11.848 3.34512 11.5551 3.41192C11.224 3.48747 10.9154 3.68129 10.2981 4.06892Z"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Адрес",
    value:
      "117485, Москва, ул. Обручева, д. 30/1, стр. 2, этаж 5, помещение XXIV, часть комнаты 2, офис 22 ",
    icon: (
      <svg fill="#fff" viewBox="0 0 100 100" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
        <path d="M49,18.92A23.74,23.74,0,0,0,25.27,42.77c0,16.48,17,31.59,22.23,35.59a2.45,2.45,0,0,0,3.12,0c5.24-4.12,22.1-19.11,22.1-35.59A23.74,23.74,0,0,0,49,18.92Zm0,33.71a10,10,0,1,1,10-10A10,10,0,0,1,49,52.63Z" />
      </svg>
    ),
  },
];

export const Contacts = () => {
  return (
    <section className="bg-gradient-to-b relative from-violet-800 to-indigo-800 py-16 lg:py-20">
      <ScrollToBlock id="contacts" />
      <Container>
        <div className="flex justify-between flex-col lg:flex-row gap-10">
          <div className="lg:max-w-md flex flex-col flex-1">
            <div className="text-3xl lg:text-4xl mb-16 text-white font-bold">Связаться с нами</div>
            <div className="flex flex-1 flex-col gap-5">
              {contacts.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="text-lg text-white font-medium flex items-center gap-3">
                    <div className="w-8 h-8 flex items-center justify-center">{item.icon}</div>
                    <span className="whitespace-nowrap">{item.label}:</span>
                  </div>
                  <div className="text-lg text-white font-semibold">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
          <FeedbackForm />
        </div>
      </Container>
    </section>
  );
};
