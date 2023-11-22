import { Container } from "../../components/container";
import { ScrollToBlock } from "../../components/scroll-to-block";
import { FeedbackForm } from "./feedback-form";

const contacts = [
  {
    label: "Телефон",
    value: (
      <div className="flex flex-col gap-0.5">
        <a href="tel:+74952874284" className="cursor-pointer">
          +7 (495) 287-42-84
        </a>
        <a href="tel:+79168075077" className="cursor-pointer">
          +7 (916) 807-50-77
        </a>
      </div>
    ),
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M3 5.5C3 14.0604 9.93959 21 18.5 21C18.8862 21 19.2691 20.9859 19.6483 20.9581C20.0834 20.9262 20.3009 20.9103 20.499 20.7963C20.663 20.7019 20.8185 20.5345 20.9007 20.364C21 20.1582 21 19.9181 21 19.438V16.6207C21 16.2169 21 16.015 20.9335 15.842C20.8749 15.6891 20.7795 15.553 20.6559 15.4456C20.516 15.324 20.3262 15.255 19.9468 15.117L16.74 13.9509C16.2985 13.7904 16.0777 13.7101 15.8683 13.7237C15.6836 13.7357 15.5059 13.7988 15.3549 13.9058C15.1837 14.0271 15.0629 14.2285 14.8212 14.6314L14 16C11.3501 14.7999 9.2019 12.6489 8 10L9.36863 9.17882C9.77145 8.93713 9.97286 8.81628 10.0942 8.64506C10.2012 8.49408 10.2643 8.31637 10.2763 8.1317C10.2899 7.92227 10.2096 7.70153 10.0491 7.26005L8.88299 4.05321C8.745 3.67376 8.67601 3.48403 8.55442 3.3441C8.44701 3.22049 8.31089 3.12515 8.15802 3.06645C7.98496 3 7.78308 3 7.37932 3H4.56201C4.08188 3 3.84181 3 3.63598 3.09925C3.4655 3.18146 3.29814 3.33701 3.2037 3.50103C3.08968 3.69907 3.07375 3.91662 3.04189 4.35173C3.01413 4.73086 3 5.11378 3 5.5Z"
          stroke="#ffffff"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Почта",
    value: (
      <a href="mailto:welcome@medtechconsult.ru" className="cursor-pointer">
        welcome@medtechconsult.ru
      </a>
    ),
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      <svg fill="#fff" viewBox="0 0 100 100" className="w-7 h-7" xmlns="http://www.w3.org/2000/svg">
        <path d="M49,18.92A23.74,23.74,0,0,0,25.27,42.77c0,16.48,17,31.59,22.23,35.59a2.45,2.45,0,0,0,3.12,0c5.24-4.12,22.1-19.11,22.1-35.59A23.74,23.74,0,0,0,49,18.92Zm0,33.71a10,10,0,1,1,10-10A10,10,0,0,1,49,52.63Z" />
      </svg>
    ),
  },

  {
    label: "ИНН",
    value: 7728802740,
  },
  {
    label: "ОГРН",
    value: 1127746218951,
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
                <div key={i} className="flex flex-col items-start gap-1">
                  <div className="text-sm md:text-base text-white flex items-center gap-1">
                    {item.icon && (
                      <div className="w-7 h-7 flex items-center justify-center">{item.icon}</div>
                    )}
                    <span className="whitespace-nowrap">{item.label}:</span>
                  </div>
                  <div className="text-base md:text-lg text-white font-semibold">{item.value}</div>
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
