dscc.subscribeToData(draw, { transform: dscc.objectTransform });

function draw(data) {
  const row = data.tables.DEFAULT[0];

  const current = row.metric;
  const previous = row.metric_comparison;

  const diff = current - previous;
  const pct = previous === 0 ? 0 : diff / previous;

  const isPositive = diff >= 0;

  document.getElementById("value").textContent = current.toLocaleString();
  document.getElementById("yoy").textContent =
    (isPositive ? "▲ " : "▼ ") + (pct * 100).toFixed(1) + "% YoY";

  document.body.style.backgroundColor =
    isPositive ? "#E6F4EA" : "#FCE8E6";
}