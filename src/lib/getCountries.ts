export async function getCountries() {
  const res = await fetch("https://restcountries.com/v3.1/all");

  if (!res.ok) {
    throw new Error("Failed to fetch country data");
  }

  return res.json();
}

export async function getCountryByCode(code: string) {
  const res = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
  if (!res.ok) return null;
  const data = await res.json();
  const country = data[0];

  // Fetch border country names
  if (country.borders) {
    const borderCodes = country.borders.join(",");
    const bordersRes = await fetch(
      `https://restcountries.com/v3.1/alpha?codes=${borderCodes}`
    );
    const bordersData = await bordersRes.json();
    country.borderCountries = bordersData.map((c: any) => ({
      code: c.cca3,
      name: c.name.common,
    }));
  } else {
    country.borderCountries = [];
  }

  return country;
}
