import Element from '../../types/element';

interface ElementsListProps {
  elements: Element[];
}

function ElementsList({ elements }: ElementsListProps) {
  const mappedElements = elements.map((element) => (
    <li key={element.atomicNumber}>{element.name}</li>
  ));

  return <ul>{mappedElements}</ul>;
}

export default ElementsList;
