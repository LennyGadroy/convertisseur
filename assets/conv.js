function convertirDecimalEnBinaire() {
        let decimalInput = document.getElementById('inputDecimal').value;
        let resultatDiv = document.getElementById('resultatBinaire');
        
        if (!decimalInput || isNaN(decimalInput)) {
            resultatDiv.innerHTML = `<i class="fas fa-exclamation-triangle" style="color: var(--error);"></i> Veuillez entrer un nombre entier valide.`;
            return;
        }

        let nombre = parseInt(decimalInput);
        if (nombre < 0) {
            resultatDiv.innerHTML = `<i class="fas fa-exclamation-triangle" style="color: var(--error);"></i> Veuillez entrer un nombre positif.`;
            return;
        }

        if (nombre === 0) {
            resultatDiv.innerHTML = `<i class="fas fa-check-circle" style="color: var(--success);"></i> Binaire : 0`;
            return;
        }
        
        let binaire = nombre.toString(2);
        
        resultatDiv.innerHTML = `<i class="fas fa-check-circle" style="color: var(--success);"></i> Binaire : ${binaire}`;
    }

    function convertirBinaireEnDecimal() {
        let binaireInput = document.getElementById('inputBinaire').value;
        let resultatDiv = document.getElementById('resultatDecimal');

        if (!/^[01]+$/.test(binaireInput) || binaireInput === "") {
            resultatDiv.innerHTML = `<i class="fas fa-exclamation-triangle" style="color: var(--error);"></i> Binaire invalide (0 et 1 uniquement).`;
            return;
        }

        let decimal = parseInt(binaireInput, 2);
        
        resultatDiv.innerHTML = `<i class="fas fa-check-circle" style="color: var(--success);"></i> Décimal : ${decimal}`;
    }

    function toggleTheme() {
        const body = document.body;
        body.classList.toggle('mode-sombre');

        const themeToggleBtn = document.getElementById('theme-toggle');
        const iconSpan = themeToggleBtn.querySelector('.theme-icon');
        const textSpan = themeToggleBtn.querySelector('span:nth-of-type(2)');

        if (body.classList.contains('mode-sombre')) {
            iconSpan.textContent = '☀️';
            textSpan.textContent = "Thème Clair";
        } else {
            iconSpan.textContent = '🌙';
            textSpan.textContent = "Thème Sombre";
        }
    }

    document.addEventListener('DOMContentLoaded', () => {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.body.classList.add('mode-sombre');
        }
        toggleTheme();
    });