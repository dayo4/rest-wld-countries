"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getCountryByCode } from "@/lib/getCountries";
import Link from "next/link";

export default function CountryDetailPage() {
    const params = useParams();
    const countryCode = params?.countryCode as string;

    const [country, setCountry] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (!countryCode) return;

        async function fetchData() {
            try {
                const data = await getCountryByCode(countryCode);
                if (!data) throw new Error("Country not found");
                setCountry(data);
            } catch (err) {
                setError(true);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [countryCode]);

    if (loading) return <p className="text-center mt-10 text-gray-500">Loading...</p>;
    if (error) return <p className="text-center mt-10 text-red-500">Country not found.</p>;

    return (
        <section className="max-w-4xl mx-auto px-6 py-10">
            <Link href="/" className="inline-block border px-6 py-2 rounded-md shadow-md mb-6">
                ← Back
            </Link>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <img src={country.flags?.png} alt={country.name?.common} className="w-full h-64 object-cover rounded-lg shadow-lg" />
                <div>
                    <h1 className="text-3xl font-bold">{country.name?.common}</h1>
                    <p className="mt-3"><strong>Native Name:</strong> {country.name?.nativeName?.[Object.keys(country.name.nativeName)[0]]?.common}</p>
                    <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
                    <p><strong>Region:</strong> {country.region}</p>
                    <p><strong>Sub Region:</strong> {country.subregion}</p>
                    <p><strong>Capital:</strong> {country.capital?.[0]}</p>

                    <p className="mt-4"><strong>Top Level Domain:</strong> {country.tld?.[0]}</p>
                    <p><strong>Currencies:</strong> {Object.values(country.currencies || {}).map((cur: any) => cur.name).join(", ")}</p>
                    <p><strong>Languages:</strong> {Object.values(country.languages || {}).join(", ")}</p>

                    <div className="mt-6">
                        <h3 className="text-lg font-semibold">Border Countries:</h3>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {country.borderCountries.length > 0 ? (
                                country.borderCountries.map((border:any) => (
                                    <Link key={border.code} href={`/country/${border.code}`} className="border px-4 py-2 rounded-md shadow-sm">
                                        {border.name}
                                    </Link>
                                ))
                            ) : (
                                <p>No border countries</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
