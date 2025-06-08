'use client'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import { Github, Google } from '@/components/svgs'
import { Loader } from 'lucide-react'
import { WordRotate } from '@/components/magicui/word-rotate'
import { createFormHook, createFormHookContexts } from '@tanstack/react-form'
import { signIn } from '@/lib/auth-client'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { LoginSchema } from '@/lib/schema/Login'

const { fieldContext, formContext } = createFormHookContexts()

const { useAppForm } = createFormHook({
    fieldComponents: {
        Input,
    },
    formComponents: {
        Button,
    },
    fieldContext,
    formContext,
})

export default function LoginPage() {
    const [loading, setLoading] = useState(false)
    const form = useAppForm({
        defaultValues: {
            email: '',
            password: '',
        },
        validators: {
            onSubmit: async ({ value: { email, password } }) => {
                setLoading(true)
                const { data, error } = await signIn.email({
                    email,
                    password,
                    callbackURL: '/dashboard',
                    /**
                     * remember the user session after the browser is closed.
                     * @default true
                     */
                    rememberMe: false,
                })
                console.log(error)
                setLoading(false)
            },
            onChange: LoginSchema,
        },
    })

    console.log('Hey dev 👋 PM Bob is watching your deadlines!')

    return (
        <main className="w-4/5 mx-auto min-h-[90svh] flex items-center">
            <form
                className="flex flex-col gap-4 w-full lg:w-3/5 mx-auto"
                onSubmit={(e) => {
                    e.preventDefault()
                    form.handleSubmit()
                }}
            >
                <div className="head flex flex-col items-center gap-4">
                    <h1 className="text-2xl font-bold">PM Bob</h1>
                    <h3 className="text-sm font-normal">
                        Your project buddy who doesn’t miss deadlines.
                    </h3>
                </div>

                <form.AppField
                    name="email"
                    children={(field) => (
                        <field.Input
                            className="bg-input"
                            type="email"
                            placeholder="dev@example.dev"
                        />
                    )}
                />

                <form.AppField
                    name="password"
                    children={(field) => (
                        <field.Input
                            className="bg-input"
                            type="password"
                            placeholder="password (or use ssh keys..jk)"
                        />
                    )}
                />

                <form.AppForm>
                    {loading && (
                        <div className="text-sm flex justify-center gap-2 items-center">
                            <Loader className="loader size-4" />
                            <WordRotate
                                words={[
                                    'Matching you with your commit history...',
                                    'Asking PM Bob if he knows you...',
                                    "Verifying if you're not a bot... or Bob.",
                                ]}
                            />
                        </div>
                    )}
                    <form.Button
                        className={cn(
                            'cursor-pointer bg-[#2C3E50] text-[#F8F9FA]',
                            loading && 'pointer-events-none opacity-40'
                        )}
                    >
                        Sign In
                    </form.Button>
                    <p className="text-center text-[12px] font-light">
                        Bugs fixed. Deadlines kept. Just lock in bruh.
                    </p>
                </form.AppForm>

                <div className="mt-4 socials flex flex-col gap-2 items-center">
                    <div className="flex">
                        <hr className="border-4 h-4" />
                        <h4 className="text-sm">Or continue with </h4>
                        <hr />
                    </div>
                    <Button className="hover:opacity-80 hover:bg-input w-full cursor-pointer text-[#2C3E50] bg-input">
                        <Google />
                        Sign in with Google
                    </Button>
                    <Button className="hover:opacity-80 hover:bg-input w-full cursor-pointer text-[#2C3E50] bg-input">
                        <Github />
                        Sign in with Github
                    </Button>
                </div>
            </form>
        </main>
    )
}
