// Elementos del DOM
const form = document.getElementById('filterForm');
const modal = document.getElementById('reportModal');
const closeModalBtn = document.getElementById('closeModal');
const reportData = document.getElementById('reportData');
const downloadBtn = document.getElementById('downloadBtn');

// Simulación de datos históricos
const mockRecords = [
    { student: 'Ana Martínez', id: 'EST-001', date: '2025-04-15', course: '101' },
    { student: 'Carlos López', id: 'EST-002', date: '2025-04-15', course: '101' },
    { student: 'María Gómez', id: 'EST-003', date: '2025-04-16', course: '102' },
    // ... más registros
];

// Función para generar tabla HTML
function buildTable(records) {
    if (!records.length) return '<p>No se encontraron registros.</p>';
    let html = '<table><thead><tr><th>Estudiante</th><th>ID</th><th>Fecha</th><th>Curso</th></tr></thead><tbody>';
    records.forEach(r => {
        html += `<tr><td>${r.student}</td><td>${r.id}</td><td>${r.date}</td><td>${r.course}</td></tr>`;
    });
    html += '</tbody></table>';
    return html;
}

// Manejo del envío de formulario
form.addEventListener('submit', e => {
    e.preventDefault();
    const course = document.getElementById('courseNumber').value;
    const date = document.getElementById('reportDate').value;

    // Filtrar datos simulados
    const results = mockRecords.filter(r => r.course === course && r.date === date);

    // Mostrar en modal
    reportData.innerHTML = buildTable(results);
    modal.style.display = 'flex';
});

// Cerrar modal
closeModalBtn.addEventListener('click', () => modal.style.display = 'none');
window.addEventListener('click', e => {
    if (e.target === modal) modal.style.display = 'none';
});

// Descargar reporte como CSV
downloadBtn.addEventListener('click', () => {
    const rows = Array.from(reportData.querySelectorAll('tr')).map(tr =>
        Array.from(tr.querySelectorAll('th, td')).map(cell => cell.textContent).join(',')
    );
    const csv = rows.join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `reporte_${Date.now()}.csv`;
    a.click();
    URL.revokeObjectURL(url);
});