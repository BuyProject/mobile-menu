// Deklarasi variable untuk menampung dom elemen
const showBottomSheetButtons = document.querySelectorAll(
    "button.show-bottom-sheet"
);
for (let showBottomSheetButton of showBottomSheetButtons) {
    const target = showBottomSheetButton.dataset.target;
    const bottomSheetContainer = document.querySelector(
        `.bottom-sheet-container${target}`
    );
    const bottomSheetCard = document.querySelector(
        `.bottom-sheet-container${target} .bottom-sheet-card`
    );
    // Munculkan bottom-sheet-container dna juga class show untuk bottom-sheet-card untuk memberi animasi saat menekan tombol
    showBottomSheetButton.addEventListener("click", () => {
        bottomSheetCard.classList.add("show");
        bottomSheetContainer.classList.add("show");
    });
    // Tutup/close/hidden bottom-sheet-container saat menekan bagian abu-abu yang bukan bagian dari card

    bottomSheetContainer.addEventListener("click", (e) => {
        if (e.target === bottomSheetContainer) {
            bottomSheetCard.classList.remove("show");
            // SetTimeout 300ms untuk memberi kesempatan pada animasi close dari bottom-sheet-card
            setTimeout(() => {
                bottomSheetContainer.classList.remove("show");
            }, 300);
        }
    });
}