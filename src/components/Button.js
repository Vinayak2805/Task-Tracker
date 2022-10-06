import PropTypes from 'prop-types';
const Button = (props) => {
  return (
    <button className='btn' style={{backgroundColor:props.color}}>{props.text}</button>
  )
}
Button.propTypes={
    text: PropTypes.string,
    color: PropTypes.string
}
export default Button