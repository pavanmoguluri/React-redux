import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createProduct } from "../../redux/actions/action"

const Create = () => {
    const [formData, setFromData] = useState("");
    const dispatch = useDispatch();
    const handleChange = (e) => {
        setFromData(

            {
                ...formData,
                [e.target.name]: e.target.value
            }
        )
    }
    const createBook = (e) => {
        e.preventDefault();
        const url = "http://localhost:3000/books";
        axios.post(url, formData).catch(err => {
            console.log("Error", err)
        })
        dispatch(createProduct(
            formData
        ))
    }
    return (
        <form name="modalForm" onSubmit={createBook}>
            <div className="create ml-0">
                <div className="id mb-2">
                    <label htmlFor="id " className=" mb-2" >Id</label>
                    <div><input type="text" name="id" onChange={handleChange} /></div>
                </div>
                <div className="username mb-2">
                    <label htmlFor="username " className=" mb-2" >Enter title </label>
                    <div><input type="text" name="BookName" onChange={handleChange} /></div>
                </div>
                <div className="author mb-2">
                    <label htmlFor="text " className=" mb-2" >Enter Author</label>
                    <div><input type="text" name="Author" onChange={handleChange} /></div>
                </div>
                <div className="cost mb-2">
                    <label htmlFor="number " className=" mb-2" >Enter  Cost</label>
                    <div><input type="text" name="Cost" onChange={handleChange} /></div>
                </div>
                <div className="date mb-2">
                    <label htmlFor="date " className=" mb-2" >Enter published Date</label>
                    <div><input type="date" name="PublishedDate" onChange={handleChange} /></div>
                </div>
                <button type="submit" className="btn btn-primary" >Submit</button>
            </div>
        </form>
    );
}

export default Create;