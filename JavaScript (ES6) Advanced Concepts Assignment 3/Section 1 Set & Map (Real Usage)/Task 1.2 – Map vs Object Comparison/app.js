const obj = {};
const map = new Map();

obj["name"] = "CD";
map.set("name", "CD");

const keyObj = { id: 1 };
obj[keyObj] = "Object Value";
map.set(keyObj, "Object Value");

console.log("Object", obj);
console.log("Map", map);

console.log("Object[name]", obj["name"]);
console.log("Map.get(name)", map.get("name"));

console.log("Object[keyObj]", obj[keyObj]);
console.log("Map.get(keyObj)", map.get(keyObj));
