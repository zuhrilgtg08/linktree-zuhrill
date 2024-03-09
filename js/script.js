// Action Link get text
const linkAction = document.querySelectorAll(".link-card .link-action");
linkAction.forEach((action) => {
  action.addEventListener("click", (e) => {
    e.preventDefault();
    // Tangkap parent element link action
    navigator.clipboard.writeText(action.parentElement.getAttribute("href"));

    // Toaster Notifikasi
    document.getElementById("toast").innerHTML = ` <div class="toast-container">
        <p>✅ Link <strong>${action.parentElement.innerText}</strong> berhasil disalin!</p>
    </div>`

    // ketika sudah di klik maka tambahkan class toast-hidden
    setTimeout(() => {
        document.querySelector('#toast .toast-container').classList.add('toast-hidden');
    }, 300);

    setTimeout(() => {
        document.querySelector('#toast .toast-container').remove();
    }, 2000);
  });
});

// Aksi untuk hover PhIcons
const sosmedIcon = document.querySelectorAll('.social-icons i');
sosmedIcon.forEach((sosmed) => {
    // ketika mouse masuk
    sosmed.addEventListener('mouseenter', () => {
        sosmed.classList.remove('ph');
        sosmed.classList.add('ph-fill');
    });

     // ketika mouse keluar
     sosmed.addEventListener('mouseleave', () => {
        sosmed.classList.remove('ph-fill');
        sosmed.classList.add('ph');
    });
});

// Text Animation Scroll
document.addEventListener('scroll', () => {
    document.querySelector('.bg-text-animation').style.transform = `translateX(${window.scrollY / 5}px)`;
});