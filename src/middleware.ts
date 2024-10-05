import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const isLogged = request.cookies.get('token')?.value;
  if (!isLogged) {
    return NextResponse.redirect(new URL('/auth/login', request.url))
  }
  
  // if (request.nextUrl.pathname.startsWith('/auth/login')) {
  //   if(isLogged){
  //     return NextResponse.redirect(new URL('/', request.url))
  //   }
  // }
  // if (request.nextUrl.pathname.startsWith('/auth/register')) {
  //   if(isLogged){
  //     return NextResponse.redirect(new URL('/', request.url))
  //   }
  // }

  // return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/',]
}