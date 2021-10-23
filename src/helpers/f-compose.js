const compose =
  (...funcs) =>
  (component) => {
    return funcs.reduceRight((prevRes, f) => f(prevRes), component);
  };

export default compose;
