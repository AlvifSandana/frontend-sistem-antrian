'use client';

import { motion } from 'framer-motion';
import Link from 'next/link'

export default function Home() {
  return (
    <main className="container">
      <div class="row" style={{ marginTop: 24 }}>
        <div class="col s12 m6 l6">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
              <Link href="/queue">
                <div class="card-panel orange darken-1" style={{ borderRadius: 10 }}>
                  <h2 className="white-text center-align">Antrian</h2>
                </div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
        <div class="col s12 m6 l6">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
              <Link href="/loket">
                <div class="card-panel deep-purple darken-1" style={{ borderRadius: 10 }}>
                  <h2 className="white-text center-align">Loket</h2>
                </div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
