import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function QueueLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Sistem @ Antrian</title>
        <meta name="description" content="Create with ❤️ by @bariskodeid" />
      </head>
      <body>
        <header>
          <Navbar title="Sistem Antrian" />
        </header>
        <main>
          {children}
        </main>
        <Footer title="Sistem Antrian" />
      </body>
    </html>
  )
}