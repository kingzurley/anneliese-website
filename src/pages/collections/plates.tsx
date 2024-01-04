import CollectionPage from "@/components/CollectionPage";
import Item, { ItemProps } from "@/components/Item";
import SideBar from "@/components/SideBar";

const items: ItemProps[] = [
  {
    name: "Plate 1",
    price: "$200",
    link: "plate-1",
    image: require("../../assets/plates/plate1.jpg"),
  },
  {
    name: "Plate 2",
    price: "$200",
    link: "plate-2",
    image: require("../../assets/plates/plate2.jpg"),
  },
];

export default function plates() {
  return <CollectionPage items={items} />;
}
