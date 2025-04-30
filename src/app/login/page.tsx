'use client';

import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { GoogleLogin, CredentialResponse } from '@react-oauth/google';

export default function LoginPage() {

  const handleLoginSuccess = (credentialResponse: CredentialResponse) => {
    console.log('Google Login Success:', credentialResponse);
    // Here you would typically send the credentialResponse.credential (JWT token)
    // to your backend (e.g., AWS Lambda) for verification and user session creation.
    alert('Login successful! Check console for details. (Placeholder)');
    // Example: await verifyTokenOnBackend(credentialResponse.credential);
    // Redirect user or update UI state upon successful backend verification
  };

  const handleLoginError = () => {
    console.error('Google Login Failed');
    alert('Login failed. Please try again.');
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-var(--header-height,4rem))] p-4 bg-secondary">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Login to Similary</CardTitle>
          <CardDescription>Sign in to save your progress and compete!</CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center">
          <GoogleLogin
            onSuccess={handleLoginSuccess}
            onError={handleLoginError}
            useOneTap // Optional: Enables One Tap sign-in experience
            shape="pill" // Makes the button pill-shaped
            theme="filled_blue" // Uses a blue theme consistent with the app
            size="large" // Makes the button larger
          />
        </CardContent>
         <CardFooter className="text-center text-xs text-muted-foreground">
            By signing in, you agree to our Terms of Service.
         </CardFooter>
      </Card>
    </div>
  );
}
