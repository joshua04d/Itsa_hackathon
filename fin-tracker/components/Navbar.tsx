"use client"
import Logo from '@/app/components/Logo'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { buttonVariants } from './ui/button'
import { UserButton } from '@clerk/nextjs'
import { ThemeSwitcherBtn } from './ThemeSwitcherBtn';
import Sheet from '@/components/ui/sheet'

const Navbar = () => {
  return (
    <>
        <DesktopNavbar />
        <MobileNavbar />
    </>
  )
}

const item = [
    {
        label:"Dashboard",
        link: '/'
    },
    {
        label:"Transactions",
        link: '/transactions'
    },
    {
        label:"Manage",
        link: '/manage'
    },
]


function MobileNavbar(){
    const [isOpen, setIsOpen ]= useState(false)

    return(
        <div className='block border-separate bg-background md:hidden'>
            <nav className='container flex items-center justify-between px-8' >
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    
                </Sheet>
            </nav>
        </div>
    )
}



function DesktopNavbar(){
    return(
        <div className="hidden border-separate border-b bg-background md:block">
            <nav className='container flex items-center justify-between py-8'>
                <div className="flex h-[80px] min-h-[60px]  items-center gap-x-4">
                    <Logo />
                    <div className="flex h-full">
                        {item.map(item => (
                            <NavbarItem
                            key={item.label}
                            link={item.link}
                            label={item.label}
                            />
                            
                        ))}
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <ThemeSwitcherBtn />
                    <UserButton afterSignOutUrl='/sign-in' />
                </div>
            </nav>
        </div>
    )
}

function NavbarItem ({link, label}:{
    link:string;
    label:string
}){
    const pathname = usePathname();
    const isActive = pathname === link
    return(
        <div className="relative flex items-center">
            <Link href={link} className={cn(
                buttonVariants({
                    variant: 'ghost'
                }),
                "w-full justify-start text-lg text-muted-foreground hover:text-foreground",
                isActive && "text-foreground"
            )}> 
            {label} 
            </Link>
            {
                isActive && (
                    <div className='absolute -bottom-[2px] left-1/2 hidden h-[2px] w-[80px] -translate-x-1/2 rounded-xl bg-foreground md:block'></div>
                )
            }
        </div>
    )
}


export default Navbar