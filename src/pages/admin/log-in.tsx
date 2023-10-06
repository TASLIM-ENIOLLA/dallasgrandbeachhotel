import { useState, useEffect } from "react";

import Input from "@/components/Admin/Input"

export default function Page() {
	const [formData, setFormData] = useState <FormDataType> ({
		username: "",
		password: ""
	});

	function attemptLogin(event) {
		event.preventDefault();

		fetch("/api/admin/login")
		.then((response) => response.json())
		.then(({ data, error }: { data: any, error: any }) => {
			if(error) {
				alert(error.message);
			}
			else {
				window.location.href = "./dashboard";
			}
		})
	}

	return (
		<section className="py-20">
			<div className="container">
				<div className="max-w-[450px] mx-auto">
					<div className="border py-10 px-5 rounded-lg">
						<div className="space-y-10">
							<div>
								<span className="uppercase border-b-4 border-yellow-300 text-lg md:text-2xl font-bold">
									log in
								</span>
							</div>
							<div className="pt-5 space-y-5">
								<Input
									type="text"
									title="username"
									value={formData.username}
									onChange={({ value }: { value: string }) => {
										setFormData((state) => ({...state, username: value}))
									}}
								/>
								<Input
									type="password"
									title="password"
									value={formData.password}
									onChange={({ value }: { value: string }) => {
										setFormData((state) => ({...state, password: value}))
									}}
								/>
								<div className="pt-5">
									<button onClick={attemptLogin} className="p-5 bg-yellow-300 rounded-xl shadow uppercase block w-full font-bold">
										log in
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

type FormDataType = {
	username: string,
	password: string
}