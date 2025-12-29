        // Menu mobile
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const navMenu = document.getElementById('nav-menu');
        
        if (mobileMenuBtn) {
            mobileMenuBtn.addEventListener('click', () => {
                navMenu.classList.toggle('active');
                mobileMenuBtn.innerHTML = navMenu.classList.contains('active') ? '✕' : '☰';
            });
        }
        
        // Fechar menu ao clicar num link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                mobileMenuBtn.innerHTML = '☰';
            });
        });
        
        // Troca de tema
        const themeButtons = document.querySelectorAll('.theme-btn');
        const body = document.body;
        
        themeButtons.forEach(button => {
            button.addEventListener('click', () => {
                const theme = button.getAttribute('data-theme');
                
                // Remover todas as classes de tema
                body.classList.remove('theme-blue', 'theme-green', 'theme-purple', 'theme-red', 'theme-dark');
                
                // Adicionar nova classe de tema
                body.classList.add(`theme-${theme}`);
                
                // Atualizar botões ativos
                themeButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                
                // Salvar preferência no localStorage
                localStorage.setItem('portfolio-theme', theme);
            });
        });
        
        // Carregar tema salvo
        const savedTheme = localStorage.getItem('portfolio-theme') || 'blue';
        body.classList.add(`theme-${savedTheme}`);
        document.querySelector(`.theme-${savedTheme}-btn`)?.classList.add('active');
        
        // Form submission
        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                
                // Simular envio
                const submitBtn = contactForm.querySelector('button[type="submit"]');
                const originalText = submitBtn.innerHTML;
                
                submitBtn.innerHTML = 'Enviando...';
                submitBtn.disabled = true;
                
                setTimeout(() => {
                    alert('Mensagem enviada com sucesso! Entrarei em contacto brevemente.');
                    contactForm.reset();
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                }, 1500);
            });
        }
        
        // Scroll animation
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in');
                }
            });
        }, observerOptions);
        
        // Observar elementos para animação
        document.querySelectorAll('.section').forEach(section => {
            observer.observe(section);
        });
        
        // Adicionar efeito de digitação no hero
        const heroSubtitle = document.querySelector('.hero-subtitle');
        if (heroSubtitle) {
            const originalText = heroSubtitle.textContent;
            heroSubtitle.textContent = '';
            
            let i = 0;
            const typeWriter = () => {
                if (i < originalText.length) {
                    heroSubtitle.textContent += originalText.charAt(i);
                    i++;
                    setTimeout(typeWriter, 20);
                }
            };
            
            setTimeout(typeWriter, 1000);
        }