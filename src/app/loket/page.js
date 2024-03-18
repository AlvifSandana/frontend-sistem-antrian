"use client";

import { motion } from "framer-motion";

export default function LoketPage() {
  return (
    <div className="container center-align">
      <div class="row" style={{marginTop: 24}}>
        <div class="col s12 m8 offset-m2">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <div class="card-panel deep-purple darken-1" style={{ borderRadius: 10 }}>
                <h2 className="white-text">Loket 1</h2>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <div class="row">
        <div class="col s12 m8 offset-m2">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <div class="card-panel red darken-1" style={{ borderRadius: 10 }}>
                <h2 className="white-text">Loket 2</h2>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <div class="row">
        <div class="col s12 m8 offset-m2">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <div class="card-panel blue darken-1" style={{ borderRadius: 10 }}>
                <h2 className="white-text">Loket 3</h2>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}