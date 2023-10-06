import Database from "@/libs/database";

import type { NextApiRequest, NextApiResponse } from 'next'

export default async function GET(request: NextApiRequest, response: NextApiResponse) {
  const { query: { email } } = request;

  if(email) {
    if(/(\w+\.)+\w+@\w+(\.\w+)+/i.test(email.toLocaleString())) {
      const [ insert ] = await Database.query("INSERT INTO `newsletter` SET `email_address` = ?", [ email ]);
  
      if(insert) {
        response.status(200).json({
          data: {
            message: "Email added to newsletter."
          }
        });
      }

      response.status(500).json({
        error: {
          message: "An error occured, please retry."
        }
      });
    }

    
    response.status(500).json({
      error: {
        message: "Email format is not valid."
      }
    });
  }

  response.status(500).json({
    error: {
      message: "Email address not provided."
    }
  });
}