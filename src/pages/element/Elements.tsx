import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

async function fetchElements() {
  const response = await axios.get('http://localhost:3000/elements?key_format=camelize');
  return response.data;
}

function Elements() {
  const { status, data, error } = useQuery({
    queryKey: ['elements'],
    queryFn: fetchElements,
  });

  if (status === 'loading') {
    return <span>Loading...</span>;
  }

  if (status === 'error') {
    return <span>{(error as Error).message}</span>;
  }

  return <ul>{JSON.stringify(data)}</ul>;
}

export default Elements;
