document.getElementById('calcForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const operand1 = parseFloat(document.getElementById('operand1').value);
    const operand2 = parseFloat(document.getElementById('operand2').value);
    const operator = document.getElementById('operator').value;

    const query = `
      mutation {
        calculate(operand1: ${operand1}, operand2: ${operand2}, operator: "${operator}") {
          result
        }
      }
    `;

    const response = await fetch('http://localhost:3000/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query })
    });

    const data = await response.json();
    document.getElementById('result').textContent = data.data.calculate.result;
});