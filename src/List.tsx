type SingleElement = {
  id: string;
  item: string;
};

export const List = () => {
  const elements: SingleElement[] = [
    { id: "1", item: "Ania" },
    { id: "2", item: "Michał" },
    { id: "3", item: "Paweł" },
    { id: "4", item: "Ula" },
  ];

  const handleClick = (elementName: string) => {
    console.log(`clcked ${elementName}`);
  };

  return (
    <ul>
      {elements.map((element) => (
        <li key={element.id}>
          {element.item}
          <button onClick={() => handleClick(element.item)}>Click</button>
        </li>
      ))}
    </ul>
  );
};
