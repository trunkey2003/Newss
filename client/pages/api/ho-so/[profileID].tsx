// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

type Data = string | string[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const url = 'http://127.0.0.1:5000';
  const profileID: Data = req.query.profileID;
  // res.send(profileID);
  // return; 
  fetch(`${url}/api/hoso/${profileID}`)
    .then(response => response.json())
    .then(data => { 
      delete data._id;
      delete data.__v;
      const dataArray = Object.values(data);
      const result = dataArray.join(',');
      res.json(result);
    })
    .catch(err => { console.log(err); res.send('404 NOT FOUND'); });
  // res.send("Hello");
}
