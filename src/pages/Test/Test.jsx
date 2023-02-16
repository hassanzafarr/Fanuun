import React from "react";

import { Widget, PopupButton } from "@typeform/embed-react";
import "./test.css";
import Fade from "react-reveal/Fade";
export default function Test() {
  return (
    <div className="formContainer">
      <Widget
        id="https://hebbccturah.typeform.com/to/MT61Gp4c"
        style={{ width: "100%", height: "100vh" }}
        className="my-form"
      />
    </div>
  );
}

// import { form, type, getMyQuestion } from "./child/data";
// import "./test.css";

// export default function Test() {
//   const [from, setfrom] = useState([]);
//   const onQuestion = (data) => {
//     setfrom([...from, getMyQuestion(data)]);
//     console.log(getMyQuestion(data));
//   };

//   return (
//     <div className="surveyContainer">
//       <div className="quesContainer">
//         {type.map((val) => (
//           <button
//             onClick={() => {
//               setfrom(form[val]);
//             }}
//           >
//             {val}
//           </button>
//         ))}

//         {form !== [] ? (
//           from.map((value) => <FormWay {...value} ques={onQuestion} />)
//         ) : (
//           <p>no data to show</p>
//         )}
//       </div>
//     </div>
//   );
// }

// const FormWay = ({ question, option, ques }) => (
//   <ul>
//     <p className="ques">{question}</p>
//     {option.map((val) => (
//       <button onClick={() => ques(val)}>{val}</button>
//     ))}
//   </ul>
// );
// https://5k5qu8w5p14.typeform.com/to/CCGpOHMr
