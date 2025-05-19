document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form-ejercicio8');
    const resultadosDiv = document.getElementById('resultados');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const x = parseFloat(document.getElementById('valor-x').value);
        const y = parseFloat(document.getElementById('valor-y').value);
        
        const resultadoA = Math.pow(Math.pow(x, 2) + Math.pow(y, 2), 2/3) + (x * y) / (y - x);

        const resultadoB = Math.sqrt(x + y) / Math.pow(x - y, 2) + 2 * Math.pow(x, 2) - x * Math.pow(y, 2);
        
        resultadosDiv.innerHTML = `
            <div class="result-box">
                <h4>Parte (a)</h4>
                <p>(x² + y²)⅔ + xy/(y - x) = <strong>${resultadoA.toFixed(4)}</strong></p>
            </div>
            <div class="result-box">
                <h4>Parte (b)</h4>
                <p>√(x + y)/(x - y)² + 2x² - xy² = <strong>${resultadoB.toFixed(4)}</strong></p>
            </div>
        `;
    });
});