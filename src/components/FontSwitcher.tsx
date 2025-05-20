"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useFont } from "@/lib/hooks/useFont";

export default function FontSwitcher() {
  const { currentFont, setFont, fontOptions } = useFont();

  return (
    <Select value={currentFont} onValueChange={setFont}>
      <SelectTrigger className="cursor-pointer w-[180px] bg-accent border-border">
        <SelectValue placeholder="Select font" />
      </SelectTrigger>
      <SelectContent>
        {fontOptions.map((font) => (
          <SelectItem
            key={font.id}
            value={`font-${font.id}`}
            style={font.font.style}
            className="cursor-pointer"
          >
            {font.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
