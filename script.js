const input = document.getElementById("jsonInput");
const output = document.getElementById("output");
const message = document.getElementById("message");

document.getElementById("formatBtn").addEventListener("click", () => {
    try {
        const data = JSON.parse(input.value);
        output.value = JSON.stringify(data, null, 4);
        message.textContent = "Valid JSON ✓";
    } catch (error) {
        output.value = "";
        message.textContent = "Invalid JSON ✕";
    }
});

document.getElementById("minifyBtn").addEventListener("click", () => {
    try {
        const data = JSON.parse(input.value);
        output.value = JSON.stringify(data);
        message.textContent = "JSON minified ✓";
    } catch (error) {
        output.value = "";
        message.textContent = "Invalid JSON ✕";
    }
});

document.getElementById("copyBtn").addEventListener("click", () => {
    if (output.value === "") return;

    navigator.clipboard.writeText(output.value);
    message.textContent = "Copied ✓";
});

document.getElementById("clearBtn").addEventListener("click", () => {
    input.value = "";
    output.value = "";
    message.textContent = "";
});