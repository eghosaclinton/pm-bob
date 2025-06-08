'use client'
import { cn } from '@/lib/utils'
import { FormEvent, useState } from 'react'
import { signIn } from '@/lib/auth-client'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function MagicLinkPage() {
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)
    async function handleSubmit(event: FormEvent) {
        event.preventDefault()
        event.stopPropagation()

        const { data, error } = await signIn.magicLink({
            email,
            callbackURL: 'http://localhost:3000/dashboard',
        })

        console.log(data)
    }
    return (
        <main className="w-4/5 mx-auto min-h-[90svh] flex items-center p-4">
            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 w-full lg:w-1/2 md:w-4/5 mx-auto"
            >
                <div className="head flex flex-col items-center gap-4">
                    <h1 className="text-2xl font-bold">PM Bob</h1>
                    <h3 className="text-sm font-normal">
                        Your project buddy who doesn’t miss deadlines.
                    </h3>
                </div>
                <Input
                    value={email}
                    name="email"
                    onChange={({ currentTarget: { value } }) => setEmail(value)}
                    placeholder="Enter Email"
                    type="email"
                />
                <Button className="cursor-pointer">Sign Up</Button>
            </form>
        </main>
    )
}
