/* =========================================================================
   app.js — Interfaz UNE 157001:2014
   ========================================================================= */
const $ = (s) => document.querySelector(s);
const $$ = (s) => Array.from(document.querySelectorAll(s));

/* ---------- Tabs ---------- */
$$(".tab").forEach((btn) => {
  btn.addEventListener("click", () => {
    $$(".tab").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    $$(".panel").forEach((p) => p.classList.remove("active"));
    $("#" + btn.dataset.tab).classList.add("active");
  });
});

/* ---------- Helpers ---------- */
function ul(items) {
  return `<ul>${items.map((i) => `<li>${i}</li>`).join("")}</ul>`;
}
function seccion(titulo, contenido) {
  return `<h3>${titulo}</h3>${contenido}`;
}

/* ---------- Estructura documental ---------- */
$("#tbDocs").innerHTML = DOCUMENTOS.map((d, i) =>
  `<tr><td>${i + 1}</td><td><strong>${d[0]}</strong></td><td>${d[1]}</td></tr>`
).join("");
$("#reqGen").innerHTML = REQ_GEN.map((r) => `<li>${r}</li>`).join("");
$("#infoIni").innerHTML = INFO_INI.map((r) => `<li>${r}</li>`).join("");

/* ---------- Memoria ---------- */
$("#memoriaCapitulos").innerHTML = MEMORIA_CAPS.map((c) => {
  let html = `<div class="grupo"><h3>${c.id} ${c.titulo}</h3><p>${c.texto}</p>`;
  if (c.sub) {
    html += `<ul>${c.sub.map(([t, d]) => `<li><strong>${t}:</strong> ${d}</li>`).join("")}</ul>`;
  }
  html += `</div>`;
  return html;
}).join("");

/* ---------- Anexos ---------- */
$("#anexosContenido").innerHTML = ANEXOS_ITEMS.map(([t, d]) =>
  `<h3>${t}</h3><p>${d}</p>`
).join("");

/* ---------- Planos ---------- */
$("#planosContenido").innerHTML = PLANOS_ITEMS.map((p) => `<p>${p}</p>`).join("");

/* ---------- Pliego ---------- */
$("#pliegoContenido").innerHTML = PLIEGO_ITEMS.map(([t, d]) =>
  `<h3>${t}</h3><p>${d}</p>`
).join("");

/* ---------- Mediciones y presupuesto ---------- */
$("#medicionesContenido").innerHTML = ul(MEDICIONES_ITEMS);
$("#presupuestoContenido").innerHTML = ul(PRESUPUESTO_ITEMS);

/* ---------- Normas de consulta ---------- */
$("#normasContenido").innerHTML = `<ul>${NORMAS_CONSULTA.map((n) => `<li><a href="${n.u}" target="_blank" rel="noopener">${n.t}</a></li>`).join("")}</ul>`;

/* ---------- Glosario ---------- */
$("#glosarioContenido").innerHTML = `<div class="tabla-wrap"><table class="tabla">
  <thead><tr><th>Término</th><th>Definición</th></tr></thead>
  <tbody>${DEFINICIONES.map(([t, d]) => `<tr><td><strong>${t}</strong></td><td>${d}</td></tr>`).join("")}</tbody>
</table></div>`;

/* ---------- Verificador ---------- */
const VERIF_KEY = "une157001-verif";
function getVerifChecked() {
  try { return JSON.parse(localStorage.getItem(VERIF_KEY) || "[]"); } catch (e) { return []; }
}
function setVerifChecked(arr) { localStorage.setItem(VERIF_KEY, JSON.stringify(arr)); }

function renderVerificador() {
  const checked = getVerifChecked();
  const r = verificar(checked);
  let html = `<p><strong>Completitud total: ${r.pctTotal} %</strong> (${r.totalMarcados} de ${r.total} elementos)</p>`;
  html += `<div class="tabla-wrap"><table class="tabla"><caption>Completitud por bloque</caption>
    <thead><tr><th>Bloque</th><th>Marcados</th><th>Total</th><th>%</th></tr></thead>
    <tbody>${r.bloques.map((b) => `<tr><td>${b.bloque}</td><td>${b.marcados}</td><td>${b.total}</td><td>${b.pct} %</td></tr>`).join("")}</tbody></table></div>`;
  if (r.faltantes.length) {
    html += `<h3>Elementos pendientes (${r.faltantes.length})</h3><ul>${r.faltantes.map((f) => `<li>${f}</li>`).join("")}</ul>`;
  } else {
    html += `<p class="hint">Todos los elementos marcados como incluidos.</p>`;
  }
  // checkboxes
  html += `<div class="checklist" style="margin-top:16px">`;
  VERIF_BLOQUES.forEach((b, bi) => {
    html += `<div class="grupo"><h3>${b.bloque}</h3>`;
    b.items.forEach((it, ii) => {
      const id = `${bi}|${ii}`;
      const chk = checked.includes(id) ? "checked" : "";
      html += `<label><input type="checkbox" class="verif-cb" data-id="${id}" ${chk}><span>${it}</span></label>`;
    });
    html += `</div>`;
  });
  html += `</div>`;
  $("#verifRes").innerHTML = html;

  $$(".verif-cb").forEach((cb) => {
    cb.addEventListener("change", () => {
      const arr = getVerifChecked();
      const id = cb.dataset.id;
      const idx = arr.indexOf(id);
      if (cb.checked && idx === -1) arr.push(id);
      if (!cb.checked && idx !== -1) arr.splice(idx, 1);
      setVerifChecked(arr);
      renderVerificador();
    });
  });
}

$("#btnVerificar").addEventListener("click", renderVerificador);
$("#btnResetVerif").addEventListener("click", () => { setVerifChecked([]); renderVerificador(); });
renderVerificador();

/* ---------- Documentación (checklist) ---------- */
const DOC_KEY = "une157001-docs";
function getDocChecked() { try { return JSON.parse(localStorage.getItem(DOC_KEY) || "[]"); } catch (e) { return []; } }
function setDocChecked(arr) { localStorage.setItem(DOC_KEY, JSON.stringify(arr)); }

function renderChecklist() {
  const checked = getDocChecked();
  $("#checklist").innerHTML = DOC_GRUPOS.map((g) => `
    <div class="grupo">
      <h3>${g.grupo}</h3>
      ${g.items.map((it, i) => {
        const id = `${g.grupo}|${i}`;
        const chk = checked.includes(id) ? "checked" : "";
        return `<label><input type="checkbox" class="doc-cb" data-id="${id}" ${chk}><span>${it}</span></label>`;
      }).join("")}
    </div>
  `).join("");

  $$(".doc-cb").forEach((cb) => {
    cb.addEventListener("change", () => {
      const arr = getDocChecked();
      const id = cb.dataset.id;
      const idx = arr.indexOf(id);
      if (cb.checked && idx === -1) arr.push(id);
      if (!cb.checked && idx !== -1) arr.splice(idx, 1);
      setDocChecked(arr);
    });
  });
}
$("#btnResetChecks").addEventListener("click", () => { setDocChecked([]); renderChecklist(); });
$("#btnImprimir").addEventListener("click", () => window.print());
renderChecklist();

/* ---------- Generador de encabezado del proyecto (4.2) ---------- */
$("#btnGenEnc").addEventListener("click", () => {
  const v = (id) => ($("#" + id).value || "").trim();
  const lines = [];
  lines.push(v("hTitulo") || "TÍTULO DEL PROYECTO");
  if (v("hCodigo")) lines.push(`Código o referencia de identificación: ${v("hCodigo")}`);
  lines.push("");
  if (v("hOrg")) lines.push(`Organismo u organismos a los que se dirige el proyecto: ${v("hOrg")}`);
  if (v("hProm")) lines.push(`Promotor: ${v("hProm")}${v("hPromDni") ? " (DNI/NIF: " + v("hPromDni") + ")" : ""}`);
  if (v("hEmp")) lines.push(`Emplazamiento: ${v("hEmp")}${v("hUtm") ? " — Coordenadas UTM: " + v("hUtm") : ""}`);
  if (v("hEmpOrg")) lines.push(`Organización encargada de elaborar el proyecto: ${v("hEmpOrg")}${v("hCif") ? " (CIF: " + v("hCif") + ")" : ""}`);
  if (v("hDirOrg")) lines.push(`Datos de la organización: ${v("hDirOrg")}`);
  if (v("hProy")) lines.push(`Proyectista: ${v("hProy")}${v("hTit") ? ", " + v("hTit") : ""}${v("hCol") ? " — " + v("hCol") : ""}${v("hProyDni") ? " (DNI/NIF: " + v("hProyDni") + ")" : ""}`);
  if (v("hDomProy")) lines.push(`Domicilio profesional del proyectista: ${v("hDomProy")}`);
  $("#hOut").value = lines.join("\n");
});

$("#btnCopiarEnc").addEventListener("click", async () => {
  try { await navigator.clipboard.writeText($("#hOut").value); $("#btnCopiarEnc").textContent = "Copiado"; setTimeout(() => $("#btnCopiarEnc").textContent = "Copiar", 1500); }
  catch (e) { $("#btnCopiarEnc").textContent = "No se pudo copiar"; }
});

/* ---------- Normativa ---------- */
$("#listaNormas").innerHTML =
  NORMAS.map((n) => `<li><a href="${n.u}" target="_blank" rel="noopener">${n.t}</a></li>`).join("");