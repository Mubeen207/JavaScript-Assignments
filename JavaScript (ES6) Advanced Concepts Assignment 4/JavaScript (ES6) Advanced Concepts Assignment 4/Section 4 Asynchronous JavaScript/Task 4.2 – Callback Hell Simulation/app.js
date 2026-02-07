function nestedCallbacks(count, maxCount) {
  if (count > maxCount) {
    console.log(`Reached max count: ${maxCount}`);
    return;
  }
  console.log(`Count ${count} - Count ${maxCount} - Timestamp ${new Date()}`);
  setTimeout(() => {
    nestedCallbacks(++count, maxCount);
  }, 1000);
}

nestedCallbacks(1, 5);
