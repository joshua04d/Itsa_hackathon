import { Currencies } from '@/lib/currencies'
import { z } from 'zod'

export const UpdateCurrencySchema = z.object({
    currency: z.custom(value =>{
        const found = Currencies.some((e)=> e.value ===value) 

        if(!found){
            throw new Error(`Invalid currency: ${value}`)
        }

        return value
    })
})