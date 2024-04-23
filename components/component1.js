const clsx = require("clsx");

const component1 = {
  name: "component1 Updated",
  classNames: "Shared use clsx" + clsx("foo", true && "bar", "baz"),
};

module.exports = {
  component1,
};
