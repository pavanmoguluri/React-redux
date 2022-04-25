import React, { useEffect } from "react"
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux'
import { setProducts } from "../../redux/actions/action";


const Read = () => {

    const dispatch = useDispatch();
    const products = useSelector((state) => state.allProducts.products);

    const fetchResponse = async () => {
        const result = await axios.get("http://localhost:3000/books").catch((err) => {
            console.log("error", err);
        })
        const dataArray = result.data;
        dispatch(setProducts(dataArray));
    }

    useEffect(() => {
        fetchResponse();
    }, [])
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                        <th scope="col">Author</th>
                        <th scope="col">Cost</th>
                        <th scope="col">Date</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((result, key) => {
                        return (
                            <tr key={key}>
                                <td>{result.id}</td>
                                <td>{result.BookName}</td>
                                <td>{result.Author}</td>
                                <td>{result.Cost}</td>
                                <td>{result.PublishedDate}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}
export default Read;