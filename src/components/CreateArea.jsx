import { useState } from "react"

export default function CreateArea(props){
    const [note,setNote] = useState({
        title:"",
        content:""
    })

    function handleChange(e){
        const {name,value} = e.target;
        
       setNote(preValue => {
        return {
            ...preValue,
            [name]:value
        }
       })
    }

    function submit(e){
        props.onAdd(note)
        setNote({
            title:"",
            content:""
        })
        e.preventDefault();
    }
    
    
    return (
        <div>
            <form>
            <input onChange={handleChange} name="title" placeholder="title" value={note.title}/>
            <textarea onChange={handleChange} name="content" placeholder="take a note..." rows={3} value={note.content} />
            <button onClick={submit}>Add</button>
            </form>
        </div>
    )
}