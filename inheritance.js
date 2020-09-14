class Parent {
  constructor(props) {
    console.log('Parent.constructor(): ', props);
  }

  componentWillUnmount() {
    console.log('Parent.componentWillUnmount()');
  }
}

class Child extends Parent {
  componentWillUnmount() {
    console.log('Child.componentWillUnmount()');
  }
}

const child = new Child();

child.componentWillUnmount();
