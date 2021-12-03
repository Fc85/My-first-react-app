import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPizzas } from '../actions/pizzaActions'
import Pizza from '../components/Pizza'
import Loading from '../components/Loading'
import Error from '../components/Error'
import Filter from '../components/Filter'

export default function Homescreen() {

    const dispatch = useDispatch()

    const pizzasstate = useSelector(state => state.getAllPizzasReducer)

    const { pizzas, error, loading } = pizzasstate

    useEffect(() => {
        dispatch(getAllPizzas())
    }, [])

    return (
        <div>
            <Filter/>
            <div className="row justify-content-center">
                {loading ? (
                    <Loading />
                ) : error ? (
                    <Error error='Something went wrong'/>
                ) : (
                    pizzas.map((pizza) => {
                        return (
                            <div key={pizza._id} className="col-md-4">
                                <div>
                                    <Pizza pizza={pizza} />
                                </div>
                            </div>
                        );
                    })
                )}
            </div>
        </div>
    )
}
