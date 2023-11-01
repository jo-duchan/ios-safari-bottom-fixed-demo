function visualViewPortResize() {
  let pendingUpdate: boolean = false;
  const portalElement: HTMLElement | null = document.getElementById("overlays");

  function viewportHandler(e: Event) {
    if (pendingUpdate) return;
    pendingUpdate = true;

    requestAnimationFrame(() => {
      if (!portalElement) return;
      pendingUpdate = false;
      const viewport = e.target as VisualViewport;
      portalElement.style.height = `${viewport.height}px`;
    });
  }

  window.visualViewport?.addEventListener("resize", viewportHandler);
}

export default visualViewPortResize;
