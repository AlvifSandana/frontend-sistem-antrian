'use client';

import moment from "moment";
import { useEffect, useState } from "react";

export default function Navbar({ title}) {
  const [time, setTime] = useState(new moment().locale('id').format('LTS'))
  const [displayDate, setDisplayDate] = useState(new moment().locale('id').format('dddd, DD MMMM YYYY'))

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new moment().locale('id').format('LTS'))
      setDisplayDate(new moment().locale('id').format('dddd, DD MMMM YYYY'))
    }, 1000)
  }, [])


  return (
    <nav>
      <div className="nav-wrapper container">
        <a href="#" className="brand-logo">{title}</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="#">{displayDate}</a></li>
          <li><a href="#">{time}</a></li>
        </ul>
      </div>
    </nav>
  )
}