 
        // Crear animación de corazones flotantes
        function createHeart() {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.innerHTML = '💛';
            
            // Alternar entre corazones amarillos y naranjas
            if (Math.random() > 0.5) {
                heart.innerHTML = '🧡';
            }
            
            // Posición aleatoria horizontal
            heart.style.left = Math.random() * 100 + '%';
            
            // Velocidad aleatoria
            heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
            
            document.getElementById('heartsContainer').appendChild(heart);
            
            // Remover el corazón después de la animación
            setTimeout(() => {
                heart.remove();
            }, 7000);
        }

        // Crear corazones cada cierto tiempo
        setInterval(createHeart, 800);

        // Crear algunos corazones iniciales
        for (let i = 0; i < 5; i++) {
            setTimeout(createHeart, i * 200);
        }

        // Efecto parallax suave en scroll
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const hearts = document.querySelectorAll('.heart');
            
            hearts.forEach((heart, index) => {
                const speed = 0.5 + (index % 3) * 0.2;
                heart.style.transform = `translateY(${scrolled * speed}px)`;
            });
        });
