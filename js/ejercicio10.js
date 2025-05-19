document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form-ejercicio10');
    const resultadosDiv = document.getElementById('resultados');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const x = parseFloat(document.getElementById('valor-x').value);

        const ladoIzqA = Math.pow(Math.cos(x), 2) - Math.pow(Math.sin(x), 2);
        const ladoDerA = 1 - 2 * Math.pow(Math.sin(x), 2);
        const esCorrectoA = Math.abs(ladoIzqA - ladoDerA) < 0.0001;

        const ladoIzqB = Math.tan(x) / (Math.sin(x) - 2 * Math.tan(x));
        const ladoDerB = 1 / (Math.cos(x) - 2);
        const esCorrectoB = Math.abs(ladoIzqB - ladoDerB) < 0.0001;
        
        resultadosDiv.innerHTML = `
            <div class="result-box">
                <h4>Parte (a)</h4>
                <p>cos²x - sin²x = ${ladoIzqA.toFixed(6)}</p>
                <p>1 - 2sin²x = ${ladoDerA.toFixed(6)}</p>
                <p>La identidad es <span class="${esCorrectoA ? 'verdadero' : 'falso'}">${esCorrectoA ? 'VERDADERA' : 'FALSA'}</span></p>
            </div>
            <div class="result-box">
                <h4>Parte (b)</h4>
                <p>tanx/(sinx - 2tanx) = ${ladoIzqB.toFixed(6)}</p>
                <p>1/(cosx - 2) = ${ladoDerB.toFixed(6)}</p>
                <p>La identidad es <span class="${esCorrectoB ? 'verdadero' : 'falso'}">${esCorrectoB ? 'VERDADERA' : 'FALSA'}</span></p>
            </div>
        `;
    });
});