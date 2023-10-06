import { useState, useEffect } from "react";

export default function Component({ name, value, onRateChange }: RatePickerPropType) {
	const [ rate, setRate ] = useState <string> (value || "RT_REGLR");
	const [ rates, setRates ] = useState <RatesType> ([]);

	useEffect(() => {
		fetch("/api/rates")
		.then((response) => response.json())
		.then(({ data }: { data: RatesType }) => setRates(data))
	}, [])

	useEffect(() => {
		if(typeof onRateChange === "function") {
			onRateChange({ rate });
		}
	}, [rate])

	return (
		<select
			name={name}
			value={rate}
			onChange={({ target: { value } }) => setRate(value)}
			className="block w-full py-3 bg-transparent m-0 font-medium capitalize text-lg border-b"
		>
		{rates.map(({ code, name }: RateType, index: number) => (
			<option key={code} value={code}>{name}</option>
		))}
		</select>
	);
}

type RatesType = RateType [] | any [];

type RateType = {
	name: string,
	code: string,
	name: string,
}

type RatePickerPropType = {
	value: string,
	onRateChange: ({ rate }: { rate: string }) => void
}