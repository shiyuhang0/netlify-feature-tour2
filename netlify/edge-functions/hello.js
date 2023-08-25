import { connect } from '@shiyuhang0/serverless'

export default async () => {
  const conn = connect({url: process.env.DATABASE_URL})
  const result = await conn.execute('select * from test.test')
  return new Response(JSON.stringify(result));
}

export const config = { path: "/test" };
