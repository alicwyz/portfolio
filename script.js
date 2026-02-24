/* ═══════════════════════════════════════════════════════════════
   PORTFOLIO DATA
   ────────────────────────────────────────────────────────────────
   Add your work to the arrays below.
   Just paste any Google Drive share URL — the site converts it
   automatically to the right format for images and videos.

   'featured' is a list of items shown randomly on the home page.
   Pick your best work from any section and add them here.

   item structure:
   {
     src:   "any Google Drive share URL",
     type:  "image" | "video",    ← images show directly; videos show a thumbnail + play icon
     title: "Work Title",
     sub:   "Optional subtitle / year"
   }
════════════════════════════════════════════════════════════════ */

const WORKS = {

  'featured': [
    {
      src: "https://drive.google.com/file/d/1rf_d0bFnWiiXtqVWH79qADGBp0_0USLX/view?usp=drive_link",
      type: "video",
      title: "Animação frame-a-frame",
      sub: "Grupo de Estudos - UFMG (2024)"
    },
    {
      src: "https://drive.google.com/file/d/1Ot8gle2bbrOr5Gq0T342rGrWMoWqOA8f/view?usp=drive_link",
      type: "video",
      title: "Animação, Rigging e Textura",
      sub: "Curta - Reflexo (2024)"
    },
    {
      src: "https://drive.google.com/file/d/1GxV6yozWQ9umbxrjkwkECy5RqtJk3QY-/view?usp=drive_link",
      type: "image",
      title: "Storyboard",
      sub: "Projeto de Curta - Medo Central (2024)"
    },
    {
      src: "https://drive.google.com/file/d/1-0j7lyqcQDzKLBXi6jzXygQymfcISN13/view?usp=drive_link",
      type: "image",
      title: "Modelagem e Escultura",
      sub: "Projeto pessoal (2023)"
    },
    {
      src: "https://drive.google.com/file/d/1-SOCtN_pE5eX0xsUYCs03UdGsSpNEsIY/view?usp=drive_link",
      type: "image",
      title: "Modelagem e Textura",
      sub: "Animação 3D Digital - UFMG (2025)"
    },
    {
      src: "https://drive.google.com/file/d/1R-NmCSdSqK6XRe3wCIqMcP0mQ-1d6FU2/view?usp=drive_link",
      type: "video",
      title: "Geometry Nodes e Compositing",
      sub: "Projeto pessoal (2025)"
    },
    {
      src: "https://drive.google.com/file/d/1t1Klrc_1bCGL3MZ4yxBqIEGJ-rwlJ_UY/view?usp=drive_link",
      type: "video",
      title: "Geometry Nodes",
      sub: "Design Gráfico em Movimento - UFMG (2025)"
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
      src: "https://drive.google.com/file/d/19b_ZkaZHcB_GwpdiCPeBCXf5deVmkEbO/view?usp=drive_link",
      type: "video",
      title: "Interface e Interatividade",
      sub: "Som e Animações Procedurais - UFMG (2025)"
    },
    {
      src: "https://drive.google.com/file/d/17fDzMSYuBios8Y1PEJBk4Y7xFrp6khCd/view?usp=drive_link",
      type: "video",
      title: "Blender, OSC e Mediapipe",
      sub: "Design Gráfico em Movimento - UFMG (2025)"
    },
  ],

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
      src: "https://drive.google.com/file/d/1uUG54d4Do997yQ0JwQHRqHa0eZ2kQzhT/view?usp=drive_link",
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
      title: "Geometry Nodes",
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


/* UTILITIES */

/* Convert any Google Drive share URL to the correct embed format */
function driveUrl(src, type) {
  const match = src.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (!match) return src;
  const id = match[1];
  return type === 'video'
    ? `https://drive.google.com/file/d/${id}/preview`
    : `https://drive.google.com/thumbnail?id=${id}&sz=w800`;
}

/* Extract just the file ID from any Drive URL */
function driveId(src) {
  const match = src.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
  return match ? match[1] : null;
}

/* Shuffle a copy of an array (Fisher-Yates) */
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}


/* GRID BUILDING */

function buildGrid(key, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const items = WORKS[key] || [];

  if (items.length === 0) {
     // Show placeholder slots so the grid doesn't look empty
    for (let i = 0; i < 6; i++) container.appendChild(makePlaceholder(i + 1));
    return;
  }
  items.forEach(item => container.appendChild(makeGridItem(item)));
}

function makePlaceholder(n) {
  const div = document.createElement('div');
  div.className = 'grid-item';
  div.innerHTML = `
    <div class="grid-placeholder">
      <svg viewBox="0 0 24 24" fill="none" stroke-width="1" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="18" height="18" rx="1"/><path d="M3 9h18M9 21V9"/>
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
    const id = driveId(item.src);
    const thumb = id ? `https://drive.google.com/thumbnail?id=${id}&sz=w600` : '';
    media = thumb
      ? `<img src="${thumb}" alt="${item.title}" loading="lazy" />`
      : `<div class="grid-placeholder"><span>${item.title}</span></div>`;
  } else {
    media = `<img src="${driveUrl(item.src, 'image')}" alt="${item.title}" loading="lazy" />`;
  }

  const playIcon = item.type === 'video'
    ? `<svg class="play-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
         <circle cx="12" cy="12" r="11" fill="rgba(0,0,0,0.45)" stroke="rgba(255,255,255,0.3)" stroke-width="1"/>
         <path d="M10 8l6 4-6 4V8z" fill="currentColor"/>
       </svg>`
    : '';

  div.innerHTML = `
    ${media}
    ${playIcon}
    <div class="item-overlay">
      <div class="item-meta">
        <span class="item-title">${item.title}</span>
        ${item.sub ? `<span class="item-sub">${item.sub}</span>` : ''}
      </div>
    </div>`;

  div.addEventListener('click', () => openLightbox(item));
  return div;
}

/* Featured strip — random pick from WORKS.featured on each load */
function buildFeaturedStrip() {
  const container = document.querySelector('.strip-scroll');
  if (!container) return;
  container.innerHTML = '';

  const picks = shuffle(WORKS['featured']).slice(0, 5);

  picks.forEach(item => {
    const el = document.createElement('div');
    el.className = 'strip-item';

    const id = driveId(item.src);
    const thumb = item.type === 'video' && id
      ? `https://drive.google.com/thumbnail?id=${id}&sz=w400`
      : item.type === 'image' ? driveUrl(item.src, 'image') : '';

    el.innerHTML = thumb
      ? `<img src="${thumb}" alt="${item.title}" style="width:100%;height:100%;object-fit:cover;display:block;" loading="lazy" />`
      : `<div class="grid-placeholder"><span>${item.title}</span></div>`;
    el.innerHTML += `<div class="overlay"><span>${item.title}</span></div>`;

    el.addEventListener('click', () => openLightbox(item));
    el.addEventListener('mouseenter', () => cursor.classList.add('expanded'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('expanded'));
    container.appendChild(el);
  });
}

/* Hero cells — Featured (random), 3D (first of 3d-shade), TD (first of td) */
function buildHeroCells() {
  const cellDefs = [
    { selector: '.hero-cell.large', item: shuffle(WORKS['featured'])[0] },
    { selector: '.hero-cell[data-label="3D"]', item: WORKS['3d-shade'][0] },
    { selector: '.hero-cell[data-label="TD"]', item: WORKS['td'][0] },
  ];

  cellDefs.forEach(({ selector, item }) => {
    const cell = document.querySelector(selector);
    if (!cell || !item) return;

    const id = driveId(item.src);
    const thumb = item.type === 'video' && id
      ? `https://drive.google.com/thumbnail?id=${id}&sz=w800`
      : item.type === 'image' ? driveUrl(item.src, 'image') : '';

    const inner = cell.querySelector('.placeholder-inner');
    if (inner && thumb) {
      inner.innerHTML = `<img src="${thumb}" alt="${item.title}" style="width:100%;height:100%;object-fit:cover;display:block;" loading="lazy" />`;
      if (item.type === 'video') {
        inner.insertAdjacentHTML('beforeend', `
          <svg class="play-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:48px;height:48px;">
            <circle cx="12" cy="12" r="11" fill="rgba(0,0,0,0.45)" stroke="rgba(255,255,255,0.3)" stroke-width="1"/>
            <path d="M10 8l6 4-6 4V8z" fill="currentColor"/>
          </svg>`);
      }
    }

    cell.style.cursor = 'pointer';
    cell.addEventListener('click', () => openLightbox(item));
    cell.addEventListener('mouseenter', () => cursor.classList.add('expanded'));
    cell.addEventListener('mouseleave', () => cursor.classList.remove('expanded'));
  });
}

/* Init */
buildGrid('anim-2d',    'grid-anim-2d');
buildGrid('anim-3d',    'grid-anim-3d');
buildGrid('anim-story', 'grid-anim-story');
buildGrid('3d-model',   'grid-3d-model');
buildGrid('3d-shade',   'grid-3d-shade');
buildGrid('td',         'grid-td');
buildFeaturedStrip();
buildHeroCells();


/* LIGHTBOX */

function openLightbox(item) {
  const lb      = document.getElementById('lightbox');
  const content = document.getElementById('lb-content');
  const caption = document.getElementById('lb-caption');
  content.innerHTML = '';

  if (item.type === 'video') {
    const iframe = document.createElement('iframe');
    iframe.src = driveUrl(item.src, 'video');
    iframe.width = '900';
    iframe.height = '506';
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allowfullscreen', '');
    iframe.style.maxWidth = '90vw';
    content.appendChild(iframe);
  } else {
    const img = document.createElement('img');
    img.src = driveUrl(item.src, 'image');
    img.alt = item.title;
    content.appendChild(img);
  }

  caption.textContent = item.title + (item.sub ? ' — ' + item.sub : '');
  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
  document.getElementById('lb-content').innerHTML = '';
}

document.getElementById('lb-close').addEventListener('click', closeLightbox);
document.getElementById('lightbox').addEventListener('click', e => {
  if (e.target === e.currentTarget) closeLightbox();
});
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });


/* PAGE ROUTING */

function showProgress() {
  const p = document.getElementById('progress');
  p.style.opacity = '1';
  p.style.width = '0%';
  requestAnimationFrame(() => requestAnimationFrame(() => { p.style.width = '70%'; }));
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


/* SUB-NAV TABS */

document.querySelectorAll('.sub-nav-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const subId = btn.dataset.sub;
    const parent = btn.closest('[id^="sub-"]');
    parent.querySelectorAll('.sub-nav-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const page = btn.closest('.page');
    page.querySelectorAll('.subsection').forEach(s => s.classList.remove('active'));
    const target = document.getElementById(subId);
    if (target) target.classList.add('active');
  });
});


/* HIDE / SHOW NAV ON SCROLL */

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


/* CUSTOM CURSOR */

const cursor = document.getElementById('cursor');

document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top  = e.clientY + 'px';
});

// Static elements — dynamic ones (grid items, strip items) register in their own builders
document.querySelectorAll('a, button, .hero-cell, .tag').forEach(el => {
el.addEventListener('mouseenter', () => cursor.classList.add('expanded'));
el.addEventListener('mouseleave', () => cursor.classList.remove('expanded'));
});