const obj = {
  name: "CD",

  regularFunc: function () {
    console.log("Regular function this.name:", this.name);
  },

  arrowFunc: () => {
    console.log("Arrow function this.name:", this.name);
  },
};

obj.regularFunc();
obj.arrowFunc();
