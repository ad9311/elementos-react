import { useQuery } from '@tanstack/react-query';
import { useElements } from '../../hooks/element';
import { ElementsList } from '.';
import axios from 'axios';

function ElementsMain() {
  const { updateElements } = useElements();
  const { status, data, error } = useQuery({
    queryKey: ['elements'],
    queryFn: async function fetchElements() {
      const response = await axios.get('http://localhost:3000/elements?key_format=camelize');
      updateElements(response.data.elements);
      return response.data.elements;
    },
  });

  if (status === 'loading') {
    return <span>Loading...</span>;
  }

  if (status === 'error') {
    return <span>{(error as Error).message}</span>;
  }

  return <ElementsList elements={data} />;
}

export default ElementsMain;
