import Item from './item';

function List({ items }) {
  return (
    <ul>
      {items.map((title, index) => (
        <Item key={index} title={title} />
      ))}
    </ul>
  );
}

export default List;
