import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
	const [tasks, setTasks] = useState([
		{
			id: 1,
			text: "Doctors Appointment",
			day: "Feb 5th at 2:30",
			reminder: "true",
		},
		{
			id: 2,
			text: "Dentist Appointment",
			day: "Feb 5th at 2:30",
			reminder: "true",
		},
	]);

	// Delete Task
	const deleteTask = (id) => {
		setTasks(tasks.filter((task) => task.id !== id));
	};

	// Toggle Reminder
	const toggleReminder = (id) => {
		setTasks(
			tasks.map((task) => (task.id === id ? { ...task, reminder: !task.reminder } : task))
		);
	};

	return (
		<div className="container">
			<Header />
			{tasks.length > 0 ? (
				<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
			) : (
				"No Tasks to Show"
			)}
		</div>
	);
}

export default App;
