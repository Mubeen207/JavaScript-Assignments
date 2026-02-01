{
  let marks = [45, 72, 88, 30, 90];

  let filter = marks.filter((m) => {
    console.log("filter Mark: ", m);
    return m >= 50;
  });
  filter.map((num) => {
    console.log("Greater Then 50 Marks: ", num);
  });
  let total = filter.reduce((sum, mark) => {
    console.log("reduce sum: ", sum);
    console.log("reduce mark: ", mark);
    return sum + mark;
  }, 0);
  console.log("total Result: ", total);
}
