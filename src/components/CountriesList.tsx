"use client";
import { useEffect, useState } from "react";
import { getCountries } from "@/lib/getCountries";
import SearchBar from "./SearchBar";
import Filter from "./Filter";
import Link from "next/link";

export default function CountriesList() {
  const [countries, setCountries] = useState<any[]>([]);
  const [filteredCountries, setFilteredCountries] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");

  useEffect(() => {
    async function fetchCountries() {
      try {
        const data = await getCountries();
        setCountries(data);
        setFilteredCountries(data);
      } catch (err) {
        console.error("Failed to load countries.");
      }
    }
    fetchCountries();
  }, []);

  useEffect(() => {
    let updatedCountries = countries;

    if (searchQuery) {
      updatedCountries = updatedCountries.filter((country) =>
        country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedRegion) {
      updatedCountries = updatedCountries.filter(
        (country) => country.region === selectedRegion
      );
    }

    setFilteredCountries(updatedCountries);
  }, [searchQuery, selectedRegion, countries]);

  return (
    <section className="max-w-7xl mx-auto px-6">
      {/* Search and Filter section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 my-6">
        <SearchBar onSearch={setSearchQuery} />
        <Filter onSelectRegion={setSelectedRegion} />
      </div>

      {/* Country Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredCountries.map((country) => (
          <Link key={country.cca3} href={`/country/${country.cca3}`} passHref>
            <div className="shadow-md rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-transform transform hover:scale-105 flex flex-col h-full">
              {/* Country Flag */}
              <img
                src={country.flags?.png}
                alt={country.name?.common}
                className="w-full h-40 object-cover"
              />

              {/* Country Info (Ensuring equal heights) */}
              <div className="p-4 flex flex-col flex-1">
                <h2 className="font-bold text-lg mb-2">{country.name?.common}</h2>
                <p className="text-sm flex-1">
                  <strong>Population:</strong> {country.population.toLocaleString()}
                </p>
                <p className="text-sm"><strong>Region:</strong> {country.region}</p>
                <p className="text-sm"><strong>Capital:</strong> {country.capital?.[0]}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
