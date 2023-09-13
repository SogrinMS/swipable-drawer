import { Item } from "@/pages";
import { List, ListItemButton, ListItemText } from "@mui/material";
import { useEffect, useState } from "react";

interface PlaceholderListProps {
  items: Item[];
  selectedItem: Item | null;
  setSelectedItem: (item: Item) => void;
}

export const PlaceholderList = ({
  items,
  selectedItem,
  setSelectedItem,
}: PlaceholderListProps) => {
  return (
    <List>
      {items.map((item) => {
        return (
          <ListItemButton key={item.id} selected={item.id === selectedItem?.id}>
            <ListItemText
              primary={item.title}
              onClick={() => setSelectedItem(item)}
            />
          </ListItemButton>
        );
      })}
    </List>
  );
};
