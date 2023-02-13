import { useState } from 'react';
import React from 'react';

export default function Form({onAdd}) {
   const [text, setText] = useState('')

function handleAdd () {
   onAdd(text)
   setText("")
}
	return (
		<div>
			<input
				onChange={(evt) => setText(evt.target.value)}
				type="text"
				name="name"
				value={text}
			/>
			<button onClick={handleAdd}>Add</button>
		</div>
	);
}
