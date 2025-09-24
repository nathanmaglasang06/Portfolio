document.addEventListener("DOMContentLoaded", function () {
  const egridElements = document.querySelectorAll(".egrid");
  const eigridElements = document.querySelectorAll(".eigrid");

  function getMatchingEigrid(egrid) {
    const number = egrid.classList[1];
    return document.querySelector(`.eigrid.E${number}`);
  }

  function getMatchingEgrid(eigrid) {
    const number = eigrid.classList[1].substring(1);
    return document.querySelector(`.egrid.${number}`);
  }

  egridElements.forEach((egrid) => {
    const pairedEigrid = getMatchingEigrid(egrid);

    egrid.addEventListener("mouseenter", function () {
      egrid.classList.add("expanded");
      if (pairedEigrid) pairedEigrid.classList.add("expanded");
    });

    egrid.addEventListener("mouseleave", function () {
      egrid.classList.remove("expanded");
      if (pairedEigrid) pairedEigrid.classList.remove("expanded");
    });
  });

  eigridElements.forEach((eigrid) => {
    const pairedEgrid = getMatchingEgrid(eigrid);

    eigrid.addEventListener("mouseenter", function () {
      eigrid.classList.add("expanded");
      if (pairedEgrid) pairedEgrid.classList.add("expanded");
    });

    eigrid.addEventListener("mouseleave", function () {
      eigrid.classList.remove("expanded");
      if (pairedEgrid) pairedEgrid.classList.remove("expanded");
    });
  });
});
