export default function Note(props){
    function handleClick(){
        props.delete(props.id)
    }
    return (
        <div className="note">
            <h2>{props.title}</h2>
            <p>{props.content}</p>
            <button className="delete" onClick={handleClick}>Delete</button>
        </div>
    )
}