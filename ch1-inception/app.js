// 1. creating react element
const heading1 = React.createElement(
  "h1",
  {
    id: "title1",
  },
  "Heading 1"
);

const heading2 = React.createElement(
  "h2",
  {
    id: "title2",
  },
  "Heading 2"
);

// 2. placing two heading tags inside a div
const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading1, heading2]
);

console.log(heading1);
console.log(heading2);

const heading = React.createElement("h1",{},"HEYYY")


// 3. specifying the parent of which our react code will be only child
const root = ReactDOM.createRoot(document.getElementById("root"));

// 4. passing above container to parent
root.render(container);
