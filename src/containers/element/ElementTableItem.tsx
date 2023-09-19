import { Link } from 'react-router-dom';
import Element from '../../types/element';

function ElementTableItem({ element }: { element: Element }) {
  function setSeriesColor() {
    switch (element.series) {
      case 'Alkali Metal':
        return 'bg-alkali-metal';
      case 'Alkaline Earth Metal':
        return 'bg-alkaline-earth-metal';
      case 'Lanthanide':
        return 'bg-lanthanide';
      case 'Actinide':
        return 'bg-actinide';
      case 'Transition Metal':
        return 'bg-transition-metal';
      case 'Post Transition Metal':
        return 'bg-post-transition-metal';
      case 'Metalloid':
        return 'bg-metalloid';
      case 'Nonmetal':
        return 'bg-nonmetal';
      case 'Halogen':
        return 'bg-halogen';
      case 'Noble Gas':
        return 'bg-noble-gas';
      default:
        return 'bg-neutral-400';
    }
  }

  return (
    <Link
      to={`/elements/${element.name.toLowerCase()}`}
      className={`block h-14 lg:h-20 xl:h-24 text-white leading-none ${setSeriesColor()}`}
      title={`${element.name} - ${element.series}`}>
      <span className="pl-1 text-2xs">{element.atomicNumber}</span>
      <p className="text-center text-sm lg:text-base font-bold">{element.symbol}</p>
    </Link>
  );
}

export default ElementTableItem;
