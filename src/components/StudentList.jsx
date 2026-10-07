import StudentRow from './StudentRow.jsx'

function StudentList({ students, onEdit, onDelete, onToggleStatus }) {
  if (students.length === 0) {
    return (
      <div className="ledger-empty">
        Belum ada data yang cocok. Coba ubah kata kunci pencarian atau filter status.
      </div>
    )
  }

  return (
    <div className="ledger">
      <div className="ledger-row ledger-row--head">
        <span>Nama &amp; NIM</span>
        <span>Jurusan</span>
        <span>Semester</span>
        <span>Status</span>
        <span>Aksi</span>
      </div>

      {students.map((student) => (
        <StudentRow
          key={student.id}
          student={student}
          onEdit={onEdit}
          onDelete={onDelete}
          onToggleStatus={onToggleStatus}
        />
      ))}
    </div>
  )
}

export default StudentList
