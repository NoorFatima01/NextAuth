import NextAuth from 'next-auth'
import {options} from './options.js'
//NextAuth is a function that returns a request handler i.e. that can handle http requests for authentication

const handler = NextAuth(options)

export {handler as GET, handler as POST}




























