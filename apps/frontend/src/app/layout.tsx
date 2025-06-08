import type { Metadata } from 'next'
import { Poppins, Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const poppins = Poppins({ weight: '400', subsets: ['latin'] })

const inter = Inter({
    variable: '--font-inter',
    subsets: ['latin'],
})

const jetbrains = JetBrains_Mono({
    variable: '--font-jetbrains',
})

export const metadata: Metadata = {
    title: 'Pm Bob',
    description: 'Your project buddy who doesn’t miss deadlines.',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body
                className={`${poppins.className} ${inter.variable} ${jetbrains.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    )
}
