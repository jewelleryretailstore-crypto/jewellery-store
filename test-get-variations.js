async function test() {
  const q = `
    query {
      products(first: 5) {
        nodes {
          ... on VariableProduct {
            variations {
              nodes {
                databaseId
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
    body: JSON.stringify({ query: q })
  });
  console.log(JSON.stringify(await res.json(), null, 2));
}
test();
