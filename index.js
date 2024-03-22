const form = document.getElementById("registroForm");
const inputs = form.querySelectorAll("input");
const calcularButton = document.getElementById("botao-calcular");
const tipoRolamentoInput = document.getElementById("tipoRolamento");
const dExternoInput = document.getElementById("dExterno");
const dInternoInput = document.getElementById("dInterno");
const larguraInput = document.getElementById("largura");
const opcoesCorrespondentes = document.getElementById("opcoesCorrespondentes");

form.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        const activeElement = document.activeElement;
        const currentIndex = Array.from(inputs).indexOf(activeElement);
        if (currentIndex < inputs.length - 1) {
            inputs[currentIndex + 1].focus();
        } else {
            calcularButton.click();
        }
    }
});

[dExternoInput, dInternoInput, larguraInput].forEach(input => {
    input.addEventListener("input", function() {
        limparMedidasAutomaticas(input);
    });
});

tipoRolamentoInput.addEventListener("change", function() {
    const tipoRolamento = tipoRolamentoInput.value;
    preencherMedidasAutomaticamente(tipoRolamento);
});

function preencherMedidasAutomaticamente(tipoRolamento) {
    switch (tipoRolamento) {
        case "1215K":
            preencherMedidas(130, 75, 25);
            break;
        case "22311 E/VA405":
            preencherMedidas(110, 65, 20);
            break;
        case "22311 EK/VA405":
            preencherMedidas(120, 70, 22);
            break;
        case "22312 E/VA405":
            preencherMedidas(130, 75, 25);
            break;
        case "22312 EK/VA405":
            preencherMedidas(140, 80, 27);
            break;
        case "22313 E/VA405":
            preencherMedidas(150, 85, 28);
            break;
        case "22313 EK/VA405":
            preencherMedidas(160, 90, 30);
            break;
        case "22314 E/VA405":
            preencherMedidas(170, 95, 32);
            break;
        case "22314 EK/VA405":
            preencherMedidas(180, 100, 34);
            break;
        case "22315 EJA/VA405":
            preencherMedidas(190, 105, 36);
            break;
        case "22315 EKJA/VA405":
            preencherMedidas(200, 110, 38);
            break;
        case "22316 EJA/VA405":
            preencherMedidas(210, 115, 40);
            break;
        case "22316 EKJA/VA405":
            preencherMedidas(220, 120, 42);
            break;
        case "22317 EJA/VA405":
            preencherMedidas(230, 125, 44);
            break;
        case "22317 EKJA/VA405":
            preencherMedidas(240, 130, 46);
            break;
        case "22317 EJA/VA406":
            preencherMedidas(250, 135, 48);
            break;
        case "22318 EJA/VA405":
            preencherMedidas(260, 140, 50);
            break;
        case "22318 EKJA/VA405":
            preencherMedidas(270, 145, 52);
            break;
        case "22319 EJA/VA405":
            preencherMedidas(280, 150, 54);
            break;
        case "22319 EKJA/VA405":
            preencherMedidas(290, 155, 56);
            break;
        case "22320 EJA/VA405":
            preencherMedidas(300, 160, 58);
            break;
        case "22320 EKJA/VA405":
            preencherMedidas(310, 165, 60);
            break;
        case "22320 EJA/VA406":
            preencherMedidas(320, 170, 62);
            break;
        case "22322 EJA/VA405":
            preencherMedidas(330, 175, 64);
            break;
        case "22322 EJA/VA406":
            preencherMedidas(340, 180, 66);
            break;
        case "22324 CCJA/W33VA405":
            preencherMedidas(350, 185, 68);
            break;
        case "22324 CCKJA/W33VA405":
            preencherMedidas(360, 190, 70);
            break;
        case "22324 CCJA/W33VA406":
            preencherMedidas(370, 195, 72);
            break;
        case "22326 CCJA/W33VA405":
            preencherMedidas(380, 200, 74);
            break;
        case "22326 CCKJA/W33VA405":
            preencherMedidas(390, 205, 76);
            break;
        case "22326 CCJA/W33VA406":
            preencherMedidas(400, 210, 78);
            break;
        case "22328 CCJA/W33VA405":
            preencherMedidas(410, 215, 80);
            break;
        case "22328 CCKJA/W33VA405":
            preencherMedidas(420, 220, 82);
            break;
        case "22328 CCJA/W33VA406":
            preencherMedidas(430, 225, 84);
            break;
        default:
            // Limpa os campos se o tipo de rolamento não tiver sido definido
            limparMedidas();
            break;
    }
}

    function preencherMedidas(dExterno, dInterno, largura) {
        dExternoInput.value = dExterno;
        dInternoInput.value = dInterno;
        larguraInput.value = largura;
    }
    
    function limparMedidas() {
        dExternoInput.value = "";
        dInternoInput.value = "";
        larguraInput.value = "";
    }

    function searchFunction() {
        var input, filter, select, option, i;
        input = document.getElementById("searchInput");
        filter = input.value.toUpperCase();
        select = document.getElementById("tipoRolamento");
        option = select.getElementsByTagName("option");
        for (i = 0; i < option.length; i++) {
            if (option[i].textContent.toUpperCase().indexOf(filter) > -1) {
                option[i].style.display = "";
            } else {
                option[i].style.display = "none";
            }
        }
    }

function calcularValorCalculo() {
    const nomeCliente = document.getElementById("nomeCliente").value;
    const nomeEquipamento = document.getElementById("nomeEquipamento").value;
    const tipoRolamento = document.getElementById("tipoRolamento").value;
    const temperatura = parseFloat(document.getElementById("temperatura").value);
    const rpm = parseFloat(document.getElementById("rpm").value);
    const dExterno = parseFloat(document.getElementById("dExterno").value);
    const dInterno = parseFloat(document.getElementById("dInterno").value);
    const largura = parseFloat(document.getElementById("largura").value);
    const useGraxa = parseFloat(document.getElementById("useGraxa").value);

    const DMN = ((dExterno + dInterno) / 2) * rpm;
    const DMNFormatado = parseInt(DMN);
    const quantidade = dExterno * largura * (useGraxa === 0.002 ? 0.002 : 0.005);
    const intervaloEsfera = 1 * (14000000 / (rpm * Math.sqrt(dInterno))) - 4 * dInterno;
    const intervaloCilindricos = 5 * (14000000 / (rpm * Math.sqrt(dInterno))) - 4 * dInterno;
    const intervaloRadialEsferas = 10 * (14000000 / (rpm * Math.sqrt(dInterno))) - 4 * dInterno;




    let graxaRecomendada;

    if (DMN > 750000) {
        graxaRecomendada = "Total Multis XLT 2";
    } else if (DMN > 400000) {
        graxaRecomendada = "Total Altis SH/ Total Nevastane XS 80";
    } else if (DMN > 250000) {
        graxaRecomendada = "Total Nevastane HD2T/ Total Altis EM/ Total Ceran XM 100";
    } else if (DMN > 100000) {
        graxaRecomendada = "Total Ceran XM 220/Total Multis Complex EP2";
    } else if (DMN > 60000) {
        graxaRecomendada = "Total Ceram HRM 460/Total Multis C SHD 460/Total Nevastane XS 320";
    } else if (DMN > 30000) {
        graxaRecomendada = "Total Ceran MS/ Total Caloris 2";
    } else if (DMN > 10) {
        graxaRecomendada = "Total Ceran AD Plus";
    }

    const resultadosDiv = document.getElementById("resultados");
    resultadosDiv.style.display = "block";
    resultadosDiv.innerHTML = `
        <div class="watermark">
            <img src="./assets/Logo.png" alt="Marca d'água">
        </div>
        <h2>Resultados de Lubvel Lubrificantes:</h2>
        <p>Nome do Cliente: ${nomeCliente}</p>
        <p>Nome do Equipamento: ${nomeEquipamento}</p>
        <p>Tipo de Rolamento: ${tipoRolamento}</p>
        <p>Temperatura (em Celsius): ${temperatura} °C</p>
        <p>D.Externo (D) (mm): ${dExterno}  mm</p>
        <p>D.Interno (d) (mm): ${dInterno} mm</p>
        <p>Largura (B) (mm): ${largura} mm</p>
        <p>Use 0,002 p/ W33 ou 0,005 p/ demais: ${useGraxa}</p>
        <p>RPM (Rotações Por Minuto): ${rpm}</p>
        <p>DMN: ${DMNFormatado}</p>
        <p>Quantidade de Graxa (Gramas): ${quantidade.toFixed(0)}</p>
        <p>Intervalo Esfera (horas): ${intervaloEsfera.toFixed(0)}</p>
        <p>Intervalo Cilindricos (horas): ${intervaloCilindricos.toFixed(0)}</p>
        <p>Intervalo Radial Esferas (horas): ${intervaloRadialEsferas.toFixed(0)}</p>
        <p style="font-size: 25px; background-color: #00FF00; color: black;"><br>Graxa Recomendada: ${graxaRecomendada}</p>
        <p style="font-size: 20px; background-color: red; color: white;"><br>*Intervalos devem ser corrigidos conforme temperatura de trabalho e possíveis contaminações. Solicitar informações com nosso departamento técnico.* <br>Mauricio Deuner (45) 9 9971-2081</p>
        <img src="./assets/umparceirolocal.png" alt="Sua Imagem" class="imagem-resultado">
        <br/>
        <button id="imprimirRelatorio" style="background-color: #3498DB; color: #fff; padding: 15px 25px; border: none; border-radius: 4px; cursor: pointer; width: 100%;" onclick="window.print()">Imprimir</button>
    `;

    document.getElementById("report-button-container").style.display = "block";
    document.getElementById("aviso").style.display = "block";
}

function gerarRelatorio() {
    const watermark = `<div class="report-content"> <div class="watermark"> <img src="./assets/Logo.png" alt="Marca d'água"> </div> </div>`;
    const rodape = `<div class="footer">Desenvolvido por Lubvel Lubrificantes Industriais.</div>`;
    const cssStyles = `
        <style>
            .report-content {
                position: relative;
            }
            .watermark {
                display: inline-block;
                position: absolute;
                top: 250px;
                left: 160px;
                transform: translate(-50%, -50%);
                z-index: 9999;
                opacity: 0.1;
            }
        </style>
    `;

    const relatorioContent = `
        ${cssStyles}
        ${watermark}
        ${rodape}
        <pre>${relatorio}</pre>
    `;

    const newWindow = window.open("", "_blank");
    newWindow.document.open();
    newWindow.document.write(relatorioContent);
    newWindow.document.close();
}
