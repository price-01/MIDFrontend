function StudentRow({ student, onEdit, onDelete, onToggleStatus }) {
  return (
    <div className="ledger-row">
      <div className="ledger-row__main">
        <span className="ledger-row__name">{student.nama}</span>
        <span className="ledger-row__nim">{student.nim}</span>
      </div>

      <span className="ledger-row__jurusan">{student.jurusan || '—'}</span>
      <span className="ledger-row__semester">Smt {student.semester}</span>

      <button
        type="button"
        className={`status-pill status-pill--${student.status.toLowerCase().replace('-', '')}`}
        onClick={() => onToggleStatus(student.id)}
        title="Klik untuk ubah status"
      >
        {student.status}
      </button>

      <div className="ledger-row__actions">
        <button type="button" className="btn btn--small" onClick={() => onEdit(student)}>
          Ubah
        </button>
        <button type="button" className="btn btn--small btn--danger" onClick={() => onDelete(student.id)}>
          Hapus
        </button>
      </div>
    </div>
  )
}

export default StudentRow
