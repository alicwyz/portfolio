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

            // Add video player
            const video = document.createElement('video');
            video.src = videoSrc;
            video.controls = true;
            video.autoplay = true;
            video.muted = true; // Muted autoplay is often required by browsers
            projectInfo.appendChild(video);
        });
    });
});