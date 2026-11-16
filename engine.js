/* =========================================================================
   engine.js — Verificador de completitud UNE 157001:2014
   ========================================================================= */

function allVerifItems() {
  return VERIF_BLOQUES.flatMap((b, bi) =>
    b.items.map((it, ii) => ({ id: `${bi}|${ii}`, bloque: b.bloque, item: it }))
  );
}

function verificar(checked) {
  const set = new Set(checked || []);
  const bloques = VERIF_BLOQUES.map((b, bi) => {
    const ids = b.items.map((_, ii) => `${bi}|${ii}`);
    const marc = ids.filter((id) => set.has(id)).length;
    return { bloque: b.bloque, total: b.items.length, marcados: marc,
      pct: b.items.length ? Math.round((marc / b.items.length) * 100) : 0 };
  });
  const total = VERIF_BLOQUES.reduce((a, b) => a + b.items.length, 0);
  const totalMarc = allVerifItems().filter((x) => set.has(x.id)).length;
  const faltantes = allVerifItems().filter((x) => !set.has(x.id)).map((x) => x.bloque + ": " + x.item);
  return { bloques, total, totalMarcados: totalMarc, pctTotal: total ? Math.round((totalMarc / total) * 100) : 0, faltantes };
}