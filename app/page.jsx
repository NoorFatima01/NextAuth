"use client"

import { signIn, signOut, useSession, getProviders } from 'next-auth/react';
import { use, useEffect,useState } from 'react';
function MyApp() {
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();
      setProviders(response);
      console.log(response);
  }
  setUpProviders();

},[]);

  return (
    <div>
     
      {!session ? (
        <>
        <div className="signinButtons">
        {providers && Object.values(providers).map((provider) => (
  <button className="button" key={provider.name} onClick={() => signIn(provider.id)}
  >Sign In with {provider.id}</button>
))}
        </div>
        </>
     
      ) : (
        <>
        <p>Welcome, {session.user.name}!</p>
          <button className='button' onClick={() => signOut()}>Sign out</button>
        </>
      )}
     
    </div>
  );
}

export default MyApp;



















