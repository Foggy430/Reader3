document.addEventListener("DOMContentLoaded", function() {
    const pdfInput = document.getElementById("pdfInput");
    const pdfContainer = document.getElementById("pdfContainer");

    pdfInput.addEventListener("change", function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const pdfData = e.target.result;
                const pdfBlob = new Blob([pdfData], { type: "application/pdf" });
                const pdfUrl = URL.createObjectURL(pdfBlob);

                const embed = document.createElement("embed");
                embed.src = pdfUrl;
                embed.type = "application/pdf";
                embed.width = "100%";
                embed.height = "600px";

                pdfContainer.innerHTML = "";
                pdfContainer.appendChild(embed);
            };
            reader.readAsArrayBuffer(file);
        }
    });
});