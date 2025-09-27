import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";

declare module 'next-auth' {
    interface Session {
        user: {
            id: string;
            name?: string | null;
            email?: string | null;
            image?: string | null;
        };
    }
    interface User {
        id: string;
        name?: string | null;
        email?: string | null;
        image?: string | null;
    }
}

export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        }),
        CredentialsProvider({
            name: "Credentials",

            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" }
            },

            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    console.log('Email or password must be given!');
                    return null;
                };

                try {
                    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/login`, {
                        method: "POST",
                        headers: {
                            'Content-type': 'application/json',
                        },
                        body: JSON.stringify({
                            email: credentials.email,
                            password: credentials.password
                        })
                    });

                    if (!res?.ok) {
                        console.error('User login failed!', await res.text());
                        return null;
                    };

                    const user = await res.json();

                    if (user?.id) { // for token/creating token
                        return {
                            id: user?.id,
                            name: user?.name,
                            email: user?.email,
                            image: user?.picturer
                        }
                    } else {
                        return null;
                    }

                } catch (error) {
                    console.log(error);
                    return null;
                }
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }) { // token hocce,jeta sign in er por cookies a set hocce, r user hocce je user sign in koreche
            if (user) {
                token.id = user?.id
            };
            return token;
        },
        async session({ session, token }) {
            if (session?.user) {
                session.user.id = token?.id as string
            };
            return session;
        }
    },
    secret: process.env.AUTH_SECRET,
    pages: {
        signIn: '/login'
    }
}
