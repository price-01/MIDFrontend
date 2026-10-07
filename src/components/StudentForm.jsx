import { useEffect, useState } from 'react'

const emptyForm = { nama: '', nim: '', jurusan: '', semester: '', status: 'Aktif' }

function StudentForm({ editingStudent, onSave, onCancelEdit }) {
  const [form, setForm] = useState(emptyForm)

  // Saat mode edit diaktifkan (editingStudent berubah), isi form dengan data yang dipilih.
  useEffect(() => {
    if (editingStudent) {
      setForm(editingStudent)
    } else {
      setForm(emptyForm)
    }
  }, [editingStudent])

  function handleChange(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!form.nama.trim() || !form.nim.trim()) return

    onSave({ ...form, semester: Number(form.semester) || 1 })
    setForm(emptyForm)
  }

  return (
    <form className="index-card" onSubmit={handleSubmit}>
      <p className="index-card__tag">{editingStudent ? 'Ubah data mahasiswa' : 'Tambah mahasiswa baru'}</p>

      <div className="index-card__grid">
        <label className="index-card__field">
          Nama
          <input
            type="text"
            value={form.nama}
            onChange={(e) => handleChange('nama', e.target.value)}
            placeholder="Nama lengkap"
            required
          />
        </label>

        <label className="index-card__field">
          NIM
          <input
            type="text"
            value={form.nim}
            onChange={(e) => handleChange('nim', e.target.value)}
            placeholder="Nomor induk"
            required
          />
        </label>

        <label className="index-card__field">
          Jurusan
          <input
            type="text"
            value={form.jurusan}
            onChange={(e) => handleChange('jurusan', e.target.value)}
            placeholder="Program studi"
          />
        </label>

        <label className="index-card__field">
          Semester
          <input
            type="number"
            min="1"
            max="14"
            value={form.semester}
            onChange={(e) => handleChange('semester', e.target.value)}
          />
        </label>

        <label className="index-card__field">
          Status
          <select value={form.status} onChange={(e) => handleChange('status', e.target.value)}>
            <option value="Aktif">Aktif</option>
            <option value="Cuti">Cuti</option>
            <option value="Non-Aktif">Non-Aktif</option>
          </select>
        </label>
      </div>

      <div className="index-card__actions">
        <button type="submit" className="btn btn--yellow">
          {editingStudent ? 'Simpan Perubahan' : 'Tambahkan Data'}
        </button>
        {editingStudent && (
          <button type="button" className="btn btn--ghost" onClick={onCancelEdit}>
            Batal
          </button>
        )}
      </div>
    </form>
  )
}

export default StudentForm
