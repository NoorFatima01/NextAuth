'use client'

import { SessionProvider } from 'next-auth/react'

const AuthProvider = ({ children }) => {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}

// const AuthProvider = ({ children }) => {
//     return(
//         <div>
//             <h1>A provider</h1>
//         </div>
//     )
// }

export default AuthProvider






















