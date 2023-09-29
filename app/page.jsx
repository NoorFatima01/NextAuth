"use client"

import { signIn, signOut, useSession } from 'next-auth/react';

function MyApp() {
  const { data: session } = useSession();

  return (
    <div>
     
      {!session ? (
        <button onClick={() => signIn('github')}>Sign in with GitHub</button>
      ) : (
        <>
          <p>Welcome, {session.user.name}!</p>
          <button onClick={() => signOut()}>Sign out</button>
        </>
      )}
     
    </div>
  );
}

export default MyApp;




// useSession() hook is used to access session data on the client side, 
// and getServerSession() is used to access session data on the server side.
// when the session changes, the useSession() hook will automatically update the session data.
// The useSession() hook will return a session object that contains the user object and other information.
// The session object will be null if the user is not authenticated.  

// The session object contains the following properties:
// user: The user object returned by the authentication provider.
// expires: The timestamp in milliseconds when the session expires.
// accessToken: The access token for the authentication provider.
// refreshToken: The refresh token for the authentication provider.
// idToken: The ID token for the authentication provider.
// jwt: The JSON Web Token (JWT) for the session.
// jwtPayload: The decoded JWT payload for the session.
// error: An error object if there was an error.
// loading: A boolean value that is true if the session is being fetched.
// data: The session object returned by the server.
// status: The HTTP status code of the response.
// headers: The HTTP headers of the response.
// redirect: A function that redirects to a new page.
// error: A function that throws an error.
// onUnauthenticated: A function that is called if the user is not authenticated.
// onSessionExpired: A function that is called if the session has expired.
// onAccessTokenExpired: A function that is called if the access token has expired.
// onAccessTokenError: A function that is called if there was an error getting the access token.
// onIdTokenExpired: A function that is called if the ID token has expired.
// onIdTokenError: A function that is called if there was an error getting the ID token.
// onJwtExpired: A function that is called if the JWT has expired.
// onJwtError: A function that is called if there was an error getting the JWT.
// onSignOut: A function that is called if the user signs out.
// onSignIn: A function that is called if the user signs in.
// onSessionUpdate: A function that is called if the session is updated.


//getSession (or getServerSession) is used to get the session data at the time the server is processing a request. It will return the session data as it exists at that moment, but it will not continue to monitor the session for changes.

//useSession, on the other hand, is a React hook used on the client-side that will cause the component to re-render whenever the session data changes. It maintains a subscription to the session data and updates the component in real-time whenever the session changes.


//Access Toke:An access token is a credential that can be used by an application to access an API. 
//Purpose: Its purpose is to inform the API that the bearer of this token has been authorized to access the API and perform specific actions.

// Refresh Token: A refresh token is a special kind of token that can be used to obtain a renewed access token.
// Purpose:
// Used to obtain a new access token without requiring the user to re-authenticate. This is useful for extending sessions.
// When is it used?
// Used when the access token has expired and the application needs a new one.

// idToken: An ID token is a JWT that contains claims about the identity of the authenticated user.
// Purpose:
// Provides information about the user, such as username, email, and other profile information.


















