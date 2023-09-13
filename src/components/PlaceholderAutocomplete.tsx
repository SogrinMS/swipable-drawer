import { Item } from "@/pages";
import { Autocomplete, TextField } from "@mui/material";

interface PlaceholderAutocompleteProps {
  items: Array<Item | null>;
  selectedItem: Item | null;
  setSelectedItem: (item: Item | null) => void;
}

export const PlaceholderAutocomplete = ({
  items,
  selectedItem,
  setSelectedItem,
}: PlaceholderAutocompleteProps) => {
  const handleChange = (_: React.SyntheticEvent, newValue: Item | null) => {
    setSelectedItem(newValue);
  };

  return (
    <Autocomplete
      options={items}
      value={selectedItem}
      onChange={handleChange}
      isOptionEqualToValue={(props, option) => props?.id === option?.id}
      clearIcon={undefined}
      getOptionLabel={(option) => option?.title ?? "Все"}
      renderOption={(props, option) => {
        if (option === null) {
          return (
            // eslint-disable-next-line jsx-a11y/role-supports-aria-props
            <li {...props} aria-selected={!selectedItem}>
              Все
            </li>
          );
        }

        return <li {...props}>{option?.title}</li>;
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          inputProps={{
            ...params.inputProps,
            value: params.inputProps.value || "Все",
          }}
        />
      )}
    />
  );
};
