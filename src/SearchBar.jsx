import { useRef, useState } from "react";
import TaskList from "./components/TaskList";

function SearchBar() {
  const [query, setQuery] = useState("");
  const searchRef = useRef(null);

  function handleChange() {
    setQuery(searchRef.current.value);
  }


  return (
    <div>
      <input
      ref={searchRef}
      type="text"
      placeholder="Search tasks..."
      onChange={handleChange}
      />
      <TaskList query={query}/>
    </div>
  );
}

export default SearchBar;
