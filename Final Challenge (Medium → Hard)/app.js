let result = document.getElementById("result");
const variableDeclarations = [
  { name: "userName", type: "String", value: '"CD"', declaredWith: "const" },
  { name: "age", type: "Number", value: 30, declaredWith: "let" },
  { name: "isAdmin", type: "Boolean", value: false, declaredWith: "var" },
];

const miniAnalyzer = {
  data: variableDeclarations,

  [Symbol.iterator]() {
    let index = 0;
    const data = this.data;

    return {
      next() {
        if (index < data.length) {
          return { value: data[index++], done: false };
        }
        return { done: true };
      },
    };
  },

  formatOutput() {
    let report = `Variable Declarations Report:\n\n <br>`;

    for (const variable of this) {
      report += `<br>
${this.data.indexOf(variable) + 1}.    Name: ${variable.name}<br>
   Type: ${variable.type}<br>
   Value: ${variable.value}<br>
   Declared with: ${variable.declaredWith}<br>
`;
    }

    report += `<br>
---
Reflection Logs:<br>
<br>
<br>- Unexpected behavior 1: Jab main variable ki type check kar raha tha (jaise pata lagana ke wo number hai ya string) to null aur array ke liye alag tareeke se behave kiya jis se confusion hua.
<br><br>- Unexpected behavior 2: Jab main iterator ke andar arrow function use kiya to this ka matlab (jo object ka reference hota hai) sahi tarah kaam nahi kar raha tha matlab wo apni jagah ka reference khoya hua tha.<br>
<br>- Unexpected behavior 3: Multi-line template literals mein extra whitespace aa jata hai jiski wajah se console output ka format thoda kharab lagta hai.
`;

    return report;
  },
};

result.innerHTML = miniAnalyzer.formatOutput();
