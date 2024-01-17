import { useEffect, useState } from "react";

const CurrencyDropdown = (props) => {
  const { onChangeCurrency } = props;
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    // Fetch country data from the API
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v2/all");
        if (!response.ok) {
          throw new Error("Unable to fetch country data");
        }
        const data = await response.json();
        setCountries(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching country data:", error);
      }
    };

    fetchCountries();
  }, []);

  const { selectedCurrency } = props;

  return (
    <div className="relative">
      <div className="flex items-center relative">
        <select
          className="w-full md:w-[249px] max-w-full h-[53px] bg-blue-950 rounded-[26.50px] shadow-inner outline-none text-white px-5 font-semibold"
          value={selectedCurrency}
          onChange={onChangeCurrency}
        >
          {countries.map((country) => (
            <option
              key={country.currencies?.[0]?.code}
              value={country.currencies?.[0]?.code}
            >
              {country.currencies?.[0]?.code} - {country.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CurrencyDropdown;
