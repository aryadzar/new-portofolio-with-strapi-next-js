import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import axios from 'axios';
import { getAbout } from './services/about.service';

export async function middleware(req: NextRequest) {
   const url = req.nextUrl.clone();

   try {
      // Periksa endpoint healthcheck Strapi atau endpoint lain
      await getAbout();

      // Jika server API berjalan, lanjutkan ke halaman yang diminta
      return NextResponse.next();
   } catch (error) {
      console.error('API error detected, redirecting to /500');

      // Redirect ke halaman error 500 jika API gagal
      url.pathname = '/500';
      return NextResponse.rewrite(url);
   }
}
