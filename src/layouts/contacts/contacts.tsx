import { Container } from "../../components/container";
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
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M14.3308 15.9402L15.6608 14.6101C15.8655 14.403 16.1092 14.2384 16.3778 14.1262C16.6465 14.014 16.9347 13.9563 17.2258 13.9563C17.517 13.9563 17.8052 14.014 18.0739 14.1262C18.3425 14.2384 18.5862 14.403 18.7908 14.6101L20.3508 16.1702C20.5579 16.3748 20.7224 16.6183 20.8346 16.887C20.9468 17.1556 21.0046 17.444 21.0046 17.7351C21.0046 18.0263 20.9468 18.3146 20.8346 18.5833C20.7224 18.8519 20.5579 19.0954 20.3508 19.3L19.6408 20.02C19.1516 20.514 18.5189 20.841 17.8329 20.9541C17.1469 21.0672 16.4427 20.9609 15.8208 20.6501C10.4691 17.8952 6.11008 13.5396 3.35083 8.19019C3.03976 7.56761 2.93414 6.86242 3.04914 6.17603C3.16414 5.48963 3.49384 4.85731 3.99085 4.37012L4.70081 3.65015C5.11674 3.23673 5.67937 3.00464 6.26581 3.00464C6.85225 3.00464 7.41488 3.23673 7.83081 3.65015L9.40082 5.22021C9.81424 5.63615 10.0463 6.19871 10.0463 6.78516C10.0463 7.3716 9.81424 7.93416 9.40082 8.3501L8.0708 9.68018C8.95021 10.8697 9.91617 11.9926 10.9608 13.04C11.9994 14.0804 13.116 15.04 14.3008 15.9102L14.3308 15.9402Z"
          stroke="#fff"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.2109 8.84009C18.0578 8.09677 17.6931 7.41362 17.1609 6.87256C16.6288 6.33149 15.9516 5.95549 15.2109 5.79004"
          stroke="#fff"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22 7.51001C21.6283 6.19924 20.928 5.00529 19.9655 4.04102C19.003 3.07674 17.8101 2.37408 16.5 2"
          stroke="#fff"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export const Contacts = () => {
  return (
    <section
      id="contacts"
      className="bg-gradient-to-b from-violet-800 to-indigo-800 py-16 lg:py-20">
      <Container>
        <div className="flex justify-between flex-col lg:flex-row gap-10">
          <div className="lg:max-w-md flex flex-col flex-1">
            <div className="text-3xl lg:text-4xl mb-16 text-white font-bold">Связаться с нами</div>
            <div className="flex flex-1 flex-col gap-5">
              {contacts.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="text-lg text-white font-medium flex items-center gap-3">
                    {item.icon}
                    <span>{item.label}:</span>
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
