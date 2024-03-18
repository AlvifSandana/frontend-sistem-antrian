export default function LoketLayout({ children }) {
  return (
    <html lang="en">
    <head>
      <title>Sistem @ Antrian</title>
      <meta name="description" content="Create with ❤️ by @bariskodeid" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </head>
    <body>
      <main>
        {children}
      </main>
    </body>
  </html>
  )
}