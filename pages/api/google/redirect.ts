// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import passport from '../config/passport'
type Data = {
  name: string
}

const authenticate = (method:string, req:NextApiRequest, res:NextApiResponse<Data>) =>
  new Promise((resolve, reject) => {
    passport.authenticate(method, { session: false }, (error, token) => {
      console.log(error)
      if (error) {
        reject(error)
      } else {
        resolve(token)
      }
    })(req, res)
  })

// export default 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log("req")
  try{
    const a = await authenticate('google',req,res)
    console.log(a)
    res.writeHead(302,{
  "Location":`/logged/${a}`
    })
  }catch(e){
    console.log(e)
  }
  res.end()
}
