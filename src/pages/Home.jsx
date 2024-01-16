// Home.jsx

import backgroundImage from '../assets/bg.svg';
import CurrencyInput from '../components/CurrencyInput';
import CurrencyDropdown from '../components/CurrencyDropdown';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import { useEffect, useState } from 'react';
import ConversionResult from '../components/ConversionResult';

const Home = () => {
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  const [amount, setAmount] = useState(1);
  const [exchangeRate, setExchangeRate] = useState();
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);
  const [conversionResult, setConversionResult] = useState(null);
  const [loading, setLoading] = useState(false);

  let toAmount, fromAmount;
  if (amountInFromCurrency) {
    fromAmount = amount;
    toAmount = amount * exchangeRate;
  } else {
    toAmount = amount;
    fromAmount = amount / exchangeRate;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://v6.exchangerate-api.com/v6/1c8a9739ed315ace41767ca6/latest/USD'
        );
        console.log('Response status:', response.status);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('API response:', data);
        const firstCurrency = Object.keys(data.conversion_rates)[0];
        setCurrencyOptions([data.base_code, ...Object.keys(data.conversion_rates)]);
        setFromCurrency(data.base_code);
        setToCurrency(firstCurrency);
        setExchangeRate(data.conversion_rates[firstCurrency]);
      } catch (error) {
        console.error('Error fetching exchange rates:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (fromCurrency != null && toCurrency != null) {
      fetch(
        `https://v6.exchangerate-api.com/v6/1c8a9739ed315ace41767ca6/latest/USD?base=${fromCurrency}&symbol=${toCurrency}`
      )
        .then((res) => res.json())
        .then((data) => setExchangeRate(data.conversion_rates[toCurrency]));
    }
  }, [fromCurrency, toCurrency]);

  const handleConvert = () => {
    setLoading(true);
    const convertedAmount = amountInFromCurrency ? toAmount : fromAmount;
    setConversionResult(`${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`);
    setLoading(false);
  };

  return (
    <>
      <div className="bg-cover h-screen" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="flex justify-center items-center h-screen">
          <div className="bg-opacity-50 bg-purple-500 backdrop-blur-md rounded-xl p-4 md:w-10/12 lg:w-[56%] ">
            <div className="flex flex-col md:flex-row px-3 py-3 items-center">
              <div className="mb-4">
                <span className="text-white ml-2">Amount</span>
                <CurrencyInput amount={amount} onChangeAmount={setAmount} />
              </div>

              <div className="mb-4 ml-2">
                <span className="text-white ml-2">From</span>
                <CurrencyDropdown
                  currencyOptions={currencyOptions}
                  selectedCurrency={fromCurrency}
                  onChangeCurrency={(e) => setFromCurrency(e.target.value)}
                  amount={fromAmount}
                  onChangeAmount={(e) => {
                    setAmount(e.target.value);
                    setAmountInFromCurrency(true);
                  }}
                />
              </div>

              <SyncAltIcon className="text-white my-4 md:my-0 mx-auto md:mx-4" />

              <div className="mb-4">
                <span className="text-white ml-2">To</span>
                <CurrencyDropdown
                  currencyOptions={currencyOptions}
                  selectedCurrency={toCurrency}
                  onChangeCurrency={(e) => setToCurrency(e.target.value)}
                  amount={toAmount}
                  onChangeAmount={(e) => {
                    setAmount(e.target.value);
                    setAmountInFromCurrency(false);
                  }}
                />
              </div>
            </div>

            <div
              className="py-3 ml-4 mr-4 text-white cursor-pointer text-center bg-blue-950 rounded-[26.50px]"
              onClick={handleConvert}
            >
              Convert
            </div>
            
            <ConversionResult result={conversionResult} loading={loading} />
          </div>
        </div>
      
      </div>
    </>
  );
};

export default Home;
