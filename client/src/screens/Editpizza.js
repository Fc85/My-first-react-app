import React, {useEffect ,useState} from 'react'
import {useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { editPizza, getPizzaById } from '../actions/pizzaActions'
import Loading from '../components/Loading'
import Error from '../components/Error'
import Success from '../components/Success'

export default function Editpizza() {

    const params = useParams()
    const dispatch = useDispatch()
    const [name, setname] = useState('')
    const [smallprice, setsmallprice] = useState('')
    const [mediumprice, setmediumprice] = useState('')
    const [largeprice, setlargeprice] = useState('')
    const [image, setimage] = useState('')
    const [description, setdescription] = useState('')
    const [category, setcategory] = useState('')

    const getpizzabyidstate = useSelector(state=>state.getPizzaByIdReducer)

    const {pizza, error, loading} = getpizzabyidstate
    const editpizzastate = useSelector((state) => state.editPizzaReducer)
    const {editloading , editerror , editsuccess} = editpizzastate

    useEffect(() => {
        
        if(pizza){
            if(pizza._id==params.pizzaid){
            setname(pizza.name)
            setsmallprice(pizza.prices[0]['small'])
            setmediumprice(pizza.prices[0]['medium'])
            setlargeprice(pizza.prices[0]['large'])
            setimage(pizza.image)
            setdescription(pizza.description)
            setcategory(pizza.category)
            }
            else{
                dispatch(getPizzaById(params.pizzaid))
            }
        }
        else{
            dispatch(getPizzaById(params.pizzaid))
        }

    }, [pizza , dispatch])
    
    function formHandler(e){
        e.preventDefault();

        const editedpizza={
            _id : params.pizzaid,
            name,
            image,
            description,
            category,
            prices:{
                small: smallprice,
                medium: mediumprice,
                large: largeprice
            }
        }

        dispatch(editPizza(editedpizza))
    }

    return (
        <div>
            <div className="text-start">
                <h1>Edit Pizza</h1>
                
                {loading && (<Loading/>)}
                {error && (<Error error="Something went wrong"/>)}
                {editsuccess && (<Success success="Pizza details edited successfully"/>)}
                {editloading && (<Loading/>)}

                <form onSubmit={formHandler}>
                    <input className="form-control" type="text" placeholder="Name" value={name} onChange={(e) => {setname(e.target.value)}} />
                    <input className="form-control" type="text" placeholder="Small varient price" value={smallprice} onChange={(e) => {setsmallprice(e.target.value)}} />
                    <input className="form-control" type="text" placeholder="Medium varient price" value={mediumprice} onChange={(e) => {setmediumprice(e.target.value)}} />
                    <input className="form-control" type="text" placeholder="Large varient price" value={largeprice} onChange={(e) => {setlargeprice(e.target.value)}} />
                    <input className="form-control" type="text" placeholder="Category" value={category} onChange={(e) => {setcategory(e.target.value)}} />
                    <input className="form-control" type="text" placeholder="Description" value={description} onChange={(e) => {setdescription(e.target.value)}} />
                    <input className="form-control" type="text" placeholder="Image url" value={image} onChange={(e) => {setimage(e.target.value)}} />
                    <button className="btn mt-3" type="submit">Edit Pizza</button>
                </form>
            </div>
        </div>
    )
}
