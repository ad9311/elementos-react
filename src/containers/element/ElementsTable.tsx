import Element from '../../types/element';

interface ElementsTableProps {
  elements: Element[];
}

function ElementsTable({ elements }: ElementsTableProps) {
  const mappedElements = elements.map((element) => (
    <li
      className={`col-span-1 ${
        element.group === null
          ? `row-start-${element.period + 2} col-start-${
              element.series === 'Lanthanide'
                ? element.atomicNumber - 53
                : element.atomicNumber - 85
            }`
          : `col-start-${element.group}`
      }`}
      key={element.atomicNumber}>
      {element.symbol}
    </li>
  ));

  return <ul className="grid grid-cols-18">{mappedElements}</ul>;
}

export default ElementsTable;
