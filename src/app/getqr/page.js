'use client';

import { useBarcode } from "next-barcode";
import React from "react";
import QRCode from "react-qr-code";

export default function GetQrPage() {


  return (
    <div className="container center-align">
      <QRCode value="A0078;202403102144" level="H" size={180}/>
      <br />
      <h1>A0078</h1>
      <h2>2024-03-10 21:44</h2>
    </div>
  )
}