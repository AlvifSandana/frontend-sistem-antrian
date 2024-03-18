export default function Footer({ title }) {
  return (
    <footer className="page-footer" style={{ paddingTop: 0 }}>
      <div className="footer-copyright">
        <div className="container">
          <div className="row" style={{marginBottom: 0}}>
            <div className="col s12 m12 l12" style={{fontSize: 26}}>
              <marquee behavior="scroll" direction="left">© 2024 Baris Kode ID</marquee>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}