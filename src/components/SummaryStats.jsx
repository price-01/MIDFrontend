function SummaryStats({ students }) {
  const total = students.length
  const aktif = students.filter((s) => s.status === 'Aktif').length
  const cuti = students.filter((s) => s.status === 'Cuti').length
  const nonAktif = students.filter((s) => s.status === 'Non-Aktif').length

  const tallies = [
    { label: 'Total', value: total, tone: 'chalk' },
    { label: 'Aktif', value: aktif, tone: 'yellow' },
    { label: 'Cuti', value: cuti, tone: 'dim' },
    { label: 'Non-Aktif', value: nonAktif, tone: 'red' },
  ]

  return (
    <section className="tally-row">
      {tallies.map((t) => (
        <div className={`tally-card tally-card--${t.tone}`} key={t.label}>
          <span className="tally-card__value">{t.value}</span>
          <span className="tally-card__label">{t.label}</span>
        </div>
      ))}
    </section>
  )
}

export default SummaryStats
