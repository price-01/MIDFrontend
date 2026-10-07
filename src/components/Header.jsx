function Header({ totalStudents }) {
  return (
    <header className="board-header">
      <div>
        <h1>Student Management FILKOM</h1>
        <p className="board-header__subtitle">Semester Ganjil 2026/2027</p>
      </div>
      <div className="board-header__count">
        <span className="board-header__count-number">{totalStudents}</span>
        <span className="board-header__count-label">mahasiswa terdaftar</span>
      </div>
    </header>
  )
}

export default Header
