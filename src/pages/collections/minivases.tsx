import CollectionPage from "@/components/CollectionPage";
import Item, { ItemProps } from "@/components/Item";
import SideBar from "@/components/SideBar";

const items: ItemProps[] = [
  {
    name: "Mini vase 1",
    price: "$200",
    link: "mini-vase-1",
    image: require("../../assets/minivases/mini_vase1.jpg"),
  },
  {
    name: "Mini vase 2",
    price: "$200",
    link: "mini-vase-2",
    image: require("../../assets/minivases/mini_vase2.jpg"),
  },
  {
    name: "Mini vase 3",
    price: "$200",
    link: "mini-vase-3",
    image: require("../../assets/minivases/mini_vase3.jpg"),
  },
  {
    name: "Mini vase 4",
    price: "$200",
    link: "mini-vase-4",
    image: require("../../assets/minivases/mini_vase4.jpg"),
  },
  {
    name: "Mini vase 5",
    price: "$200",
    link: "mini-vase-5",
    image: require("../../assets/minivases/mini_vase5.jpg"),
  },
];

export default function minivases() {
  return <CollectionPage items={items} />;
}
