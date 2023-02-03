import axios from 'axios'
import { METHODS } from 'http'
import React, { useState } from "react"
import { IProduct } from "../models"
import { ErrorMess } from './Error'

const productData: IProduct = {
    title: 'test product',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic',
    rating: {
        rate: 10,
        count: 19
    }
}

interface CreateProductProps {
    onCreate: (product:IProduct) => void
}

export function CreateProduct({ onCreate }: CreateProductProps) {
    const [value, setValue] = useState('')
    const [error, setError] = useState('')

    const sumbitHandler = async (event: React.FormEvent) => {
        event.preventDefault()
        setError('')

        if (value.trim().length === 0) {
            setError('please enter valid title')
            return
        }

        productData.title = value

        const response = await axios.post<IProduct>('http://fakestoreapi.com/products', productData)
        
        onCreate(response.data)
    }

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    return (
        <form onSubmit={sumbitHandler}>
            <input
                type="text"
                className="w-full outline-0 border py-2 px-4 mb-2"
                placeholder="Enter product title"
                value={value}
                onChange={changeHandler}
            />

            {error && <ErrorMess error={error} />}

            <button type="submit" className="hover:text-white py-2 px-4 border bg-yellow-400">Create</button>
        </form>
    )
}