import CollectionPage from "@/components/CollectionPage";
import Item, { ItemProps } from "@/components/Item";
import SideBar from "@/components/SideBar";

const items: ItemProps[] = [
  {
    name: "Bowl 1",
    price: "$200",
    link: "bowl-1",
    image: require("../../assets/bowls/bowl1.jpg"),
  },
  {
    name: "Bowl 2",
    price: "$200",
    link: "bowl-2",
    image: require("../../assets/bowls/bowl2.jpg"),
  },
  {
    name: "Bowl 3",
    price: "$200",
    link: "bowl-3",
    image: require("../../assets/bowls/bowl3.jpg"),
  },
  {
    name: "Bowl 4",
    price: "$200",
    link: "bowl-4",
    image: require("../../assets/bowls/bowl4.jpg"),
  },
  {
    name: "Bowl 5",
    price: "$200",
    link: "bowl-5",
    image: require("../../assets/bowls/bowl5.jpg"),
  },
];

export default function bowls() {
  return <CollectionPage items={items} />;
}
