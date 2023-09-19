import { ElementTableItem } from '.';
import Element from '../../types/element';

interface ElementsTableProps {
  elements: Element[];
}

function ElementsTable({ elements }: ElementsTableProps) {
  const mappedElements = elements.map((element) => (
    <li
      key={element.atomicNumber}
      className={`col-span-1 ${
        element.group === null
          ? `row-start-${element.period + 2} col-start-${
              element.series === 'Lanthanide'
                ? `${element.atomicNumber - 53} mt-2`
                : element.atomicNumber - 85
            }`
          : `col-start-${element.group}`
      }`}>
      <ElementTableItem element={element} />
    </li>
  ));

  return <ul className="grid grid-cols-18 gap-0.5 xl:gap-1">{mappedElements}</ul>;
}

export default ElementsTable;
