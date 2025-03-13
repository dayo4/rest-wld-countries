"use client";
import { useState } from "react";

const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

interface FilterProps {
  onSelectRegion: (region: string) => void;
}

export default function Filter({ onSelectRegion }: FilterProps) {
  const [selectedRegion, setSelectedRegion] = useState("");

  const handleSelect = (region: string) => {
    setSelectedRegion(region);
    onSelectRegion(region);
  };

  return (
    <div className="relative">
      <select
        className="p-3 border rounded-md bg-white shadow-sm dark:bg-gray-800 dark:text-white"
        value={selectedRegion}
        onChange={(e) => handleSelect(e.target.value)}
      >
        <option value="">Filter by Region</option>
        {regions.map((region) => (
          <option key={region} value={region}>
            {region}
          </option>
        ))}
      </select>
    </div>
  );
}
