document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form-ejercicio9');
    const resultadosDiv = document.getElementById('resultados');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const c = parseFloat(document.getElementById('valor-c').value);
        const d = parseFloat(document.getElementById('valor-d').value);
        const a = c * Math.pow(d, 2);
        const b = (c + a) / (c - d);
        
        const resultadoA = Math.exp(d - b) + Math.cbrt(c + a) - Math.pow(c * a, d);
        
        const resultadoB = (d / c) + Math.pow((c * d) / b, 2) - Math.pow(c, d) - (a / b);
        
        resultadosDiv.innerHTML = `
            <div class="result-box">
                <h4>Variables calculadas</h4>
                <p>a = cd² = <strong>${a.toFixed(4)}</strong></p>
                <p>b = (c + a)/(c - d) = <strong>${b.toFixed(4)}</strong></p>
            </div>
            <div class="result-box">
                <h4>Parte (a)</h4>
                <p>eᵈ⁻ᵇ + ∛(c + a) - (ca)ᵈ = <strong>${resultadoA.toFixed(4)}</strong></p>
            </div>
            <div class="result-box">
                <h4>Parte (b)</h4>
                <p>d/c + (cd/b)² - cᵈ - a/b = <strong>${resultadoB.toFixed(4)}</strong></p>
            </div>
        `;
    });
});