import Card from "./Card.jsx"
import Student from "./Student.jsx"
import UserGreeting from "./UserGreeting.jsx";
import List from "./List.jsx"
import Button from "./Button.jsx"
import ProfilePicture from "./ProfilePicture.jsx";
import MyComponents from "./MyComponents.jsx";
import Counter from "./Counter.jsx"
import OnChangeHandler from "./OnChangeHandler.jsx";
import ColorPicker from "./ColorPicker.jsx";
import UpdateArray from "./UpdateArray.jsx";
import UpdateArrayOfObject from "./UpdateArrayOfObject.jsx"
import ToDoList from "./ToDoList.jsx";

function App() {
  const fruits = [{id:1, name:"apple", calories:95}, 
                  {id:2, name:"orange", calories:45}, 
                  {id:3, name:"banana", calories:105}, 
                  {id:4, name:"pineapple", calories:37},
                  {id:5, name:"coconout", calories:159}
    ]
  const vegetables  = [{id:6, name:"potatos", calories:98}, 
                        {id:7, name:"carrot", calories:65}, 
                        {id:8, name:"cabage", calories:115}, 
                        {id:9, name:"onion", calories:42},
                        {id:10, name:"spinach", calories:150}
]


  return(
    <>
    {/* <UserGreeting isLoggedIn={true}/>
    <Card/>
    <ColorPicker/>
    <Student name="Spongebob" age={30} isStudent={true}/>
    <Student name="Patrick" age={42} isStudent={false}/>

    {fruits.length > 0 ? <List items = {fruits} category="Fruits"/> : null}
    {vegetables.length > 0 && <List items = {vegetables} category="Vegetables"/>}
    
    <ProfilePicture/>
    <Button/>

    <MyComponents/>
    <Counter/>
    <OnChangeHandler/>
    <UpdateArray/>
    <UpdateArrayOfObject/> */}
    <ToDoList/>
    </>


  );
}

export default App
