import type { NextApiRequest, NextApiResponse } from 'next'

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: "smtp.yandex.com",
  port: 465,
  secure: true,
  auth: {
    user: "it.support@proteakuramowaters.com.ng",
    pass: "sllhxtwzzoulmuds"
  }
});

const options = {
  from: 'it.support@proteakuramowaters.com.ng',
  to: 'taslim.eniolla@gmail.com',
  subject: 'You just made a reservation at Dallas Beach Hotel and Resort',
  text: 'Lorem ipsum dolor sit amet consectuer'
};

export default async function GET(request: NextApiRequest, response: NextApiResponse) {
	const result = transporter.sendMail(options);
  const { body } = request;

  console.log(body)

	response.status(200).json({
		data: {
			message: "Mails sent succesfully"
		}
	});
}