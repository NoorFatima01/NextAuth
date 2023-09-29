import { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

export const  options = {
providers:[
GitHubProvider({
clientId: process.env.GITHUB_ID,
clientSecret: process.env.GITHUB_SECRET

}),

//This is uses hard coded user for now.
//Otherwise, you can use a database to store user credentials
//and then use the database to authenticate users

CredentialsProvider({
    name: 'Credentials',
    credentials:{
        username: {label: "Username:", type: "text", placeholder: "your username"},
        password: {label: "Password:", type: "password", placeholder: "your password"}
    }, 
    async authorize(credentials){
        const user = {id: "1", name: "admin", password:"admin"}
        if(credentials?.username === user.name && credentials?.password === user.password){
            return user;
        }else {return null}
        
    }
},

)

],

}

export default options;