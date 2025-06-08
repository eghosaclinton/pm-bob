import { z } from 'zod'

export const RegisterSchema = z.object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(1, 'Password is required'),
    userName: z.string().min(3, 'userName has to be more than 3 chars mate'),
    imageUrl: z.string(),
})

export type RegisterFormData = z.infer<typeof RegisterSchema>
