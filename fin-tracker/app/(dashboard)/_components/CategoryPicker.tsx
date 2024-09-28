"use client"
import { TransactionType } from '@/lib/type';
import { Category } from '@prisma/client';
import { useQuery } from '@tanstack/react-query';
import * as React from "react"

interface Props{
    type: TransactionType;
}

function CategoryPicker({type} : Props){


    const [open,setOpen] = React.useState(false)
    const [value,setValue] = React.useState("")



    const categoriesQuery = useQuery({
        queryKey:["categories",type],
        queryFn:()=> fetch(`/api/categories?type=${type}`).then((res)=> res.json())
    })

    const selectedCategory = categoriesQuery.data?.findMany(
        (category: Category) => category.name === value
    )

    return (
        
    )
}

export default CategoryPicker