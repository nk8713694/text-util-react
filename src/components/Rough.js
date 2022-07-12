// import PropTypes from 'prop-types'
// import { useState } from 'react';

// let name = "noobie";
// function Rough(props) {
//   const [text,setText] = useState('green');

//   const handleClearClick = (event)=>{ 
//   //  let newText = '';
//   const newColor = text === 'green' ? 'yellow' : 'green';
//   event.target.style.backgroundColor = newColor;

//     setText(newColor);
//    // props.showAlert("Text Cleared!", "success");
// }


  
//   return (
//     <div className='container my-6'>
//       <div className="rascal">
//         rough my god props {props.greetings}
//         {props.title}
//       </div>
//       <div className="rascal">
//         wtff {name} pehle kyu nahi chal raha thaa tu{" "}
//       </div>
//       hi beaches

//       <button className="btn btn-primary" onClick={handleClearClick}  style={{ backgroundColor: text }}> {text}</button>
//     </div>
//   );
// }

// export default Rough;

// Rough.propTypes = {
//     greetings: PropTypes.string.isRequired,
//     title: PropTypes.number.isRequired
// }

// Rough.defaultProps = {
//     title: 'Set title here',
//     aboutText: 'About'
//   };