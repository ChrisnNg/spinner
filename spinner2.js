const spinner = function() {
  let time = 100;
  let fidgetHalfLoop = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   '];
  for (let rotate of fidgetHalfLoop) {
    setTimeout(() => {
      process.stdout.write(rotate);
    }, time += 200);
  }
};
spinner();