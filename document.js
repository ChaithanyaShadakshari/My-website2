document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('healthForm');
    const summary = document.getElementById('summary');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // Get input values
        const heartRate = document.getElementById('heartRate').value;
        const bloodPressure = document.getElementById('bloodPressure').value;
        const temperature = document.getElementById('temperature').value;

        // Create summary items
        const heartRateItem = document.createElement('li');
        heartRateItem.textContent = `Heart Rate: ${heartRate} bpm`;

        const bloodPressureItem = document.createElement('li');
        bloodPressureItem.textContent = `Blood Pressure: ${bloodPressure}`;

        const temperatureItem = document.createElement('li');
        temperatureItem.textContent = `Body Temperature: ${temperature} °C`;

        // Clear the current summary and add new data
        summary.innerHTML = '';
        summary.appendChild(heartRateItem);
        summary.appendChild(bloodPressureItem);
        summary.appendChild(temperatureItem);

        // Optionally: Reset the form after submission
        form.reset();
    });
});
