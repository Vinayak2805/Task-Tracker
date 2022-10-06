import PropTypes from 'prop-types';
const Button = (props) => {
  return (
    <button onClick={props.click} className='btn' style={{backgroundColor:props.color}}>{props.text}</button>
  )
}
Button.propTypes={
    text: PropTypes.string,
    color: PropTypes.string,
    click: PropTypes.func.isRequired,
}
export default Button