window.ComponentRegistry = {
  Text: {
    defaultProps: {
      content: "Text"
    },
    render: (props) => {
      const el = document.createElement("div");
      el.innerText = props.content;
      return el;
    }
  },

  Button: {
    defaultProps: {
      label: "Click Me"
    },
    render: (props) => {
      const el = document.createElement("button");
      el.innerText = props.label;
      return el;
    }
  }
};

