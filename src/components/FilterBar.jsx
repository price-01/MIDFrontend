function FilterBar({ searchTerm, onSearchChange, statusFilter, onStatusFilterChange }) {
  return (
    <section className="filter-bar">
      <input
        type="text"
        className="filter-bar__search"
        placeholder="Cari nama atau NIM..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <select
        className="filter-bar__select"
        value={statusFilter}
        onChange={(e) => onStatusFilterChange(e.target.value)}
      >
        <option value="Semua">Semua status</option>
        <option value="Aktif">Aktif</option>
        <option value="Cuti">Cuti</option>
        <option value="Non-Aktif">Non-Aktif</option>
      </select>
    </section>
  )
}

export default FilterBar
