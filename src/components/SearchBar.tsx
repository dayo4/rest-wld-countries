"use client";
import { useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search for a country..."
      value={query}
      onChange={handleChange}
      className="w-full sm:w-80 p-3 rounded-md shadow-md border border-gray-300 focus:outline-none"
    />
  );
}
