// app/layout.tsx
 
import { AuthProvider } from '@/contexts/AuthContext';
import '@/styles/globals.css'; 

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>My App</title>
      </head>
      <body className=' bg-cyan-900 '>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
