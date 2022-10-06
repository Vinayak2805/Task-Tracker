import PropTypes from 'prop-types'
import Button from './Button'

const Header = (props) => {
  return (
    <header className='header'>
        {/* <h1 style={headingStyle}>{props.title}</h1> */}
        {/* <h1 style={{color:"red", backgroundColor:"black"}}>{props.title}</h1> --> inline style*/}
        <h1>{props.title}</h1>
        <Button text="Add" color="green"/>
    </header>
  )
}

// CSS in JS
// const headingStyle ={
//     color:"red", 
//     backgroundColor:"black"
// }

Header.defaultProps = {
    title:"Betey Harry"
}
Header.propTypes = {
    title: PropTypes.string.isRequired,
}
export default Header