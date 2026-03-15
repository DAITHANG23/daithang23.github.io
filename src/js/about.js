export function initAbout() {
  function createProgressBar() {
    if (document.querySelector(".progress-container")) return;
    const progressContainer = document.createElement("div");
    progressContainer.className = "progress-container fixed top-0 z-30 h-1 w-full bg-background";

    const progressBar = document.createElement("div");
    progressBar.className =
      "progress-bar h-1 w-0 bg-primary transition-width duration-300 ease-in-out";
    progressBar.id = "myBar";

    progressContainer.appendChild(progressBar);

    document.body.appendChild(progressContainer);
  }
  createProgressBar();

  function updateScrollProgress() {
    document.addEventListener("scroll", () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      if (document) {
        const myBar = document.getElementById("myBar");
        if (myBar) {
          myBar.style.width = scrolled + "%";
        }
      }
    });
  }
  updateScrollProgress();

  // Build style for experience section
  const styleWorkeducContent = document.querySelectorAll(".workeduc-content");
  styleWorkeducContent.forEach(item => {
    const beforeElement = document.createElement("span");
    beforeElement.className =
      "absolute left-[-0.65rem] top-0 h-[1.2rem] w-[1.2rem] rounded-full bg-primary";
    item.appendChild(beforeElement);
  });

  const links = document.querySelectorAll(".hover-effect a");

  links.forEach(l => {
    l.classList.add(
      "text-primary-text",
      "p-0",
      "hover:underline",
      "hover:underline-offset-4",
      "font-bold"
    );
  });

  // Write script for projects and services section
  const projects = document.querySelectorAll(".content__about");
  projects.forEach(project => {
    project.addEventListener("click", e => {
      e.stopPropagation();

      projects.forEach(t => {
        if (t !== project) {
          t.classList.remove("active");
        }
      });

      project?.classList.toggle("active");
    });
  });

  document.addEventListener("click", () => {
    projects.forEach(t => {
      t.classList.remove("active");
    });
  });

  // Write script for contact form
  const contacts = document.querySelectorAll(".input__contact");

  contacts.forEach(input => {
    input.classList.add(
      "focus:border-primary",
      "focus:ring-primary",
      "focus:ring-opacity-50",
      "rounded-[0.5rem]",
      "border",
      "border-solid",
      "border-gray-300",
      "bg-gray-300",
      "p-6",
      "focus:ring-2",
      "focus:outline-none",
      "dark:bg-black"
    );
  });
}

document.addEventListener("astro:page-load", initAbout);
