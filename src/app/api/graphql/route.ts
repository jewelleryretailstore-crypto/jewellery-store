import { NextResponse } from 'next/server';

const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_URL || '';

export async function POST(request: Request) {
  if (!API_URL) {
    return NextResponse.json({ errors: [{ message: 'WordPress API URL is missing' }] }, { status: 500 });
  }

  try {
    const body = await request.json();
    
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };

    // Forward the authorization and woo-session headers if present
    const authHeader = request.headers.get('authorization');
    if (authHeader) headers['Authorization'] = authHeader;

    const wooSession = request.headers.get('woocommerce-session');
    if (wooSession) headers['woocommerce-session'] = wooSession;

    const res = await fetch(API_URL, {
      method: 'POST',
      headers,
      body: JSON.stringify(body),
      cache: 'no-store'
    });

    const data = await res.json();
    
    // Create response
    const response = NextResponse.json(data);
    
    // Pass back the woo-session header if WP sent a new one
    const newWooSession = res.headers.get('woocommerce-session');
    if (newWooSession) {
      response.headers.set('woocommerce-session', newWooSession);
    }

    return response;
  } catch (error: any) {
    console.error('GraphQL Proxy Error:', error);
    return NextResponse.json({ errors: [{ message: error.message || 'Internal Server Error' }] }, { status: 500 });
  }
}
