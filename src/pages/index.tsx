import { Fragment } from "react";

import Banner from "@/components/Banner";
import Reservation from "@/components/Reservation";
import Rooms from "@/components/Rooms";
import Facilities from "@/components/Facilities";
import Testimonials from "@/components/Testimonials";
import Subscription from "@/components/Subscription";
import Footer from "@/components/Footer";

export default function Page() {
	return (
		<Fragment>
			<Banner />
			<Reservation />
			<Rooms />
			<Facilities />
			<Testimonials />
			<Subscription />
			<Footer />
		</Fragment>
	);
}