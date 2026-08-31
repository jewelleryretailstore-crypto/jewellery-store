const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_URL || '';

export async function fetchGraphQL(query: string, variables = {}) {
  if (!API_URL) {
    console.warn('WordPress GraphQL URL is not defined.');
    return { data: null };
  }

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };

  // Only run localStorage logic on the client
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('wp_jwt_token');
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const wooSession = localStorage.getItem('woo_session');
    if (wooSession) {
      headers['woocommerce-session'] = `Session ${wooSession}`;
    }
  }

  try {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers,
      body: JSON.stringify({ query, variables }),
      // Do not cache mutations or authenticated queries
      cache: query.includes('mutation') || headers['Authorization'] || headers['woocommerce-session'] ? 'no-store' : 'force-cache',
      next: { revalidate: query.includes('mutation') || headers['Authorization'] || headers['woocommerce-session'] ? 0 : 60 }
    });

    // If WooCommerce sends back a session token, save it for anonymous carts!
    if (typeof window !== 'undefined') {
      const newSession = res.headers.get('woocommerce-session');
      if (newSession && newSession !== 'false') {
        localStorage.setItem('woo_session', newSession);
      }
    }

    const json = await res.json();
    if (json.errors) {
      console.error(json.errors);
      // We don't throw error here so the UI can handle the GraphQL errors (e.g. invalid login)
      return { data: json.data, errors: json.errors };
    }
    return json;
  } catch (error) {
    console.error('Error fetching GraphQL:', error);
    return { data: null };
  }
}