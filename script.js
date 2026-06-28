const modal = document.querySelector("#imageModal");
const modalImage = modal?.querySelector("img");
const closeButton = modal?.querySelector(".modal-close");

document.querySelectorAll(".gallery-item").forEach((button) => {
  button.addEventListener("click", () => {
    if (!modal || !modalImage) return;
    const image = button.querySelector("img");
    modalImage.src = button.dataset.full || image?.src || "";
    modalImage.alt = image?.alt || "项目图片预览";
    modal.hidden = false;
    document.body.style.overflow = "hidden";
  });
});

function closeModal() {
  if (!modal || !modalImage) return;
  modal.hidden = true;
  modalImage.src = "";
  document.body.style.overflow = "";
}

closeButton?.addEventListener("click", closeModal);
modal?.addEventListener("click", (event) => {
  if (event.target === modal) closeModal();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal && !modal.hidden) closeModal();
});
