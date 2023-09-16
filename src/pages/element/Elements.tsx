import { useQuery } from '@tanstack/react-query';
import { useElements } from '../../hooks/element';
import axios from 'axios';

function Elements() {
  const { updateElements } = useElements();
  const { status, data, error } = useQuery({
    queryKey: ['elements'],
    queryFn: async function fetchElements() {
      const response = await axios.get('http://localhost:3000/elements?key_format=camelize');
      updateElements(response.data.elements);
      return response.data;
    },
  });

  if (status === 'loading') {
    return <span>Loading...</span>;
  }

  if (status === 'error') {
    return <span>{(error as Error).message}</span>;
  }

  return <ul>{JSON.stringify(data.elements)}</ul>;
}

export default Elements;
