async function test() {
  // 1. Add Variation to Cart
  const addMutation = `
    mutation {
      addToCart(input: { productId: 70, quantity: 1 }) {
        cart { subtotal }
      }
    }
  `;
  const res1 = await fetch('https://darkblue-raven-747036.hostingersite.com/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: addMutation })
  });
  const data1 = await res1.json();
  console.log("Add Result:", JSON.stringify(data1, null, 2));
  
  console.log([...res1.headers.entries()]);
  const wooSession = res1.headers.get('woocommerce-session');
  console.log("Session:", wooSession);
  
  // 2. Query Cart
  const query = `
    query GetCart {
      cart {
        contents {
          nodes {
            key
            product {
              node { name }
            }
            variation {
              node {
                name
                price
                attributes { nodes { name value } }
              }
            }
            total
          }
        }
      }
    }
  `;
  const res2 = await fetch('https://darkblue-raven-747036.hostingersite.com/graphql', {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json',
      'woocommerce-session': `Session ${wooSession}`
    },
    body: JSON.stringify({ query })
  });
  console.log(JSON.stringify(await res2.json(), null, 2));
}
test();
