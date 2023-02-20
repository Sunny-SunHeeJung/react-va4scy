// stateful component
// stateless component

function ToggleButton(props /* { on, onText, offTest } */) {
  // props - read only

  const handleToggle = () => {};

  return (
    <button type="button" className="ToggleButton">
      {props.on ? props.onText : props.offText}
    </button>
  );
}

ToggleButton.defaultProps = {
  on: false,
  onText: '활성',
  offText: '비활성',
};

export default ToggleButton;
