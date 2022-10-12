export const getCountries = async () => {
  const query = {
    "query": "query { countries(pageSize:500) { list { id, flag, iso, niceName }, page, pageCount, pageSize } }"
  };

  const fetchOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(query)
  };

  const response = await fetch('https://graph.mercurycash.us/graphql', fetchOptions);
  const data = await response.json();

  return data?.data?.countries?.list;
}
