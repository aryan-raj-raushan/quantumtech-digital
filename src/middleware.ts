import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  // Only run on homepage
  if (req.nextUrl.pathname !== "/") return NextResponse.next();

  // geo is available at runtime (Vercel / Edge)
  const geo = (req as any).geo as {
    city?: string;
    country?: string;
  };

  const citySlug = geo?.city
    ?.toLowerCase()
    .replace(/[^a-z\s]/g, "")
    .replace(/\s+/g, "-");

  if (citySlug) {
    return NextResponse.rewrite(new URL(`/${citySlug}/it-services`, req.url));
  }

  return NextResponse.next();
}

// import { NextRequest, NextResponse } from "next/server";

// export function middleware(req: NextRequest) {
//   if (req.nextUrl.pathname !== "/") return NextResponse.next();

//   const city = req.headers.get("x-vercel-ip-city");

//   const citySlug = city
//     ?.toLowerCase()
//     .replace(/[^a-z\s]/g, "")
//     .replace(/\s+/g, "-");

//   if (citySlug) {
//     return NextResponse.rewrite(
//       new URL(`/${citySlug}/it-services`, req.url)
//     );
//   }

//   return NextResponse.next();
// }
