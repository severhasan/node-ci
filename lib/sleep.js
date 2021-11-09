module.exports = () => {
  const timeout = Math.floor(Math.random() * 100) * 9 + 100;
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, timeout);
  });
};
