import { useEffect, useRef, useState, MouseEvent } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Container } from "../../components/container";
import cn from "classnames";

const menu = [
  { id: "home", label: "Главная" },
  { id: "services", label: "Услуги" },
  { id: "technologies", label: "Технологии" },
  { id: "contacts", label: "Контакты" },
];

export const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [withShadow, setShadow] = useState(false);

  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const fn = () => {
      setShadow(document.documentElement.scrollTop > 1);
    };
    document.addEventListener("scroll", fn);

    return () => {
      document.removeEventListener("scroll", fn);
    };
  }, []);

  return (
    <>
      <header
        ref={ref}
        className={cn(
          "bg-white py-2 md:px-24 fixed inset-x-0 top-0 z-30",
          withShadow && "shadow-lg",
        )}>
        <Container className="flex items-center justify-between">
          <a href="/" className="inline-flex">
            <img src="/logotype-full.png" className="w-20 md:w-28" />
          </a>
          <div className="flex gap-5">
            <button className="md:hidden" onClick={() => setShowSidebar(true)}>
              <svg className="w-5 h-5" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <rect y="1" width="16" height="2"></rect>
                <rect y="7" width="16" height="2"></rect>
                <rect y="13" width="16" height="2"></rect>
              </svg>
            </button>
            <div className="hidden md:flex gap-8">
              {menu.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="block text-center text-lg font-semibold text-slate-800 hover:text-blue-700 transition-colors duration-300"
                  onClick={(e) => scrollToBlock(e, item.id)}>
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </Container>
      </header>
      {showSidebar && (
        <Dialog.Root open={showSidebar} onOpenChange={setShowSidebar}>
          <Dialog.Portal>
            <section className="fixed md:hidden inset-0 bg-black bg-opacity-40 z-40">
              <Dialog.Overlay
                className="absolute inset-0 z-10"
                onClick={() => setShowSidebar(false)}
              />
              <div className="bg-white absolute right-0 inset-y-0 pt-5 px-8 h-full overflow-y-auto w-72 z-20">
                <div className="flex justify-end mb-5">
                  <button onClick={() => setShowSidebar(false)}>
                    <svg
                      className="w-5 h-5 fill-slate-800"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 30 30">
                      <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z" />
                    </svg>
                  </button>
                </div>
                <div className="grid grid-cols-1 gap-3">
                  {menu.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="block text-center text-lg font-semibold text-slate-800"
                      onClick={(e) => scrollToBlock(e, item.id)}>
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </section>
          </Dialog.Portal>
        </Dialog.Root>
      )}
    </>
  );
};

function scrollToBlock(e: MouseEvent<HTMLAnchorElement>, id: string) {
  e.preventDefault();
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}
