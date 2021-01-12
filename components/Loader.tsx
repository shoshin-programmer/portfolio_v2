const Loader = ({ message }) => {
  return (
    <div className="h-100 u-flex u-items-center u-justify-center">
      <div className="animated loading hide-text">
        <p>{message}</p>
      </div>
    </div>
  );
};
export default Loader;
