const today = new Date();
const tomorrow = new Date(today);

export function getTodaysDate(): string {
	return today.toLocaleDateString();
}

export function getTomorrowsDate(): string {
	tomorrow.setDate(today.getDate() + 1);
	
	return tomorrow.toLocaleDateString();
}

export function getISODate(_date: string): string {
	const date = new Date(_date);

	const year = date.getFullYear();
	const month = (date.getMonth() + 1).toString().padStart(2, '0');
	const day = date.getDate().toString().padStart(2, '0');

	return `${year}-${month}-${day}`;
}