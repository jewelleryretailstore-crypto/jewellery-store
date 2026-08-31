const url = 'https://darkblue-raven-747036.hostingersite.com/graphql';
const query = `
  query GetProducts {
    products(first: 50) {
      nodes {
        id
        name
        ... on VariableProduct {
          attributes {
            nodes {
              name
              options
            }
          }
        }
      }
    }
  }
`;

fetch(url, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ query })
})
.then(res => res.json())
.then(data => console.log(JSON.stringify(data, null, 2)))
.catch(err => console.error(err));
