export default function Component({ count }: StarRatingType) {
	return (
		<div className="flex flex-wrap gap-3">
			{Array(5).fill("").map((_: string | number, index: number) => (
				<span key={index} className={`material-icons text-normal ${index < count ? "text-yellow-400" : "text-gray-600"}`}>star</span>
			))}
		</div>
	);
}

type StarRatingType = {
	count: number
}