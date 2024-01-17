const CurrencyInput = (props) => {
  const { amount, onChangeAmount } = props;

  const handleInputChange = (e) => {
    // Parse the input value as a number
    let newValue = parseFloat(e.target.value);

    // Check if the new value is a valid number
    if (!isNaN(newValue)) {
      // Call the parent component's onChangeAmount with the updated value
      onChangeAmount(newValue);
    } else {
      // If the value is not a valid number, set it to an empty string or another default value
      onChangeAmount('');
    }
  };

  return (
    <div>
      <input
        placeholder="Amount"
        type="text"
        className="w-full md:w-[249px] max-w-full h-[53px] bg-blue-950 rounded-[26.50px] shadow-inner outline-none text-white px-5 font-semibold"
        value={amount}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default CurrencyInput;
