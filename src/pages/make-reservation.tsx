import { Fragment, useState, useEffect } from "react";

import Banner from "@/components/Banner";
import Footer from "@/components/Footer";

export default function Page() {
  const [roomRates, setRoomRates] = useState <RateType []> ([]);
  const [roomCategories, setRoomCategories] = useState <CategoryType []> ([]);
  const [formData, setFormData] = useState <FormDataType> ({
    checkIn: "", checkOut: "", roomCategory: "", roomRate: "", fullName: "", emailAddress: "", phoneNumber: "", comment: ""
  });

  useEffect(() => {
    fetch("/api/rates")
		.then((response) => response.json())
		.then(({ data }: { data: any }) => setRoomRates(data))
    
    fetch("/api/admin/dashboard/room-types")
		.then((response) => response.json())
		.then(({ data }: { data: any }) => setRoomCategories(data))
  }, []);

  function makeReservation() {
    fetch("/api/mail/send-reservation", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-type": "application/json"
      }
    })
    .then((response) => response.json())
    .then(({ data, error }) => {
      if(error) {
        alert(error.message)
      }
    })
  }

  return (
    <Fragment>
      <Banner darkText={true} justHeader={true} />
      <section className="py-10 md:py-20">
        <div className="container space-y-10 md:space-y-20 max-w-[900px]">
          <div className="space-y-10">
            <div className="text-2xl md:text-4xl text-center leading-normal font-bold capitalize">
							reservation data
						</div>
						<div className="grid gap-5 md:gap-10 grid-cols-1 md:grid-cols-2">
              <div className="col-span-1 space-y-2">
                <div className="uppercase font-medium text-sm md:text-base">check in *</div>
                <input
                  type="date"
                  value={formData.checkIn}
                  className="block w-full p-3 md:p-4 border rounded"
                  onChange={({ target: { value } }) => setFormData((n) => ({...n, checkIn: value}))}
                />
              </div>
              <div className="col-span-1 space-y-2">
                <div className="uppercase font-medium text-sm md:text-base">check out *</div>
                <input
                  type="date"
                  value={formData.checkOut}
                  className="block w-full p-3 md:p-4 border rounded"
                  onChange={({ target: { value } }) => setFormData((n) => ({...n, checkOut: value}))}
                />
              </div>
              <div className="col-span-1 space-y-2">
                <div className="uppercase font-medium text-sm md:text-base">room category *</div>
                <select
                  value={formData.roomCategory}
                  className="block w-full p-3 md:p-4 border capitalize rounded"
                  onChange={({ target: { value } }) => setFormData((n) => ({...n, roomCategory: value}))}
                >
                  <option value="">---</option>
                  {roomCategories.map(({ id, name }: CategoryType) => (
                    <option key={id} value={id}>{name}</option>
                  ))}
                </select>
              </div>
              <div className="col-span-1 space-y-2">
                <div className="uppercase font-medium text-sm md:text-base">rate *</div>
                <select
                  value={formData.roomRate}
                  className="block w-full p-3 md:p-4 border capitalize rounded"
                  onChange={({ target: { value } }) => setFormData((n) => ({...n, roomRate: value}))}
                >
                  <option value="">---</option>
                  {roomRates.map(({ id, code, name }: RateType) => (
                    <option key={id} value={id}>{name}</option>
                  ))}
                </select>
              </div>
						</div>
          </div>
          <div className="space-y-10">
            <div className="text-2xl md:text-4xl text-center leading-normal font-bold capitalize">
							guest data
						</div>
						<div className="grid gap-5 md:gap-10 grid-cols-1 md:grid-cols-2">
              <div className="col-span-1 md:col-span-2 space-y-2">
                <div className="uppercase font-medium text-sm md:text-base">full name *</div>
                <input
                  type="text"
                  value={formData.fullName}
                  className="block w-full p-3 md:p-4 border rounded"
                  onChange={({ target: { value } }) => setFormData((n) => ({...n, fullName: value}))}
                />
              </div>
              <div className="col-span-1 space-y-2">
                <div className="uppercase font-medium text-sm md:text-base">email address *</div>
                <input
                  type="text"
                  value={formData.emailAddress}
                  className="block w-full p-3 md:p-4 border rounded"
                  onChange={({ target: { value } }) => setFormData((n) => ({...n, emailAddress: value}))}
                />
              </div>
              <div className="col-span-1 space-y-2">
                <div className="uppercase font-medium text-sm md:text-base">phone *</div>
                <input
                  type="text"
                  value={formData.phoneNumber}
                  className="block w-full p-3 md:p-4 border rounded"
                  onChange={({ target: { value } }) => setFormData((n) => ({...n, phoneNumber: value}))}
                />
              </div>
              <div className="col-span-1 md:col-span-2 space-y-2">
                <div className="uppercase font-medium text-sm md:text-base">comment</div>
                <textarea
                  rows={5}
                  value={formData.comment}
                  onChange={({ target: { value } }) => setFormData((n) => ({...n, comment: value}))}
                  className="block resize-none w-full p-3 md:p-4 border rounded"
                ></textarea>
              </div>
						</div>
          </div>
          <div className="space-y-10">
            <button
              onClick={makeReservation}
              className="block w-full p-5 bg-yellow-300 md:text-lg uppercase text-black rounded-lg uppercase font-medium"
            >
              make reservation
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
}

type RateType = {
	id: string,
	code: string,
	name: string,
}

type CategoryType = {
  id: string | number,
  code: string,
  name: string | number,
  priceUnit: string,
  timestamp: Date
}

type FormDataType = {
  checkIn: string,
  checkOut: string,
  roomCategory: string,
  roomRate: string,
  fullName: string,
  emailAddress: string,
  phoneNumber: string,
  comment: string
}