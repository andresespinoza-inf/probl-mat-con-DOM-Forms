document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form-ejercicio6');
    const resultadosDiv = document.getElementById('resultados');

    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Evita recargar la página
    
        const z = parseFloat(document.getElementById('valor-z').value);
        const parteA = 0.4 * Math.pow(z, 4) + 3.1 * Math.pow(z, 2) - 162.3 * z - 80.7;
        const parteB = (Math.pow(z, 3) - 23) / Math.cbrt(Math.pow(z, 2) + 17.5);
        
        const htmlResultados = `
            <div class="result-box">
                <h4>Parte (a)</h4>
                <p>0.4z⁴ + 3.1z² - 162.3z - 80.7 = <strong>${parteA.toFixed(4)}</strong></p>
            </div>
            <div class="result-box">
                <h4>Parte (b)</h4>
                <p>(z³ - 23) / ∛(z² + 17.5) = <strong>${parteB.toFixed(4)}</strong></p>
            </div>
        `;
        
        resultadosDiv.innerHTML = htmlResultados;
    });
});