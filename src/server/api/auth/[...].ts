// @ts-ignore
import {NuxtAuthHandler} from "#auth";
import {randomBytes, randomUUID} from "crypto";
import {MongoDBAdapter} from "@next-auth/mongodb-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import clientPromise from "~/server/lib/mongodb";
import mongoose from "mongoose";

export default NuxtAuthHandler({
    // @ts-ignore
    adapter: MongoDBAdapter(clientPromise),
    secret: "X=Y%f7Qt+mvVX+M2",
    // pages: {
    //     signIn: "/login",
    // },
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60, // 30 days
        updateAge: 24 * 60 * 60, // 24 hours
        generateSessionToken: () => {
            return randomUUID?.() ?? randomBytes(32).toString("hex");
        }
    },
    providers: [
        // @ts-ignore
        CredentialsProvider.default({
            type: "credentials",
            name: "Credentials",
            credentials: {
                email: {label: "E-Mail", type: "email"},
                password: {label: "Password", type: "password"}
            },
            // @ts-ignore
            authorize: async (credentials): Promise<any> => {
                if (credentials === undefined) {
                    return Promise.resolve(null);
                }
                let user = await mongoose.model("User").findOne({username: credentials.username}).exec();
                if (user === null) {
                    return null;
                }
                if (user?.password === credentials?.password) {
                    return user;
                } else {
                    console.error('Warning: Malicious login attempt registered, bad credentials provided');
                    return null;
                }
            }
        })
    ]
});
