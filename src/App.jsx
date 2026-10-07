import { useState } from 'react'
import Header from './components/Header.jsx'
import SummaryStats from './components/SummaryStats.jsx'
import FilterBar from './components/FilterBar.jsx'
import StudentForm from './components/StudentForm.jsx'
import StudentList from './components/StudentList.jsx'
import initialStudents from './data/students.js'

const statusCycle = ['Aktif', 'Cuti', 'Non-Aktif']

function App() {
  const [students, setStudents] = useState(initialStudents)
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('Semua')
  const [editingStudent, setEditingStudent] = useState(null)

  function handleSave(formData) {
    if (editingStudent) {
      // Mode ubah: timpa data lama berdasarkan id
      setStudents((prev) =>
        prev.map((s) => (s.id === editingStudent.id ? { ...formData, id: editingStudent.id } : s)),
      )
      setEditingStudent(null)
    } else {
      // Mode tambah: buat id baru
      const newStudent = { ...formData, id: Date.now() }
      setStudents((prev) => [...prev, newStudent])
    }
  }

  function handleDelete(id) {
    setStudents((prev) => prev.filter((s) => s.id !== id))
  }

  function handleToggleStatus(id) {
    setStudents((prev) =>
      prev.map((s) => {
        if (s.id !== id) return s
        const nextIndex = (statusCycle.indexOf(s.status) + 1) % statusCycle.length
        return { ...s, status: statusCycle[nextIndex] }
      }),
    )
  }

  function handleEdit(student) {
    setEditingStudent(student)
  }

  function handleCancelEdit() {
    setEditingStudent(null)
  }

  // Filtering: gabungan searching (nama/NIM) dan filter status
  const filteredStudents = students.filter((s) => {
    const matchesSearch =
      s.nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.nim.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === 'Semua' || s.status === statusFilter
    return matchesSearch && matchesStatus
  })

  return (
    <div className="page">
      <Header totalStudents={students.length} />

      <main className="page__content">
        <SummaryStats students={students} />

        <StudentForm editingStudent={editingStudent} onSave={handleSave} onCancelEdit={handleCancelEdit} />

        <FilterBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          statusFilter={statusFilter}
          onStatusFilterChange={setStatusFilter}
        />

        <StudentList
          students={filteredStudents}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onToggleStatus={handleToggleStatus}
        />
      </main>
    </div>
  )
}

export default App
