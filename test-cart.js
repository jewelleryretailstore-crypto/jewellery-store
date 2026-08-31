

async function testCart() {
  const query = `
    mutation AddToCart {
      addToCart(input: { productId: 13, quantity: 1 }) {
        cart { subtotal }
      }
    }
  `;
  const res = await fetch('https://darkblue-raven-747036.hostingersite.com/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query })
  });
  const json = await res.json();
  console.log(JSON.stringify(json, null, 2));
}

testCart();