import type { Metadata } from "next"
import '@/styles/index.sass';
import Header from './components/common/header/header'
import Footer from './components/common/footer/footer'

export const metadata: Metadata = {
  title: 'Pack startup Into the Brand',
  description: 'We build the bridge of visual communication that connects you to your target audience - Logo, Web design, Style Guide, Color palette, Pitch Deck, Business card',
  icons: {
    icon: [
      '/favicon.ico',
    ],
    apple: [
      '/apple-touch-icon.png',
    ],
    shortcut: [
      '/apple-touch-icon.png',
    ]
  },
}

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body id="first-screen">
        <Header/>
        <div className="page">
          {children}
        </div>
        <Footer/>
      </body>
    </html>
  );
}
