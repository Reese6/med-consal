import { Contacts } from "./layouts/contacts";
import { Header } from "./layouts/header";
import { Main } from "./layouts/main";
import { Services } from "./layouts/services";
import { Technologies } from "./layouts/technologies";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Services />
      <Technologies />
      <Contacts />
    </>
  );
}

export default App;
