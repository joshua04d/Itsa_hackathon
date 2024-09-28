"use server"
import { UpdateCurrencySchema } from '@/schema/userSettings';
import { currentUser } from '@clerk/nextjs/server';
import prisma from '@/lib/prisma';
import { redirect } from 'next/navigation';

export async function UpdateUserCurrency(currency:string){
    const parseBody = UpdateCurrencySchema.safeParse({
        currency
    })


    if(!parseBody.success){
        throw parseBody.error
    }

    const user = await currentUser()
    if(!user){
        redirect('/sign-up')
    }

    const userSettings = await prisma.userSettings.update({
        where:{
            userId: user.id,
        },
        data:{
            currency,
        }
    })

    return userSettings;
}