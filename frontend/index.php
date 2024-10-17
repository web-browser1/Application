
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Math Calculation App</title>
</head>
<body>
    <h1>Math Calculation App</h1>
    <form id="calcForm">
        <input type="number" id="operand1" placeholder="Operand 1" required>
        <input type="number" id="operand2" placeholder="Operand 2" required>
        <select id="operator">
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
        </select>
        <button type="submit">Calculate</button>
    </form>
    <p>Result: <span id="result"></span></p>

    <script src="script.js"></script>
</body>
</html>
