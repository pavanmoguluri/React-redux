import { useState } from "react";
import axios from "axios";
import { deleteProdct } from "../../redux/actions/action";
import { useDispatch } from "react-redux";

const DeleteBook = () => {
    const [book, setBook] = useState();
    const dispatch = useDispatch();
    
    const deleteBook = (id) =>{
        console.log("in the function")
        const url = "http://localhost:3000/books/"+ book;
        axios.delete(url).catch(err => {
            console.log("Error", err)
        })
        dispatch(deleteProdct(
            book
        ))
    }
    console.log(book);
    return (
        <div>
        <div className="id mb-2">
            <label htmlFor="id " className=" mb-2" >Id</label>
            <div><input type="number" name="id" onChange={(e)=>{
                setBook(e.target.value)
            }} /></div>
        </div>
        <button type="submit" onClick={deleteBook}>Submit</button>
        </div>

    );
}

export default DeleteBook;