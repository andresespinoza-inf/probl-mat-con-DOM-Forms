document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form-ejercicio7');
    const resultadosDiv = document.getElementById('resultados');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const t = parseFloat(document.getElementById('valor-t').value);
        
        const resultadoA = 0.5 * Math.exp(2 * t) - 3.8 * Math.pow(Math.log(t), 3);
        
        const resultadoB = (6 * Math.pow(t, 2) + 6 * t - 2) / (Math.pow(t, 2) - 1);
        
        resultadosDiv.innerHTML = `
            <div class="result-box">
                <h4>Parte (a)</h4>
                <p>½e²ᵗ - 3.8 ln³t = <strong>${resultadoA.toFixed(4)}</strong></p>
            </div>
            <div class="result-box">
                <h4>Parte (b)</h4>
                <p>(6t² + 6t - 2)/(t² - 1) = <strong>${resultadoB.toFixed(4)}</strong></p>
            </div>
        `;
    });
});