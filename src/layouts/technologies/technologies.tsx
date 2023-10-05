import { ButtonLink } from "../../components/button";
import { Container } from "../../components/container";
import { LayoutBlock } from "../../components/layout-block";

const fnSystem = [
  "Управление нормативно-справочной информацией",
  "Управление моделью мета-данных предприятия",
  "Каталог данных и бизнес-глоссарий",
  "Интеграция корпоративных систем",
  "Управление правилами обработки данных, их валидации и дедубликации и т.д.",
];

export const Technologies = () => {
  return (
    <LayoutBlock id="technologies" className="py-16 lg:py-20">
      <Container>
        <div className="text-3xl lg:text-4xl mb-8 text-violet-800 font-bold">
          Наш технический стек
        </div>
        <div className="text-2xl mb-16 text-violet-600 font-bold">
          Combyx — многофункциональная платформа для управления корпоративными данными класса
          MDM/ETL
        </div>
        <div className="flex flex-col-reverse md:flex-row md:items-center gap-10 justify-between">
          <div className="flex flex-col gap-8 w-full max-w-md lg:max-w-xl">
            <div className="text-2xl font-bold text-slate-600 whitespace-pre-line">
              {"Функционал системы\nвключает модули:"}
            </div>
            <div className="grid grid-cols-1 gap-6 mb-8">
              {fnSystem.map((title, i) => (
                <div key={i} className="pl-10 relative text-slate-500 text-lg font-semibold">
                  <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#5b21b6"
                    className="absolute left-0 top-0.5 text-current w-6 h-6">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 19.5C16.1421 19.5 19.5 16.1421 19.5 12C19.5 7.85786 16.1421 4.5 12 4.5C7.85786 4.5 4.5 7.85786 4.5 12C4.5 16.1421 7.85786 19.5 12 19.5ZM12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                    />
                    <circle cx="12" cy="12" r="5.25" />
                  </svg>
                  {title}
                </div>
              ))}
            </div>
            <div>
              <ButtonLink href="https://combyx.ru" target="_blank">
                Подробнее
              </ButtonLink>
            </div>
          </div>
          <img
            src="/technologies/combix.svg"
            alt=""
            className="flex-1 mx-auto md:mx-0 max-w-sm w-full"
          />
        </div>

        <div className="text-2xl mt-32 mb-4 text-violet-600 font-bold">
          ViRM единая платформа omni-channel коммуникаций
        </div>

        <div className="text-lg font-semibold text-slate-500">
          ViRM - первая CDP платформа для дистанционных коммуникаций со специалистами
          здравоохранения
        </div>
        <img src="/technologies/ViRM.png" alt="" className="mx-auto md:mx-0 max-w-sm w-full my-7" />
        <ButtonLink href="https://virm.online/" target="_blank">
          Подробнее
        </ButtonLink>
      </Container>
    </LayoutBlock>
  );
};
