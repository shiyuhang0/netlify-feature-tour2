// import { Client,TLSMode } from "https://deno.land/x/mysql/mod.ts";
//
//
// export default async () => {
//   const client = await new Client().connect({
//     hostname: "gateway01.us-east-1.dev.shared.aws.tidbcloud.com",
//     username: "3TergS6ynJ1snx6.root",
//     db: "test",
//     password: Netlify.env.get('PASSWORD'),
//     port: 4000,
//     tls: {
//       mode: TLSMode.VERIFY_IDENTITY,
//     }
//   });
//   const result = await client.query("select * from test.test");
//   console.log(result);
//   return new Response(JSON.stringify(result));
// }

import { connect } from '@shiyuhang0/serverless'


export default async () => {
  const conn = connect({url: Netlify.env.DATABASE_URL})
  const result = await conn.execute('select * from test.test')
  return new Response(JSON.stringify(result));
}


export const config = { path: "/test" };

