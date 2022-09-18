export default (fn) =>
  function (...args) {
    const fnResolution = fn(...args);
    const next = args[args.length - 1];
    return Promise.resolve(fnResolution).catch(next);
  };
