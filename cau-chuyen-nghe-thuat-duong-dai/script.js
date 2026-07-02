const trackedElements = document.querySelectorAll("a[data-event], button[data-event]");

trackedElements.forEach((element) => {
  element.addEventListener("click", () => {
    const eventName = element.getAttribute("data-event");
    if (!eventName) {
      return;
    }

    window.dispatchEvent(
      new CustomEvent("landing:track", {
        detail: {
          event: eventName,
          label: element.textContent.trim(),
        },
      }),
    );
  });
});

document.querySelectorAll("details[data-event]").forEach((details) => {
  details.addEventListener("toggle", () => {
    if (!details.open) {
      return;
    }

    window.dispatchEvent(
      new CustomEvent("landing:track", {
        detail: {
          event: details.getAttribute("data-event"),
          label: details.querySelector("summary")?.textContent.trim() || "",
        },
      }),
    );
  });
});

document.querySelectorAll("[data-countdown-target]").forEach((element) => {
  const targetValue = element.getAttribute("data-countdown-target");
  const targetDate = new Date(`${targetValue}T00:00:00+07:00`);
  const now = new Date();
  const dayMs = 24 * 60 * 60 * 1000;
  const daysLeft = Math.max(0, Math.ceil((targetDate - now) / dayMs));

  element.textContent = daysLeft > 0 ? `${daysLeft} ngày` : "hôm nay";
});
