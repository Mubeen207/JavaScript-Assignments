function nestedPromises(count, maxCount) {
  return new Promise((resolve, reject) => {
    if (count > maxCount) {
      console.log(`Reached max count: ${maxCount}`);
      resolve();
      return;
    }
    console.log(`Count ${count} - Count ${maxCount} - Timestamp ${new Date()}`);
    setTimeout(() => {
      nestedPromises(++count, maxCount).then(resolve).catch(reject);
    }, 1000);
  });
}

nestedPromises(1, 6)
  .then(() => console.log("All counts complete"))
  .catch((err) => console.log("Error", err));
