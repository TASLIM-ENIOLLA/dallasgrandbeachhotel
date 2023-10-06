import { useState, useEffect } from "react";

export default function Component({ value, onChange, title, type }: InputType) {
	const [inputValue, setInputValue] = useState <string | number> (value || "");

	useEffect(() => {
		if(typeof onChange === "function") {
			onChange({value: inputValue});
		}
	}, [inputValue])

	return (
		<div className="p-3 rounded-lg bg-gray-100">
			<div className="uppercase font-medium text-gray-600">{title}</div>
			<input
				type={type}
				value={inputValue}
				onChange={({target: {value}}) => setInputValue(value)}
				className="block w-full font-medium py-3 outline-none bg-transparent"
			/>
		</div>
	);
}

type InputType = { 
	type: string,
	title: string,
	value: string | number,
	onChange: ({ value }: { value: string }) => void
}