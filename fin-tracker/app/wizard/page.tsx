import { Card, CardDescription,CardHeader,CardTitle,CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { currentUser } from '@clerk/nextjs/server'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import React from 'react'
import Logo from '../components/Logo'
import { CurrencyComboBox } from './../../components/CurrencyComboBox';

async function page() {

    const user = await currentUser()

    if(!user){
        redirect("/sign-in")
    }

    return (
    <div className="container flex max-w-2xl flex-col items-center justify-between gap-4" >
      <div className="">
        <h1 className='text-center text-3xl'>
          Welcome, <span className='ml-2 font-bold'>{user.firstName} 👋 </span>
        </h1>
        <h2 className='mt-4 text-center text-base text-muted-foreground' >
          Lets &apos;s get started by setting up your currency
        </h2>
      </div>
      <Separator />
      <Card className='w-full'>
        <CardHeader>
          <CardTitle>Currency</CardTitle>
          <CardDescription>
            Set your default currency for transactions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CurrencyComboBox />
        </CardContent>
      </Card>
      <Separator />
      <Button className="w-full" asChild>
        <Link href={"/"}>I&apos;m done! Take me to the dashboard</Link>
      </Button>
      <div className='mt-8'>
        <Logo />
      </div>
    </div>
  )
}

export default page
