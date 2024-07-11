import "./App.css";
import Header from "./components/Header.jsx";
import Note from "./components/Note.jsx";
import Footer from "./components/Footer.jsx";
import CreateArea from "./components/CreateArea.jsx";
import { useState } from "react";


export default function App() {
  const [notes,setNotes] = useState([]);
  function addNote(newNote){
    setNotes(preNotes => {
      return [...preNotes,newNote]
    })
  }
  
  function deleteNote(id){
    setNotes((preValue) => {
      return preValue.filter((value,index) => {
        return index!==id
      })
    })
  }

  return (
    <>
      <Header />
      <CreateArea onAdd={addNote}/>
      {notes.map((noteItem,index) => {
         return  <Note key={index} id={index} title={noteItem.title} content={noteItem.content} delete={deleteNote}/>
      })}
      <Footer />
    </>
  );
}
