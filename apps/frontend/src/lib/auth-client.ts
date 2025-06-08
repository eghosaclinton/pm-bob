import { createAuthClient } from 'better-auth/react'
import { magicLinkClient } from 'better-auth/client/plugins'

export const { signIn, signOut, signUp, useSession } = createAuthClient({
    baseURL:
        process.env.NODE_ENV === 'production'
            ? process.env.BACKEND_URL
            : 'http://localhost:3005',
    plugins: [magicLinkClient()],
})
