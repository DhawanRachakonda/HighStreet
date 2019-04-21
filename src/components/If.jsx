function If(props) {
  const { children, condition } = props;
  return condition() && children;
}

export default If;
