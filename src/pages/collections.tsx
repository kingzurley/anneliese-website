import Header from "@/components/Header";
import Item from "@/components/Item";

const items = Array(12).fill({
  name: "Item Name",
  price: "200",
});

export default function collections() {
  return (
    <div>
      <Header
        collection={[
          "Collection 1",
          "Collection 2",
          "Collection 3",
          "Collection 4",
        ]}
      />
      <div className="flex flex-wrap justify-center gap-y-10 gap-x-10 ml-24 mr-24 mt-12">
        {items.map((item, index) => (
          <Item name={item.name} price={item.price} key={index} />
        ))}
      </div>
    </div>
  );
}
