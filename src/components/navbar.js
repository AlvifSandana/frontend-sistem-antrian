'use client';

import moment from "moment";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [time, setTime] = useState(new moment().locale('id').format('LTS'))
  const [displayDate, setDisplayDate] = useState(new moment().locale('id').format('LLLL'))

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new moment().locale('id').format('LTS'))
      setDisplayDate(new moment().locale('id').format('LLLL'))
    }, 1000)
  }, [])

  return (
    <nav>
      <div className="nav-wrapper" style={{marginLeft: 12}}>
        {/* <a href="#" className="brand-logo">{displayDate} | {time}</a> */}
        <marquee behavior="scroll" direction="left" style={{fontSize: 24}}>© 2024 Baris Kode ID</marquee>
        {/* <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="#">{displayDate}</a></li>
          <li><a href="#">{time}</a></li>
        </ul> */}
      </div>
    </nav>
  )
}