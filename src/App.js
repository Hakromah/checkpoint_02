import './App.css';
import { useEffect, useState } from 'react';
import Form from './Form.js';

function App() {
	const [task, setTask] = useState([
		{ text: 'Input text here', timestamp: 12 },
	]);

	const handleClick = (value) => {
		let timestamp = Date.now();

		let newValue = {
			id: timestamp,
			text: value,
			timestamp: timestamp,
		};

    let newTasks = [...task, newValue]
		setTask(newTasks);
		console.log(task);
    localStorage.setItem('data', JSON.stringify(newTasks))
	};

	const handleDelet = (id) => {
		let remove = task.filter((el) => el.id !== id);
		setTask(remove);
	};

// get data from local storage
  useEffect(() => {
    let getData = JSON.parse(localStorage.getItem('data'))
    if(getData) {
      setTask(getData)
    }
  }, [])

	return (
		<div className="main-content">
			<Form onAdd={handleClick} />

			{task.map((item) => (
				<li key={item.id}>
					{item.text}
					<span onClick={() => handleDelet(item.id)}>X</span>
				</li>
			))}
		</div>
	);
}

export default App;
