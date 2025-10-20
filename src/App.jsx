import { useState } from "react";
import Posts from "./Posts";
import CreatePost from "./CreatePost";

const App = () => {
  const [show, setShow] = useState(false);

  function toggleComponent() {
    setShow((prev) => !prev);
  }

  return (
    <div>
      <CreatePost />
      <button className="cursor-pointer" onClick={toggleComponent}>
        Toggle
      </button>

      {show && <Posts />}
    </div>
  );
};

export default App;
