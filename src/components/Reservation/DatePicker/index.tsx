import { useState, useMemo, useRef, useEffect } from "react";

export default function Component({ name, min, type = "check-in", date, onDateChange }: DatePickerPropType) {
	const defaultDate = type === "check-in" ? getTodaysDate() : getTomorrowsDate();

	const [value, setValue] = useState <string> (date || defaultDate);

	const formattedValue = useMemo(() => new Date(value).toDateString(), [value]);
	const minDateValue = useMemo(() => min || getISODate(value), [value]);

	useEffect(() => {
		if(typeof onDateChange === "function") {
			onDateChange({ date: value });
		}
	}, [value])

	return (
		<input
			type="date"
			name={name}
			value={value}
			min={minDateValue}
			onChange={({ target: { value } }) => setValue(value)}
			className="block w-full py-3 bg-transparent border-b font-medium outline-none"
		/>
	);
}

function getTodaysDate(): string {
	const today = new Date();

	return today.toLocaleDateString();
}

function getTomorrowsDate(): string {
	const today = new Date();
	const tomorrow = new Date(today);
	
	tomorrow.setDate(today.getDate() + 1);
	
	return tomorrow.toLocaleDateString();
}

function getISODate(_date: string): string {
	const date = new Date(_date);

	const year = date.getFullYear();
	const day = date.getDate().toString().padStart(2, '0');
	const month = (date.getMonth() + 1).toString().padStart(2, '0');

	return `${year}-${month}-${day}`;
}

export type DatePickerPropType = {
	name: string,
	min?: string,
	date?: string,
	type: string,
	onDateChange: ({ date }: { date: string}) => void
}