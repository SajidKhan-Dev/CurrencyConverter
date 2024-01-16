
// CurrencyDropdown.jsx
const CurrencyDropdown = (props) => {

  const { currencyOptions, selectedCurrency,onChangeCurrency  } = props;

  return (
    <div className="relative">
      <div className="flex items-center relative">
        <select
          className="w-full md:w-[249px] max-w-full h-[53px] bg-blue-950 rounded-[26.50px] shadow-inner outline-none text-white px-5 font-semibold"
          value={selectedCurrency} onChange={onChangeCurrency}
        > {currencyOptions.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
        </select>
      </div>
   
    </div>
  );
};

export default CurrencyDropdown;