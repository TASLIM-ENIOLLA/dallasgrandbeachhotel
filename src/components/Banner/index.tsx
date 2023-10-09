import Link from "next/link";

import Header from "./Header";

export default function Component({ justHeader, darkText }: { justHeader?: boolean, darkText?: boolean }) {

	if(justHeader) {
		return (
			<Header darkText={darkText} />
		);
	}

	return (
		<section className="min-h-screen flex flex-col">
			<Header darkText={darkText} />
			<main className="container flex-1 flex flex-col">
				<div className="flex-1 flex flex-col justify-center">
					<div className="max-w-[900px] sm:border-l-4 p-10 space-y-10">
						<div className="text-4xl md:text-5xl font-bold tracking-wide leading-normal text-white capitalize">
							Discover the perfect blend of luxury, comfort, and convenience at Dallas Grand Beach Hotel and Resort.
						</div>
						<div>
							<Link href="https://www.expedia.com/Dallas-Grand-Beach-Hotel-Resort.h66261659.Hotel-Information" className="py-5 px-20 font-bold uppercase bg-yellow-400 rounded-lg text-black">
								make a reservation
							</Link>
						</div>
					</div>
				</div>
			</main>
			<style jsx>{`
				section {
					background: linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(/images/resources/banner/5.jpg);
					background-size: cover;
					background-position: center;
					animation: change_bg 30s ease-in-out alternate-reverse infinite;
					background-attachement: fixed;
				}
				header {
					backdrop-filter: blur(5px);
				}
				@keyframes change_bg {
					// 0% {
					// 	background: linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(/images/resources/banner/6.jpg);
					// 	background-size: cover;
					// 	background-position: center;
					// }
					20% {
						background: linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(/images/resources/banner/1.jpg);
						background-size: cover;
						background-position: center;
					}
					40% {
						background: linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(/images/resources/banner/2.jpg);
						background-size: cover;
						background-position: center;
					}
					60% {
						background: linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(/images/resources/banner/3.jpg);
						background-size: cover;
						background-position: center;
					}
					80% {
						background: linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(/images/resources/banner/4.jpg);
						background-size: cover;
						background-position: center;
					}
					100% {
						background: linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(/images/resources/banner/5.jpg);
						background-size: cover;
						background-position: center;
					}
				}
				
			`}</style>
		</section>
	);
}     