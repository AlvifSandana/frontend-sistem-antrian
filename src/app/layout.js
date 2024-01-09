import 'materialize-css/dist/css/materialize.min.css'

export const metadata = {
  title: 'Sistem Antrian',
  description: 'Create with ❤️ by @bariskodeid',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
