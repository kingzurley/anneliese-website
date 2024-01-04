import Link from "next/link";
import { useEffect, useState } from "react";
import Item, { ItemProps } from "./Item";
import SideBar from "./SideBar";

interface CollectionPageProps {
  items: ItemProps[];
}

export default function CollectionPage(
  props: CollectionPageProps
): JSX.Element {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    setOpacity(100);
  }, []);

  return (
    <div className={`h-screen flex ml-8`}>
      <SideBar
        item={[
          { name: "Plates", link: "plates" },
          { name: "Mini Vases", link: "minivases" },
          { name: "Bowls", link: "bowls" },
        ]}
      />
      <div className="flex-1 flex overflow-hidden">
        <div className="flex-1 overflow-y-scroll">
          <div className="flex flex-wrap gap-10 justify-center mt-20 mb-20">
            {props.items.map((item, index) => (
              <Item
                name={item.name}
                price={item.price}
                key={index}
                image={item.image}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
