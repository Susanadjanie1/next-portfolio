import { useEffect, useState } from "react";
import axios from "axios";

export default function TasksPage() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);

  
  const fetchTasks = async () => {
    try {
      const response = await axios.get("/tasks");
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

 
  useEffect(() => {
    fetchTasks();
  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    setLoading(true);
    try {
      await axios.post("/tasks", { title });
      setTitle("");
      fetchTasks(); 
    } catch (error) {
      console.error("Error adding task:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">📝 Task Manager</h1>

      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter task title"
          className="border p-2 w-full mb-2"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
          disabled={loading}
        >
          {loading ? "Adding..." : "Add Task"}
        </button>
      </form>

      {/* <ul className="space-y-2">
        {tasks.map((task) => (
          <li key={task.id} className="border p-2 rounded bg-gray-50">
            {task.title}
          </li>
        ))}
      </ul> */}
    </div>
  );
}
