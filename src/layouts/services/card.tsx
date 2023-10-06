import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import { ButtonLink } from "../../components/button";

type Props = {
  title: string;
  icon: string;
  description: string;
};

export const Card = ({ title, icon, description }: Props) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="bg-white p-6 pt-8 relative flex flex-col items-center rounded-2xl shadow-xl">
        <div className="absolute bg-cyan-500 shadow-xl top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full flex justify-center items-center">
          <img alt="" className="w-10 h-10" src={icon} />
        </div>
        <div className="mt-5 mb-6 flex-1 flex items-center">
          <div className="text-indigo-600 text-center font-semibold text-lg whitespace-pre-line">
            {title}
          </div>
        </div>
        <ButtonLink onClick={() => setShowModal(true)}>Подробнее</ButtonLink>
      </div>
      <Dialog.Root open={showModal} onOpenChange={setShowModal}>
        <Dialog.Portal>
          <section className="fixed inset-0 flex items-center justify-center p-4 bg-black bg-opacity-40">
            <Dialog.Overlay className="absolute inset-o z-10" />
            <Dialog.Content className="bg-white relative p-9 overflow-y-auto max-w-md w-full rounded-2xl">
              <div className="text-lg md:text-xl text-slate-900 font-bold mb-4">{title}</div>
              <div className="text-sm md:text-base text-slate-700 font-semibold">{description}</div>
              <button
                onClick={() => setShowModal(false)}
                className="absolute outline-none top-4 right-4">
                <svg
                  className="w-5 h-5 fill-slate-800"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 30 30">
                  <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z" />
                </svg>
              </button>
            </Dialog.Content>
          </section>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
};
