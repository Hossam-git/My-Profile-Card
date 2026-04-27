import './App.css'
function App() {
  return (
    <main>
      <div className="card">
        {/* اتأكد إن اسم الصورة me.jpeg وموجودة جوه فولدر public */}
        <img src="/hossam.jpeg" alt="Hossam Mohamed" className="avatar" />
        
        <h1>Hossam Mohamed</h1>
        <h2>Athens, Greece</h2>
        <p>Front-end Developer</p>

        <div className="links">
          <button>Github</button>
          <button>LinkedIn</button>
          <button>Facebook</button>
          <button>Instagram</button>
          <button>Phone</button>
        </div>
      </div>
    </main>
  );
}

export default App;