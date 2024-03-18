export default function Queue() {
  return (
    <div className="container">
      <h3></h3>
      <div className="row">
        <div className="col s12 m12 l12">
          <div class="video-container">
            <iframe src="https://www.youtube.com/embed/7sDY4m8KNLc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      </div>
      <div className="row">
        <div class="col s12 m6 l3">
          <div class="card red z-depth-3" style={{ borderRadius: 10 }}>
            <div class="card-content white-text">
              <span class="card-title">LOKET A</span>
              <h3>A001</h3>
            </div>
          </div>
        </div>
        <div class="col s12 m6 l3">
          <div class="card red accent-1" style={{ borderRadius: 10 }}>
            <div class="card-content white-text">
              <span class="card-title">LOKET B</span>
              <h3>B001</h3>
            </div>
          </div>
        </div>
        <div class="col s12 m6 l3">
          <div class="card red accent-1" style={{ borderRadius: 10 }}>
            <div class="card-content white-text">
              <span class="card-title">LOKET C</span>
              <h3>C001</h3>
            </div>
          </div>
        </div>
        <div class="col s12 m6 l3">
          <div class="card red accent-1" style={{ borderRadius: 10 }}>
            <div class="card-content white-text">
              <span class="card-title">LOKET D</span>
              <h3>D001</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}