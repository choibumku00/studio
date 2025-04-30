'use client';

import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Chrome } from 'lucide-react'; // Using Chrome icon as a stand-in for Google icon

export default function LoginPage() {
  const handleGoogleSignIn = () => {
    // In a real application, this would trigger the Firebase Google Auth flow
    console.log('Attempting Google Sign-In...');
    // Replace with actual redirect or popup logic
    alert('Redirecting to Google Sign-In (Placeholder)');
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-var(--header-height,4rem))] p-4 bg-secondary">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Login to Similary</CardTitle>
          <CardDescription>Sign in to save your progress and compete!</CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center">
          <Button onClick={handleGoogleSignIn} className="w-full max-w-xs bg-primary text-primary-foreground hover:bg-primary/90">
            <Chrome className="mr-2 h-4 w-4" /> {/* Using Chrome icon */}
            Sign in with Google
          </Button>
        </CardContent>
         <CardFooter className="text-center text-xs text-muted-foreground">
            By signing in, you agree to our Terms of Service.
         </CardFooter>
      </Card>
    </div>
  );
}
