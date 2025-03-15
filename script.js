document.addEventListener('DOMContentLoaded', function () {
    particlesJS.load('particles-js', 'particles.json', function () {
        console.log('Particles.js loaded');
    });

    const projects = document.querySelectorAll('.project');
    const projectInfo = document.getElementById('project-info');

    const titles = [
        "Jogo de Conway", "Composição Procedural", "Máquinas Poética", "Labirinto Retro"
    ]

    const desc = [
        'Simulação do "Jogo de Conway" em tempo real, usando Geometry Nodes no Blender',
        'Sistema de partículas que reage proceduralmente à composição "Wind", de Franz Danzi, feito no UPBGE (Disciplina: PD e UPBGE)',
        'Conjunto de máquinas com dinâmica probabilística, feitas para uma performance de recitação do poema "Telefone", de Vasily Kamensky (Discplina: PD e UPBGE)',
        'Jogo estilo retro de exploração de um labirinto procedural, usando sistema de raycasting (Disciplina: Processing 2)'
    ]

    projects.forEach(project => {
        project.addEventListener('click', function () {
            const projectId = this.getAttribute('data-project');
            const videoSrc = this.getAttribute('data-video');

            // Clear previous content
            projectInfo.innerHTML = '';

            // Add project title and description
            const title = document.createElement('h2');
            title.textContent = titles[projectId];
            projectInfo.appendChild(title);

            const description = document.createElement('p');
            description.textContent = desc[projectId];
            projectInfo.appendChild(description);

            // Add loading message and spinner
            const loadingMessage = document.createElement('div');
            loadingMessage.className = 'loading-message';
            loadingMessage.textContent = 'Loading video...';
            projectInfo.appendChild(loadingMessage);

            const spinner = document.createElement('div');
            spinner.className = 'spinner';
            projectInfo.appendChild(spinner);

            // Add Google Drive video embed
            const iframe = document.createElement('iframe');
            iframe.src = videoSrc;
            iframe.width = "640"; // Adjust width as needed
            iframe.height = "360"; // Adjust height as needed
            iframe.style.border = "none";
            iframe.style.borderRadius = "8px";
            iframe.style.marginTop = "20px";
            iframe.style.display = "none"; // Hide the iframe initially

            // When the iframe is loaded, hide the loading message and show the video
            iframe.onload = function () {
                loadingMessage.style.display = "none";
                spinner.style.display = "none";
                iframe.style.display = "block";
            };

            iframe.onerror = function () {
                loadingMessage.textContent = 'Failed to load video. Please try again.';
                spinner.style.display = "none";
            };

            projectInfo.appendChild(iframe);
        });
    });
});