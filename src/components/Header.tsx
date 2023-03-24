interface HeaderProps {
  collection: string[];
}

export default function Header(props: HeaderProps) {
  return (
    <div className="flex justify-center gap-x-5 mb-5">
      {props.collection.map((collection, index) => (
        <text className="text-6xl mt-4" key={index}>
          {collection}
        </text>
      ))}
    </div>
  );
}
