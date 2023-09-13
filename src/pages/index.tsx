import { DetailInfo } from "@/components/DetailInfo";
import { PlaceholderAutocomplete } from "@/components/PlaceholderAutocomplete";
import { PlaceholderList } from "@/components/PlaceholderList";
import { Inter } from "next/font/google";
import { useState, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export interface Item {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export default function Home() {
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    const fetchItems = () => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then(setItems);
    };

    fetchItems();
  }, []);

  const handleSelectedItem = (item: Item | null) => {
    setSelectedItem(item);
  };

  return (
    <main className={`min-h-screen p-6 ${inter.className}`}>
      {/* <PlaceholderList
        items={items}
        selectedItem={selectedItem}
        setSelectedItem={handleSelectedItem}
      /> */}

      <PlaceholderAutocomplete
        items={[null, ...items]}
        selectedItem={selectedItem}
        setSelectedItem={handleSelectedItem}
        emptyLabel="Все"
      />

      <DetailInfo selectedItem={selectedItem} />
    </main>
  );
}
