function verificarNumero() {
            const numero = parseInt(document.getElementById('numeroInput').value);
            const resultado = document.getElementById('resultado');
            if (isNaN(numero)) {
                resultado.textContent = "Por favor, introduce un número válido.";
                return;
            }
            if (numero % 2 === 0) {
                resultado.textContent = `${numero} es un número par.`;
            } else {
                resultado.textContent = `${numero} es un número impar.`;
            }
            actualizarGrafico(numero);
        }

        const ctx = document.getElementById('grafico').getContext('2d');
        const datosGrafico = {
            labels: [],
            datasets: [{
                label: 'Números ingresados',
                data: [],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        };
        const grafico = new Chart(ctx, {
            type: 'bar',
            data: datosGrafico,
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        function actualizarGrafico(numero) {
            datosGrafico.labels.push(`Número ${datosGrafico.labels.length + 1}`);
            datosGrafico.datasets[0].data.push(numero);
            grafico.update();
        }