document.addEventListener("DOMContentLoaded", function () {
    const content = document.querySelector(".content");
    const buttons = document.querySelectorAll(".toolbar button");
    const colorPicker = document.querySelector(".toolbar input[type='color']");
    const fontSizeSelect = document.querySelector(".toolbar select");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const command = this.innerText.toLowerCase();

            if (["left", "center", "right", "justify"].includes(command)) {
                content.style.textAlign = command;
            }else if (command === "undo") {
                document.execCommand("undo");
            } else if (command === "redo") {
                document.execCommand("redo");
            } else if (command === "clear") {
                content.innerHTML = "";
            } else if (command === "insert image") {
                const url = prompt("Enter image URL:");
                if (url) {
                    const img = document.createElement("img");
                    img.src = url;
                    img.style.maxWidth = "100%";
                    content.appendChild(img);
                }
            } else if (command === "save") {
                const textToSave = content.innerHTML;
                const blob = new Blob([textToSave], { type: "text/html" });
                const a = document.createElement("a");
                a.href = URL.createObjectURL(blob);
                a.download = "document.html";
                a.click();
            }
        });
    });

    colorPicker.addEventListener("input", function () {
        content.style.color = this.value;
    });

    fontSizeSelect.addEventListener("change", function () {
        content.style.fontSize = `${this.value}px`;
    });
});
