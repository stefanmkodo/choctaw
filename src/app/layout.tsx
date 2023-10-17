import './globals.css'
import type {Metadata} from 'next'
import {Lato} from 'next/font/google'

const lato = Lato({weight: "400", subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Choctaw iBeacon',
    description: 'Choctaw iBeacon Demo',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={`${lato.className} bg-mkodo-dark`}>{children}</body>
        </html>
    )
}
