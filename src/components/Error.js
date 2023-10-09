const Error = ({ error }) => {
  return (
    <>
      {error && (
        <div className="error">
          <p className="error-text">{error}</p>
        </div>
      )}
    </>
  );
};

export default Error;
