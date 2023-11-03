let pendingUpdate: boolean = false;
const portalElement = document.getElementById("overlays") as HTMLElement;

function viewportHandler(e: Event) {
  if (pendingUpdate) return;
  pendingUpdate = true;

  requestAnimationFrame(() => {
    pendingUpdate = false;
    console.log("scroll");
    const viewport = e.target as VisualViewport;
    console.log(portalElement.clientHeight, viewport.height);
    portalElement.style.height = `${viewport.height}px`;
  });
}

export function add() {
  window.visualViewport?.addEventListener("scroll", viewportHandler);
}

export function remove() {
  window.visualViewport?.removeEventListener("scroll", viewportHandler);
}
