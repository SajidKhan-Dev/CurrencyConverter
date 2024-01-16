const ConversionResult = ({ result, loading }) => {
  return (
    <div className="bg-blue-950 p-6 rounded-lg shadow-md max-w-md mx-auto mt-10 flex items-center justify-center">

      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <div className="text-xl text-white font-semibold text-center">{result}</div>
        </div>
      )}

    </div>
  );
};

export default ConversionResult;
