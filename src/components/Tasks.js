const tasks = [
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
];

const Tasks = () => {
	return (
		<>
			{tasks.map((task) => (
				<h3 key={task.id}> {task.text}</h3>
			))}
		</>
	);
};
