const CurrencyInput = (props) => {
  const { amount, onChangeAmount } = props;

  const handleInputChange = (e) => {
    // Parse the input value as a number
    let newValue = parseFloat(e.target.value);

    // Check if the new value is a valid number
    if (!isNaN(newValue)) {
      // Ensure the new value is not less than 1
      newValue = Math.max(newValue, 1);
      // Call the parent component's onChangeAmount with the updated value
      onChangeAmount(newValue);
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
