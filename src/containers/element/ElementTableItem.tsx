import { Link } from 'react-router-dom';
import Element from '../../types/element';

function ElementTableItem({ element }: { element: Element }) {
  return (
    <Link to={`/elements/${element.name.toLowerCase()}`} type="button">
      {element.symbol}
    </Link>
  );
}

export default ElementTableItem;
