'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Github, Google } from '@/components/svgs'
import { Loader, Mail } from 'lucide-react'
import { WordRotate } from '@/components/magicui/word-rotate'
import { Button } from '@/components/ui/button'

export default function RegisterPage() {
    const [loading, setLoading] = useState(false)

    // console.log("Hey dev 👋 PM Bob is watching your deadlines!")

    return (
        <main className="w-4/5 mx-auto min-h-[90svh] flex items-center p-4">
            <section className="flex flex-col gap-4 w-full lg:w-1/2 md:w-4/5 mx-auto">
                <div className="head flex flex-col items-center gap-4">
                    <h1 className="text-2xl font-bold">PM Bob</h1>
                    <h3 className="text-sm font-normal">
                        Your project buddy who doesn’t miss deadlines.
                    </h3>
                </div>

                <div className="mt-2 socials flex flex-col gap-2 items-center">
                    <Button className="hover:opacity-80 hover:bg-input w-full cursor-pointer text-[#2C3E50] bg-input">
                        <Google />
                        Sign up with Google
                    </Button>
                    <Button className="hover:opacity-80 hover:bg-input w-full cursor-pointer text-[#2C3E50] bg-input">
                        <Github />
                        Sign up with Github
                    </Button>
                    <Link
                        href="/register/email"
                        className=" w-full text-[#2C3E50] bg-input"
                    >
                        <Button className="hover:opacity-80 cursor-pointer hover:bg-input w-full text-[#2C3E50] bg-input">
                            <Mail />
                            Sign up with Email
                        </Button>
                    </Link>
                </div>
            </section>
        </main>
    )
}
