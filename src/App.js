import './App.css';
import React, {useEffect, useState} from 'react';
import { useDispatch , useSelector} from 'react-redux';
import { addList, getList } from './redux/actions/actions';


function App() {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const list = useSelector((ss)=> ss.listReducer.list)

  const handleAdd = (e) => {
    e.preventDefault();
    dispatch(addList(inputValue))
    setInputValue('');
    
  }


  useEffect(()=>{
    return () => {
      dispatch(getList())
    }
  },[dispatch])

  return (
  <>
    <h1>Todo List</h1>
    <form >
    <input type="text" placeholder="Enter your task"
    value={inputValue}
     onChange={(e)=> setInputValue(e.target.value)} />
    <button type='submit' onClick={handleAdd}>Add</button>
    </form>
    {
      list.map((item,index) => {
        return <p key={index} >{item}</p>
      })
    }
  </>
  );
}

export default App;
