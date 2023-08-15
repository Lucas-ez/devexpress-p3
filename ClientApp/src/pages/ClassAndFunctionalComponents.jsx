
import { useState, useEffect, Component } from "react";

// Manejo del estado

class CounterClass extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

function CounterFunctional() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}


// Carga de elementos

class DataFetchingClass extends Component {
  constructor(props) {
    super(props);
    this.state = { data: null };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <p>{data && data.slice(-2).map( e => 
          <span key={e.id}>{e.title}</span>)}
        </p>
      </div>
    );
  }
}

function DataFetchingFunctional() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <div>
      <p>{data && data.slice(-2).map( e => 
        <span key={e.id}>{e.title}</span>)}
      </p>
    </div>
  );
}

// ------------------------------- //

const ClassAndFunctionalComponents = () => {
  return (
    <div>
      <h2>
        Manejo del estado
      </h2>
      <CounterClass />
      <CounterFunctional />
      <hr />
      <h2>
        Carga de elementos
      </h2>
      <DataFetchingClass />
      <DataFetchingFunctional />
    </div>
  )
}

export default ClassAndFunctionalComponents