// Echo – základní logika aplikace

const chat = document.getElementById("chat");
const input = document.getElementById("messageInput");
const btn = document.getElementById("sendBtn");

/* ---------------------------
   1) FUNKCE NA PŘIDÁNÍ ZPRÁVY
----------------------------*/
function addMessage(text, sender) {
    const div = document.createElement("div");
    div.className = "bubble " + sender;
    div.textContent = text;
    chat.appendChild(div);
    chat.scrollTop = chat.scrollHeight;
}

/* -----------------------------------------
   2) ZÁKLADNÍ AI LOGIKA (zatím bez OpenAI)
------------------------------------------*/
async function getEchoResponse(text) {
    // Základní verze: ECHO jen zrcadlí, co uživatel řekne
    // Později nahradíme za OpenAI API
    return (
        "Jsem Echo, tvůj digitální odraz.\n" +
        "Řekl jsi: " + text + "\n\n" +
        "Brzy se naučím tvoji osobnost, náladu a vytvořím tvůj AI klon."
    );
}

/* ---------------------------
   3) ODESLÁNÍ ZPRÁVY
----------------------------*/
btn.addEventListener("click", async () => {
    const text = input.value.trim();
    if (!text) return;

    addMessage(text, "user");
    input.value = "";

    const reply = await getEchoResponse(text);
    addMessage(reply, "ai");
});

/* ENTER = odeslat */
input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") btn.click();
});
