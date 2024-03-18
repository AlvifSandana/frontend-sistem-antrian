import Navbar from "@/components/navbar";
import styles from "@/styles/layout.module.css";

export default function QueueLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Sistem @ Antrian</title>
        <meta name="description" content="Create with ❤️ by @bariskodeid" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={styles.body}>
        <header>
          <Navbar title="Sistem Antrian" />
        </header>
        <main className={styles.main}>
          {children}
        </main>
        {/* <Footer title="Sistem Antrian" /> */}
      </body>
    </html>
  )
}