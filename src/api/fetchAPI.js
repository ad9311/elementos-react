const fetchAPI = async () => {
  const URL = 'https://periodic-table-api.herokuapp.com/';
  const request = await fetch(URL, {
    method: 'GET',
  });
  const response = await request.json();
  return response;
};

export default fetchAPI;
