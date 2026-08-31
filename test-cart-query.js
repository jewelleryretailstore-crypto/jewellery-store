async function test() {
  const query = `
    query GetCart {
      cart {
        contents {
          nodes {
            key
            product {
              node {
                name
                ... on VariableProduct { price }
              }
            }
            variation {
              node {
                name
                price
                attributes {
                  nodes {
                    name
                    value
                  }
                }
              }
            }
          }
        }
      }
    }
  `;
  const res = await fetch('https://darkblue-raven-747036.hostingersite.com/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query })
  });
  console.log(JSON.stringify(await res.json(), null, 2));
}
test();
