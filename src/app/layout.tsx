import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'eMP v2.0 - Industrial Court of Malaysia',
  description: 'Industrial Court of Malaysia - Modern Case Management System',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
