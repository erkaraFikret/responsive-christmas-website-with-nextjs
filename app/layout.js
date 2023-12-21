import './globals.css'
import { ThemeProvider } from './components/theme-provider'


export const metadata = {
  title: 'Christmas',
  description: 'Responsive website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
