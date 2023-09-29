"use client"

import { signIn, signOut, useSession } from 'next-auth/react';

function MyApp() {
  const { data: session } = useSession();

  return (
    <div>
     
      {!session ? (
        <div className="div">
<button className='button' onClick={() => signIn('github')}>Sign in with GitHub</button>
        </div>
        
      ) : (
        <>

        <div className="div">
        <p>Welcome, {session.user.name}!</p>
          <button className='button' onClick={() => signOut()}>Sign out</button>
        </div>
          
        </>
      )}
     
    </div>
  );
}

export default MyApp;



















