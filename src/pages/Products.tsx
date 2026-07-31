import React from 'react'
import {
  useQuery,
} from '@tanstack/react-query'

export default function Products() {

    const { isPending, error, data} = useQuery({
        queryKey: ['repoData'],
        queryFn: async () => {
            const response = await fetch("https://dummyjson.com/products");
            return await response.json()
        }
    })
    if (isPending) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message
        
    return (
        <>
            <div className="bg-white" key={data.id}>
                <img src={data.thumbnail} alt={data.title} />
                <h2>{data.title} / {data.availabilityStatus}</h2>
                <p>{data.price} $</p>
            </div>
        </>
    );
}