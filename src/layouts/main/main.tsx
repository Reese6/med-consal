import { ButtonLink } from "../../components/button";
import { Container } from "../../components/container";
import { ScrollToBlock } from "../../components/scroll-to-block";

export const Main = () => {
  return (
    <main className="py-12 lg:py-24 relative flex flex-col bg-right-bottom bg-no-repeat bg-contain md:bg-[url(/fggg.jpg)]">
      <ScrollToBlock id="home" />
      <Container className="flex flex-col items-center md:flex-row justify-between gap-10">
        <div className="w-full max-w-xl">
          <h1 className="font-semibold text-3xl text-slate-900 md:text-4xl md:font-bold">
            <div className="whitespace-nowrap">Новый уровень</div>
            <div className="lg:whitespace-nowrap">цифровой трансформации</div>
          </h1>
          <p className="my-9 text-slate-800 text-lg font-medium">
            Первый IT интегратор, специализирующийся на решении комплексных задач автоматизации и
            цифровизации для предприятий фармацевтической отрасли
          </p>
          <ButtonLink href="#contacts">Свяжитесь c нами</ButtonLink>
        </div>
        <img
          alt=""
          src="222-min.png"
          className="flex-1 md:max-w-md xl:max-w-lg 2xl:max-w-2xl w-full inline-block"
        />
      </Container>
    </main>
  );
};
