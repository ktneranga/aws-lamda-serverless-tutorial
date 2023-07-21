const response = require("./APIResponse");

exports.handler = async (event) => {
  console.log("events==========================", event);
  if (!event.pathParameters || !event.pathParameters.id) {
    return response._400({ message: "User id not found" });
  }

  return response._200({ data: data[event.pathParameters.id] });
};

const data = {
  1234: { name: "Anna Jones", age: 25, job: "journalist" },
  7893: { name: "Chris Smith", age: 52, job: "teacher" },
  5132: { name: "Tom Hague", age: 23, job: "plasterer" },
};
