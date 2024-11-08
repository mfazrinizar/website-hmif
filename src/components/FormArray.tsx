import React, { useState } from "react";
import { FormControl, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

type Props = {
  label: any;
};

export default function FormArray({ label }: Props) {
  const [items, setItems] = useState([""]);

  const addNewItem = () => {
    setItems([...items, ""]);
  };

  const handleInputChange = (index: any, value: any) => {
    const newItems = [...items];
    newItems[index] = value;
    setItems(newItems);
  };

  return (
    <FormItem className="flex flex-col justify-start">
      <FormLabel className="text-start">{label}</FormLabel>
      {items.map((item: any, index: any) => (
        <FormControl>
          <Input
            value={item}
            onChange={(e) => handleInputChange(index, e.target.value)}
            placeholder={`Enter ${label}`}
          />
        </FormControl>
      ))}
      <FormMessage />
      <Button className="my-2" type="button" onClick={addNewItem}>
        Tambah Data
      </Button>
    </FormItem>
  );
}
