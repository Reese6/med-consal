import { useState } from "react";

import { Button } from "../../components/button";
import { Input } from "../../components/input";
import { Textarea } from "../../components/textarea";

export const FeedbackForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [feedback, setFeedback] = useState("");

  return (
    <form
      className="bg-white p-4 md:p-10 rounded-xl shadow-xl lg:max-w-xl w-full"
      action="/"
      method="post">
      <div className=" text-slate-800 text-xl font-bold mb-8">
        Оставьте заявку и мы c Вами свяжемся
      </div>
      <div className="flex flex-col gap-5">
        <Input
          label="Почта"
          placeholder="email@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          label="Имя"
          placeholder="Введите имя"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Textarea
          label="Обращение"
          placeholder="Оставьте в поле свое обращение"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />
        <Button>Отправить</Button>
      </div>
    </form>
  );
};
