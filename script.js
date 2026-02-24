/* ═══════════════════════════════════════════════
   PORTFOLIO DATA
   ─────────────────────────────────────────────
   To add your work, fill in the arrays below.
   
   For Google Drive images:
   1. Right-click file → Share → "Anyone with the link"
   2. Copy the file ID from the share URL
   3. Use: https://drive.google.com/uc?export=view&id=YOUR_FILE_ID
   
   For Google Drive videos, use the embed URL:
   https://drive.google.com/file/d/YOUR_FILE_ID/preview
   (set type: "video" and it will render as an iframe)

   item structure:
   {
     src:   "URL to image or video",
     type:  "image" | "video",   // default: "image"
     title: "Work Title",
     sub:   "Optional subtitle / year"
   }
═══════════════════════════════════════════════ */

const WORKS = {
  'anim-2d': [
    {
        src: "https://drive.google.com/file/d/1Kz7DbiZ53MBQx4h70poA7yt1frB-Xp0a/view?usp=drive_link",
        type: "video",
        title: "Animação frame-a-frame e cutout",
        sub: "Animação 2D Digital - UFMG (2025)"
    },
    {
        src: "https://drive.google.com/file/d/1rf_d0bFnWiiXtqVWH79qADGBp0_0USLX/view?usp=drive_link",
        type: "video",
        title: "Animação frame-a-frame",
        sub: "Grupo de Estudos - UFMG (2024)"
    },
    {
        src: "https://drive.google.com/file/d/1-4_aEZ0LgobZBfpFYlbomnZsD1HuYrLF/view?usp=drive_link",
        type: "video",
        title: "Animação frame-a-frame",
        sub: "Grupo de Estudos - UFMG (2024)"
    },
    {
        src: "https://drive.google.com/file/d/1sYiOgezQJ5uqx1MTBRaq5i38FRt2G4c-/view?usp=drive_link",
        type: "video",
        title: "Animação frame-a-frame",
        sub: "Grupo de Estudos - UFMG (2024)"
    },
    {
        src: "https://drive.google.com/file/d/1ttOb9L4xdfPaZvsIhyZwefcojI12ArSY/view?usp=drive_link",
        type: "video",
        title: "Animação frame-a-frame",
        sub: "Curta - TV Entreaberta (2024)"
    },
    {
        src: "https://drive.google.com/file/d/1gDWY1ka7Z5nFAiYyEbRWfzuohd-cpj5H/view?usp=drive_link",
        type: "video",
        title: "Animação frame-a-frame",
        sub: "Curta - TV Entreaberta (2024)"
    },
    {
        src: "https://drive.google.com/file/d/1iZ7Q3hqlFQNPGoBOtLVWnfcwjj69m7o3/view?usp=drive_link",
        type: "video",
        title: "Animação frame-a-frame",
        sub: "Curta - TV Entreaberta (2024)"
    },
    {
        src: "https://drive.google.com/file/d/1N60BSuC6CKnaoHQ1GfBnqLDF5r7Up2Al/view?usp=drive_link",
        type: "video",
        title: "Animação frame-a-frame",
        sub: "Curta - TV Entreaberta (2024)"
    },
    {
        src: "https://drive.google.com/file/d/19fNUnAK_9ABwmWsmrtZsqPZJjLATg6zP/view?usp=drive_link",
        type: "video",
        title: "Animação de inbetweens",
        sub: "Curta - Boa Noite (2024)"
    },
    {
        src: "https://drive.google.com/file/d/1njVByp8P2kAtPqaz4xZWjK3gpA11BFtF/view?usp=drive_link",
        type: "video",
        title: "Animação de inbetweens",
        sub: "Curta - Boa Noite (2024)"
    },
    {
        src: "https://drive.google.com/file/d/1QNUEdZOFP_XtOCv3w5jZKP8Su08VcJls/view?usp=drive_link",
        type: "video",
        title: "Animação de inbetweens",
        sub: "Curta - Boa Noite (2024)"
    },
    {
        src: "https://drive.google.com/file/d/1Lk0RQwVMXnfajN2J5LuZjVWlITvsfZD4/view?usp=drive_link",
        type: "video",
        title: "Animação de inbetweens",
        sub: "Curta - Boa Noite (2024)"
    },
  ],
  'anim-3d': [
    {
        src: "https://drive.google.com/file/d/1Ot8gle2bbrOr5Gq0T342rGrWMoWqOA8f/view?usp=drive_link",
        type: "video",
        title: "Animação, Rigging e Textura",
        sub: "Curta - Reflexo (2024)"
    },
    {
        src: "https://drive.google.com/file/d/12updt37P6Loxz8E0P5Bis7sDqhVD02WB/view?usp=drive_link",
        type: "video",
        title: "Animação - Preview",
        sub: "Projeto de Curta - Abissal (2025)"
    },
    {
        src: "https://drive.google.com/file/d/1G-7pDwD6bdtCyyfKi8GX574wnCqpz-o_/view?usp=drive_link",
        type: "video",
        title: "Animação - Preview",
        sub: "Projeto de Curta - Abissal (2025)"
    },
    {
        src: "https://drive.google.com/file/d/1G-7pDwD6bdtCyyfKi8GX574wnCqpz-o_/view?usp=drive_link",
        type: "video",
        title: "Animação - Animático",
        sub: "Projeto de Curta - Tarot (2023)"
    },
  ],
  'anim-story': [
    {
        src: "https://drive.google.com/file/d/16fDgmZWM2KguYyDLkNGMedD-5OVmSWRr/view?usp=drive_link",
        type: "image",
        title: "Storyboard",
        sub: "Projeto de Curta - Medo Central (2024)"
    },
    {
        src: "https://drive.google.com/file/d/1GxV6yozWQ9umbxrjkwkECy5RqtJk3QY-/view?usp=drive_link",
        type: "image",
        title: "Storyboard",
        sub: "Projeto de Curta - Medo Central (2024)"
    },
    {
        src: "https://drive.google.com/file/d/1IVl_cqhirhqT_1dzNo9J1vxGniLaj3mT/view?usp=drive_link",
        type: "image",
        title: "Storyboard",
        sub: "Projeto de Curta - Medo Central (2024)"
    },
    {
        src: "https://drive.google.com/file/d/1arIfnJnOzlYsrt1sslDX6QVVekCMQrFo/view?usp=drive_link",
        type: "image",
        title: "Storyboard",
        sub: "Projeto de Curta - Medo Central (2024)"
    },
    {
        src: "https://drive.google.com/file/d/1WGc1Prit6B2kU0bZo28LwHibDwwIds2E/view?usp=drive_link",
        type: "image",
        title: "Layout",
        sub: "Animação 2D Digital - UFMG (2025)"
    },
    {
        src: "https://drive.google.com/file/d/1xkWC3atHCktMlSNbFYMVQDUy6nEhOUza/view?usp=drive_link",
        type: "image",
        title: "Character Sheet",
        sub: "Animação 2D Digital - UFMG (2025)"
    },
    {
        src: "https://drive.google.com/file/d/1uVI4AGBZQI1ROsBgDz8VdCp-S6SSFU8l/view?usp=drive_link",
        type: "image",
        title: "Storyboard",
        sub: "Projeto de Curta - Abissal (2025)"
    },
    {
        src: "https://drive.google.com/file/d/1kVUtdqv7AR-Iqn2_t35lkZRVI-ZjPa8C/view?usp=drive_link",
        type: "image",
        title: "Design de Personagem",
        sub: "Grupo de Estudos - UFMG (2024)"
    },
    {
        src: "https://drive.google.com/file/d/1zMMj2Z8c_yZqoeVWJOfMmCzdBSO0fp-N/view?usp=drive_link",
        type: "image",
        title: "Design de Personagem",
        sub: "Design de Jogos - UFMG (2024)"
    },
    {
        src: "https://drive.google.com/file/d/1z42dQ7cCMroaJajjVF_fH-x9QNppNfhL/view?usp=drive_link",
        type: "image",
        title: "Design de Personagem",
        sub: "Design de Jogos - UFMG (2024)"
    },
    {
        src: "https://drive.google.com/file/d/1chQkFQJR0T_TkVvFbJp8fYu2cUSG8keD/view?usp=drive_link",
        type: "image",
        title: "Design de Personagem",
        sub: "Design de Jogos - UFMG (2024)"
    },
  ],
  '3d-model': [
    {
        src: "https://drive.google.com/file/d/1-0j7lyqcQDzKLBXi6jzXygQymfcISN13/view?usp=drive_link",
        type: "image",
        title: "Modelagem e Escultura",
        sub: "Projeto pessoal (2023)"
    },
    {
        src: "https://drive.google.com/file/d/1yAMSK5Gv1ccghSAzAlpigvXtp6_Q1FJk/view?usp=drive_link",
        type: "image",
        title: "Modelagem e Escultura",
        sub: "Projeto pessoal (2023)"
    },
    {
        src: "https://drive.google.com/file/d/1EOGo2XpRPwPgsNx-cPCMXF9TKywnDl7y/view?usp=drive_link",
        type: "image",
        title: "Modelagem e Escultura",
        sub: "Projeto pessoal (2024)"
    },
    {
        src: "https://drive.google.com/file/d/1UkVAAiacSDuULAU8dGpshRPfPPZevawS/view?usp=drive_link",
        type: "image",
        title: "Modelagem de Cenário",
        sub: "Projeto pessoal (2024)"
    },
    {
        src: "https://drive.google.com/file/d/1Y2vba0gUgIPorAbYdLMHmys3tf01ePO2/view?usp=drive_link",
        type: "image",
        title: "Modelagem",
        sub: "Animação 3D Digital - UFMG (2025)"
    },
    {
        src: "https://drive.google.com/file/d/1-SOCtN_pE5eX0xsUYCs03UdGsSpNEsIY/view?usp=drive_link",
        type: "image",
        title: "Modelagem e Textura",
        sub: "Animação 3D Digital - UFMG (2025)"
    },
    {
        src: "https://drive.google.com/file/d/1NzezTyncP7bkdN1POLqPrITy0jPUabeC/view?usp=drive_link",
        type: "image",
        title: "Modelagem low-poly",
        sub: "Projeto pessoal (2024)"
    },
    {
        src: "https://drive.google.com/file/d/18Vz-wJIfjJ0FqmxEcawsdsqyBBx5OVYY/view?usp=drive_link",
        type: "image",
        title: "Modelagem de Cenário",
        sub: "Curta - Reflexo (2024)"
    },
    {
        src: "https://drive.google.com/file/d/1P9x0KMhG96sltfbRs9T-dkx4apR8JQ96/view?usp=drive_link",
        type: "image",
        title: "Modelagem de Cenário",
        sub: "Curta - Reflexo (2024)"
    },  
  ],
  '3d-shade': [
    {
        src: "https://drive.google.com/file/d/1R-NmCSdSqK6XRe3wCIqMcP0mQ-1d6FU2/view?usp=drive_link",
        type: "video",
        title: "Geometry Nodes e Compositing",
        sub: "Projeto pessoal (2025)"
    },
    {
        src: "https://drive.google.com/file/d/10nbzmGJ4MqBG8JDAgEcX6P_fpMvOSQV7/view?usp=drive_link",
        type: "image",
        title: "Shading e Compositing",
        sub: "Projeto pessoal (2025)"
    },
    {
        src: "https://drive.google.com/file/d/1xvQ4rclYHMujTYaNbIEGdN0ihkK4ZIB2/view?usp=drive_link",
        type: "video",
        title: "Geometry Nodes e OSC",
        sub: "Design Gráfico em Movimento - UFMG (2025)"
    },
    {
        src: "https://drive.google.com/file/d/1VyxOgTCnSwFbnD0FxbZTgb-0psf8fE0I/view?usp=drive_link",
        type: "video",
        title: "Geometry Nodes e OSC",
        sub: "Design Gráfico em Movimento - UFMG (2025)"
    },
    {
        src: "https://drive.google.com/file/d/1t1Klrc_1bCGL3MZ4yxBqIEGJ-rwlJ_UY/view?usp=drive_link",
        type: "video",
        title: "Geometry Nodes e OSC",
        sub: "Design Gráfico em Movimento - UFMG (2025)"
    },
    {
        src: "https://drive.google.com/file/d/1AMJiQSElK1mac_tf84FZfy3UH7Q0BFVf/view?usp=drive_link",
        type: "image",
        title: "Geometry Nodes e OSC",
        sub: "Design Gráfico em Movimento - UFMG (2025)"
    },
    {
        src: "https://drive.google.com/file/d/1zF8rKXWOUhv2-KV-s8WQWUFvz61a72kh/view?usp=drive_link",
        type: "image",
        title: "Desenvolvimento de Nodes OSC",
        sub: "Design Gráfico em Movimento - UFMG (2025)"
    },
    {
        src: "https://drive.google.com/file/d/1Q1FPufAFANZv3cAb_HjEU06lQcJfKx3z/view?usp=drive_link",
        type: "video",
        title: "Geometry Nodes e OSC",
        sub: "Design Gráfico em Movimento - UFMG (2025)"
    },
    {
        src: "https://drive.google.com/file/d/1gLzXY5vu6eUK0YvvQzBNfUdbETairhv9/view?usp=drive_link",
        type: "image",
        title: "Geometry Nodes",
        sub: "Projeto pessoal (2023)"
    },
    {
        src: "https://drive.google.com/file/d/1Akv7oAkJcgA6s3PxztcxOg9kI664GGVA/view?usp=drive_link",
        type: "video",
        title: "Shading",
        sub: "Projeto pessoal (2024)"
    },
  ],
  'td': [
    {
        src: "https://drive.google.com/file/d/1wXGifi7WMect45GRM35RHtZ01GGrNRXI/view?usp=drive_link",
        type: "video",
        title: "Genuary - ASCII",
        sub: "Projeto pessoal (2026)"
    },
    {
        src: "https://drive.google.com/file/d/1SBX7CrRX8jrMR2ZixhYoFGJkwFbN0FAN/view?usp=drive_link",
        type: "video",
        title: "Genuary - Mediapipe",
        sub: "Projeto pessoal (2026)"
    },
    {
        src: "https://drive.google.com/file/d/180DKGs5xdMMn3muDJrE84Go8VjtA0ZiO/view?usp=drive_link",
        type: "video",
        title: "Shader GLSL",
        sub: "Projeto pessoal (2025)"
    },
    {
        src: "https://drive.google.com/file/d/1rVLApLk5Br-QYXc3VLgeJnJ3vBoy36Rx/view?usp=drive_link",
        type: "video",
        title: "POPs",
        sub: "Projeto pessoal (2025)"
    },
    {
        src: "https://drive.google.com/file/d/17fDzMSYuBios8Y1PEJBk4Y7xFrp6khCd/view?usp=drive_link",
        type: "video",
        title: "Blender, OSC e Mediapipe",
        sub: "Design Gráfico em Movimento - UFMG (2025)"
    },
    {
        src: "https://drive.google.com/file/d/17fDzMSYuBios8Y1PEJBk4Y7xFrp6khCd/view?usp=drive_link",
        type: "video",
        title: "Blender, OSC e Mediapipe",
        sub: "Design Gráfico em Movimento - UFMG (2025)"
    },
    {
        src: "https://drive.google.com/file/d/1Wc6H8DArZRzwoFzQ37NPEmb4mbqantBz/view?usp=drive_link",
        type: "image",
        title: "POPs",
        sub: "Projeto pessoal (2025)"
    },
    {
        src: "https://drive.google.com/file/d/1VlZbyImsYbPw528kjISpaCQpCvt3CL1M/view?usp=drive_link",
        type: "video",
        title: "Interface e Interatividade",
        sub: "Projeto pessoal (2025)"
    },
    {
        src: "https://drive.google.com/file/d/19b_ZkaZHcB_GwpdiCPeBCXf5deVmkEbO/view?usp=drive_link",
        type: "video",
        title: "Interface e Interatividade",
        sub: "Som e Animações Procedurais - UFMG (2025)"
    },
    {
        src: "https://drive.google.com/file/d/1GKWAAvM6suPME6kHW8ziR1fPLOBM4qBr/view?usp=drive_link",
        type: "video",
        title: "Interface e Interatividade",
        sub: "Projeto pessoal (2025)"
    },
    {
        src: "https://drive.google.com/file/d/1DF17VBDgk-Z2663oW0sc2mFSXcBWGyES/view?usp=drive_link",
        type: "video",
        title: "Interface e Interatividade",
        sub: "Projeto pessoal (2025)"
    },
    {
        src: "https://drive.google.com/file/d/1viMOHayzHZyyq6FXLBYPt5Ea_lfvwJCm/view?usp=drive_link",
        type: "video",
        title: "Reatividade Sonora",
        sub: "Som e Animações Procedurais - UFMG (2025)"
    },
    {
        src: "https://drive.google.com/file/d/14brux2b1OsvNo7Gxb0LP7coyq2sY5Ysh/view?usp=drive_link",
        type: "video",
        title: "TOPs e Interface",
        sub: "Performance Experimental - UFMG (2025)"
    },
    {
        src: "https://drive.google.com/file/d/1FXFp_b6bQXRQoPyuifgkZFpHIvsKOGJL/view?usp=drive_link",
        type: "video",
        title: "Partículas",
        sub: "Evento - Amarélindo (2025)"
    },
    {
        src: "https://drive.google.com/file/d/1WnWBx7-25_2owSm-GKrbmvNVJCuHI1jn/view?usp=drive_link",
        type: "video",
        title: "Strudel",
        sub: "Projeto Pessoal (2025)"
    },
  ],
};


/* Populate grids */
function buildGrid(key, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const items = WORKS[key] || [];

  if (items.length === 0) {
    // Show placeholder slots so the grid doesn't look empty
    for (let i = 0; i < 6; i++) {
      container.appendChild(makePlaceholder(i + 1));
    }
    return;
  }

  items.forEach(item => {
    const el = makeGridItem(item);
    container.appendChild(el);
  });
}

function makePlaceholder(n) {
  const div = document.createElement('div');
  div.className = 'grid-item';
  div.innerHTML = `
    <div class="grid-placeholder">
      <svg viewBox="0 0 24 24" fill="none" stroke-width="1" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="18" height="18" rx="1"/>
        <path d="M3 9h18M9 21V9"/>
      </svg>
      <span>Work ${String(n).padStart(2,'0')}</span>
    </div>`;
  return div;
}

function makeGridItem(item) {
  const div = document.createElement('div');
  div.className = 'grid-item';

  let media = '';
  if (item.type === 'video') {
    // For Google Drive embed
    media = `<iframe src="${item.src}" width="100%" height="100%" frameborder="0" allowfullscreen style="pointer-events:none;position:absolute;inset:0;"></iframe>`;
  } else {
    media = `<img src="${item.src}" alt="${item.title}" loading="lazy" />`;
  }

  div.innerHTML = `
    ${media}
    <div class="item-overlay">
      <div class="item-meta">
        <span class="item-title">${item.title}</span>
        ${item.sub ? `<span class="item-sub">${item.sub}</span>` : ''}
      </div>
    </div>`;

  div.addEventListener('click', () => openLightbox(item));
  return div;
}

/* Init grids */
buildGrid('anim-2d',    'grid-anim-2d');
buildGrid('anim-3d',    'grid-anim-3d');
buildGrid('anim-story', 'grid-anim-story');
buildGrid('3d-model',   'grid-3d-model');
buildGrid('3d-shade',   'grid-3d-shade');
buildGrid('td',         'grid-td');


/* Lightbox */
function openLightbox(item) {
  const lb = document.getElementById('lightbox');
  const content = document.getElementById('lb-content');
  const caption = document.getElementById('lb-caption');

  content.innerHTML = '';
  if (item.type === 'video') {
    const iframe = document.createElement('iframe');
    iframe.src = item.src;
    iframe.width = '900';
    iframe.height = '506';
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allowfullscreen', '');
    iframe.style.maxWidth = '90vw';
    content.appendChild(iframe);
  } else {
    const img = document.createElement('img');
    img.src = item.src;
    img.alt = item.title;
    content.appendChild(img);
  }

  caption.textContent = item.title + (item.sub ? ' — ' + item.sub : '');
  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const lb = document.getElementById('lightbox');
  lb.classList.remove('open');
  document.body.style.overflow = '';
  document.getElementById('lb-content').innerHTML = '';
}

document.getElementById('lb-close').addEventListener('click', closeLightbox);
document.getElementById('lightbox').addEventListener('click', e => {
  if (e.target === e.currentTarget) closeLightbox();
});
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });


/* Page routing */
function showProgress() {
  const p = document.getElementById('progress');
  p.style.opacity = '1';
  p.style.width = '0%';
  requestAnimationFrame(() => {
    requestAnimationFrame(() => { p.style.width = '70%'; });
  });
}
function finishProgress() {
  const p = document.getElementById('progress');
  p.style.width = '100%';
  setTimeout(() => { p.style.opacity = '0'; p.style.width = '0%'; }, 400);
}

const pages = document.querySelectorAll('.page');
const navLinks = document.querySelectorAll('.nav-links a');

function navigateTo(pageId) {
  showProgress();
  pages.forEach(p => p.classList.remove('active'));
  navLinks.forEach(a => a.classList.remove('active'));

  setTimeout(() => {
    const target = document.getElementById('page-' + pageId);
    if (target) {
      target.classList.add('active');
      window.scrollTo(0, 0);
    }
    const link = document.querySelector(`[data-page="${pageId}"]`);
    if (link) link.classList.add('active');
    finishProgress();
  }, 150);
}

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    navigateTo(link.dataset.page);
  });
});


/* Sub-nav tabs */
document.querySelectorAll('.sub-nav-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const subId = btn.dataset.sub;
    const parent = btn.closest('[id^="sub-"]');
    parent.querySelectorAll('.sub-nav-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // Find the sibling subsections in the same page
    const page = btn.closest('.page');
    page.querySelectorAll('.subsection').forEach(s => s.classList.remove('active'));
    const target = document.getElementById(subId);
    if (target) target.classList.add('active');
  });
});


/* Hide/show nav on scroll */
let lastScroll = 0;
const nav = document.getElementById('main-nav');

window.addEventListener('scroll', () => {
  const current = window.scrollY;
  if (current > lastScroll && current > 80) {
    nav.classList.add('hidden');
  } else {
    nav.classList.remove('hidden');
  }
  nav.classList.toggle('scrolled', current > 10);
  lastScroll = current;
}, { passive: true });


/* Custom cursor */
const cursor = document.getElementById('cursor');
let cx = 0, cy = 0;

document.addEventListener('mousemove', e => {
  cx = e.clientX; cy = e.clientY;
  cursor.style.left = cx + 'px';
  cursor.style.top = cy + 'px';
});

document.querySelectorAll('a, button, .grid-item, .strip-item, .hero-cell, .tag').forEach(el => {
  el.addEventListener('mouseenter', () => cursor.classList.add('expanded'));
  el.addEventListener('mouseleave', () => cursor.classList.remove('expanded'));
});