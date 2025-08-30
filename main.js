function tellJoke() {
      const randomIndex = Math.floor(Math.random() * jokes.length);
      document.getElementById("joke").innerText = jokes[randomIndex];
       }