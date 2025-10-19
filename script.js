function showTime() {
      const now = new Date();

      const date = now.toLocaleDateString('en-GB', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });

      const time = now.toLocaleTimeString('en-GB', {
        hour12: false,  // use 24-hour format
      });

      const milliseconds = now.getMilliseconds().toString().padStart(3, '0');

      document.getElementById("currentTime").textContent =
        `${date}, ${time}.${milliseconds}`;
    }

    setInterval(showTime, 100); // updates every 100ms