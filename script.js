//your JS code here. If required.
const output = document.getElementById("output");


const loadingRow = document.createElement("tr");
loadingRow.id = "loading-row";
loadingRow.innerHTML = `<td colspan="2" class="text-center">Loading...</td>`;
output.appendChild(loadingRow);

function createPromise(id) {
  return new Promise((resolve) => {
    const delay = Math.random() * 2 + 1; // 1 ≤ delay < 3 seconds
    setTimeout(() => {
      resolve({ id, time: delay });
    }, delay * 1000);
  });
}


const promises = [createPromise(1), createPromise(2), createPromise(3)];


const startTime = performance.now();


Promise.all(promises).then((results) => {
  
  const loading = document.getElementById("loading-row");
  if (loading) loading.remove();

  
  results.forEach((result) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>Promise ${result.id}</td>
      <td>${result.time.toFixed(3)}</td>
    `;
    output.appendChild(tr);
  });

  
  const endTime = performance.now();
  const totalTime = (endTime - startTime) / 1000;

  const trTotal = document.createElement("tr");
  trTotal.innerHTML = `
    <td>Total</td>
    <td>${totalTime.toFixed(3)}</td>
  `;
  output.appendChild(trTotal);
});
