function updateTime() {
    const now = new Date();
    const timeElement = document.getElementById("time");
    timeElement.textContent = now.toLocaleTimeString();

    const dateElement = document.getElementById("date");
    dateElement.textContent = now.toLocaleDateString();

    // Para obtener la ubicación actual, puedes usar el API de Geolocalización del navegador.
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const locationElement = document.getElementById("location");
            locationElement.textContent = `Latitud: ${position.coords.latitude.toFixed(2)}, Longitud: ${position.coords.longitude.toFixed(2)}`;
        });
    }
}

updateTime(); // Actualiza la hora, fecha y ubicación al cargar la página.

// Actualiza la hora cada segundo.
setInterval(updateTime, 1000);
