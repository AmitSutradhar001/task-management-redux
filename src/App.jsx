import Form from "./components/Form";
import List from "./components/List";

import { Meteors } from "./components/ui/meteors";

const App = () => {
  return (
    <div className="flex flex-col h-screen w-full  items-center my-8 mx-10">
      <Form />
      <div className="border-b-2 border-white w-96 m-4 md:w-[800px]"></div>
      <List />
      <Meteors number={50} />
    </div>
  );
};

export default App;
