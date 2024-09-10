import React from 'react';

const withGreeting = (WrappedComp) => {
  return (props) => {
    const modifiedProps = {
      greet: "hello",
      ...props,
    }

    return <WrappedComp {...modifiedProps} />
  }
}

const Hey = (props) => {
  console.log("props: ", props); // you will now have access to that props
  return <><div>I am from Hey component</div></>
}

const WithHOC = withGreeting(Hey);

const App = () => {
  return <WithHOC />
}

export default App;
