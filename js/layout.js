document.addEventListener("DOMContentLoaded", () => {
  loadPartial("navbar", "/partials/navbar.html");
  loadPartial("sidebar", "/partials/sidebar.html");
});

async function loadPartial(id, file) {
  try {
    const res = await fetch(file);
    if (!res.ok) throw new Error("Failed to load " + file);
    document.getElementById(id).innerHTML = await res.text();
  } catch (err) {
    console.error(err);
  }
}

document.addEventListener("DOMContentLoaded", () => {
    const currentPath = window.location.pathname.split("/").pop();

    document.querySelectorAll("#sidebarMenu .nav-link").forEach(link => {
        const linkPath = link.getAttribute("href")?.split("/").pop();

        if (linkPath === currentPath) {
            link.classList.add("active");

            // Jika berada di dalam collapse, buka parent-nya
            const collapse = link.closest(".collapse");
            if (collapse) {
                collapse.classList.add("show");
            }
        }
    });
});



// jangan dirubah

  // Toggle Sidebar Mobile
        function toggleSidebar() {
            document.getElementById('sidebarMenu').classList.toggle('show');
        }

        // Active Link Handler on Scroll
        const sections = document.querySelectorAll('.content-section');
        const navLinks = document.querySelectorAll('.nav-link');

        window.onscroll = () => {
            let current = "";

            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                if (pageYOffset >= sectionTop - 120) {
                    current = section.getAttribute("id");
                }
            });

            navLinks.forEach((a) => {
                a.classList.remove("active");
                if (a.getAttribute("href") === `#${current}`) {
                    a.classList.add("active");
                }
            });
        };

        // Smooth scroll for internal links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 90,
                        behavior: 'smooth'
                    });
                }
                
                // Close sidebar on mobile after click
                if (window.innerWidth < 992) {
                    document.getElementById('sidebarMenu').classList.remove('show');
                }
            });
        });
// end jangan dirubah
