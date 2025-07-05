<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Importando o Tailwind CSS para estilização -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Importando a fonte Inter do Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <style>
        /* Estilo base para o corpo do documento */
        body {
            font-family: 'Inter', sans-serif;
            /* O GitHub renderiza com um fundo transparente, então definimos a cor no container principal */
        }
    </style>
</head>
<body>
    <!-- 
      INSTRUÇÕES:
      1. Crie um novo repositório no GitHub com o MESMO NOME do seu nome de usuário.
         Exemplo: se seu usuário é "seu-nome", o repositório deve se chamar "seu-nome".
      2. Crie um arquivo chamado `README.md` dentro desse repositório.
      3. Copie e cole TODO este código dentro do arquivo `README.md`.
      4. Personalize as seções abaixo com suas informações (links, imagens, textos, etc.).
      5. Salve o arquivo e veja a mágica acontecer no seu perfil!
    -->

    <!-- Container Principal -->
    <div class="w-full max-w-4xl mx-auto p-4 md:p-8 bg-gray-900 rounded-2xl text-white shadow-2xl">

        <!-- Seção do Cabeçalho -->
        <header class="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <!-- Sua Foto de Perfil -->
            <img 
                src="https://placehold.co/150x150/1a202c/ffffff?text=Sua+Foto" 
                alt="Foto de Perfil" 
                class="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-teal-400 object-cover shadow-lg"
                onerror="this.onerror=null;this.src='https://placehold.co/150x150/1a202c/ffffff?text=Erro!';"
            >
            <div class="text-center md:text-left">
                <!-- Seu Nome -->
                <h1 class="text-4xl md:text-5xl font-bold text-teal-300">Seu Nome</h1>
                <!-- Seu Título/Cargo -->
                <p class="text-xl md:text-2xl mt-2 text-gray-300">Jovem Desenvolvedor & Criador</p>
            </div>
        </header>

        <!-- Divisor -->
        <hr class="my-8 border-gray-700">

        <!-- Seção Sobre Mim -->
        <section>
            <h2 class="text-3xl font-semibold mb-4 text-teal-300 border-b-2 border-teal-400 pb-2">👋 Sobre Mim</h2>
            <p class="text-gray-300 leading-relaxed">
                Sou um garoto de 13 anos, diagnosticado com <strong>TEA (Transtorno do Espectro Autista)</strong> e <strong>TDAH</strong>. 
                Meu maior objetivo é usar este espaço para compartilhar minhas experiências e os desafios que enfrento, 
                na esperança de que minha jornada possa ajudar e inspirar outras pessoas. Acredito que a tecnologia 
                é uma ferramenta poderosa para criar, conectar e superar barreiras.
            </p>
        </section>

        <!-- Seção de Tecnologias -->
        <section class="mt-8">
            <h2 class="text-3xl font-semibold mb-4 text-teal-300 border-b-2 border-teal-400 pb-2">🚀 Tecnologias e Ferramentas</h2>
            <div class="flex flex-wrap items-center gap-4">
                <!-- Adicione ou remova ícones conforme suas habilidades. Você pode encontrar mais em: https://devicon.dev/ -->
                <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
                <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
                <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
                <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python">
                <img src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white" alt="Git">
            </div>
        </section>
        
        <!-- Seção de Hobbies e Interesses -->
        <section class="mt-8">
            <h2 class="text-3xl font-semibold mb-4 text-teal-300 border-b-2 border-teal-400 pb-2">🎮 Hobbies e Interesses</h2>
            <div class="flex flex-wrap items-center gap-4">
                <img src="https://img.shields.io/badge/Pok%C3%A9mon-FFCB05?style=for-the-badge&logo=pokemon&logoColor=2a75bb" alt="Pokémon">
                <img src="https://img.shields.io/badge/Super%20Mario-E62314?style=for-the-badge&logo=nintendo&logoColor=white" alt="Super Mario">
                <img src="https://img.shields.io/badge/Zelda-0D809C?style=for-the-badge&logo=zelda&logoColor=FAD400" alt="The Legend of Zelda">
                <img src="https://img.shields.io/badge/Nintendo%20Switch-E60012?style=for-the-badge&logo=nintendoswitch&logoColor=white" alt="Nintendo Switch">
            </div>
        </section>

        <!-- Seção de Contato -->
        <footer class="mt-12 text-center">
            <h2 class="text-3xl font-semibold mb-4 text-teal-300">📬 Entre em Contato</h2>
            <div class="flex justify-center items-center gap-6">
                <!-- Link para o WhatsApp. O número está formatado para o link direto. -->
                <a href="https://wa.me/5522992217505" target="_blank" class="transition-transform hover:scale-110">
                    <img src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" alt="WhatsApp">
                </a>
            </div>
        </footer>

    </div>
</body>
</html>

