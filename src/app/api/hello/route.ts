import { NextResponse, type NextRequest } from 'next/server'
import { getRequestContext } from '@cloudflare/next-on-pages'

export const runtime = 'edge'

export async function POST(request: NextRequest) {
  return NextResponse.json({ data: [
    { views: 28567838, title: "Links Views" },
    { views: 23, title: "Transfer Views" },
    { views: 7346, title: "Received Views" },
    { views: 76, title: "Refers Views" },
  ]})

  // return NextResponse.redirect("https://play.famobi.com/pie-realife-cooking", {
  //   status: 302,
  //   headers: {
  //     'Location': 'https://play.famobi.com/pie-realife-cooking',
  //   },

  // })

}
