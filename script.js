const numberTypeSelect = document.getElementById('numberType');
const calculateButton = document.getElementById('calculate');
const loadingElement = document.getElementById('loading');
const errorElement = document.getElementById('error');
const numberListElement = document.getElementById('numberList');
const averageElement = document.getElementById('average');

function calculateAverage() {
    const numberType = numberTypeSelect.value;
    const apiUrl = http://localhost:9876/numbers/e; // Replace with your microservice endpoint

        loadingElement.style.display = 'block';
    errorElement.style.display = 'none';
    numberListElement.innerHTML = '';
    averageElement.textContent = '';

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            loadingElement.style.display = 'none';

            const numbers = data.numbers;
            const average = data.avg;

            numberListElement.innerHTML = numbers.map(number => <li>${number}</li>).join('');
            averageElement.textContent = average;
        })
        .catch(error => {
            loadingElement.style.display = 'none';
            errorElement.textContent = 'An error occurred';
            console.error(error);
        });
}

calculateButton.addEventListener('click', calculateAverage);
