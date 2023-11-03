import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import FacebookProvider from "next-auth/providers/facebook";
import CredentialsProvider from "next-auth/providers/credentials"

import ConnectDB from '@/config/db'
import bcrypt from 'bcryptjs'
import regModel from "@/models/Register";

ConnectDB();
const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {},

            async authorize(credentials, req) {
                const { email, password } = credentials;

                try {
                    const user = await regModel.findOne({ email });
                    const passwordMatch = await bcrypt.compare(password, user.password);

                    if (!user || !passwordMatch) {
                        return null;
                    }
                    return user;                   
                } catch (error) {
                    console.error("Error", error);
                    return null;
                }
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET
        })
    ],
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/"
    }
})
export { handler as GET, handler as POST }