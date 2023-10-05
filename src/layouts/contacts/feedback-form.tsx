import { Button } from "../../components/button";

export const FeedbackForm = () => {
  return (
    <form
      className="bg-white p-4 md:p-10 rounded-xl shadow-xl max-w-2xl w-full"
      action="/"
      method="post">
      <div></div>
      <Button>Отправить</Button>
    </form>
  );
};
