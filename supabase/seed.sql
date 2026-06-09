-- ============================================================
-- ERUS Site - Seed Data for Local Development
-- ============================================================

-- ============================================================
-- 1. MEMBERS (active + alumni)
-- ============================================================

-- Professors
INSERT INTO members (name, course, github_username, year_joined, year_left, is_professor, is_active, display_order) VALUES
  ('Prof. Dr. Ricardo Carminati de Mello', 'Engenharia Elétrica', 'rcarminati', 2018, NULL, true, true, 1),
  ('Prof. Dr. André Ferreira', 'Engenharia de Computação', 'aferreira', 2016, NULL, true, true, 2);

-- Active members
INSERT INTO members (name, course, github_username, year_joined, year_left, is_professor, is_active, display_order) VALUES
  ('Pietro Pazini Passos', 'Engenharia de Computação', 'pietropazini', 2023, NULL, false, true, 10),
  ('Lucas Oliveira Santos', 'Engenharia de Computação', 'lucasoliv', 2023, NULL, false, true, 11),
  ('Mariana Costa Silva', 'Engenharia Elétrica', 'maricosta', 2024, NULL, false, true, 12),
  ('Gabriel Souza Nascimento', 'Ciência da Computação', 'gabrielsn', 2024, NULL, false, true, 13),
  ('Ana Beatriz Ferreira Lima', 'Engenharia de Computação', 'anabflima', 2024, NULL, false, true, 14),
  ('Rafael Mendes Barbosa', 'Engenharia Mecânica', 'rafaelmb', 2023, NULL, false, true, 15),
  ('Juliana Rocha Almeida', 'Engenharia Elétrica', 'jurocha', 2025, NULL, false, true, 16),
  ('Thiago Pereira Cardoso', 'Ciência da Computação', 'thiagopcard', 2025, NULL, false, true, 17),
  ('Isabela Martins Vieira', 'Sistemas de Informação', 'isamvieira', 2024, NULL, false, true, 18),
  ('Felipe Augusto Ribeiro', 'Engenharia de Computação', 'felipeaugr', 2025, NULL, false, true, 19),
  ('Camila Duarte Fonseca', 'Engenharia Elétrica', 'camiladf', 2024, NULL, false, true, 20);

-- Alumni
INSERT INTO members (name, course, github_username, year_joined, year_left, is_professor, is_active) VALUES
  ('Carlos Eduardo Pimentel', 'Engenharia de Computação', 'cpimentel', 2010, 2013, false, false),
  ('Fernanda Gonçalves Dias', 'Engenharia Elétrica', 'fergdias', 2010, 2013, false, false),
  ('Bruno Tavares Lopes', 'Engenharia de Computação', 'btlopes', 2011, 2014, false, false),
  ('Aline Moreira Castro', 'Engenharia Elétrica', 'amoreirac', 2011, 2014, false, false),
  ('Diego Ramos Figueiredo', 'Engenharia Mecânica', 'diegorf', 2012, 2015, false, false),
  ('Patrícia Sousa Andrade', 'Engenharia de Computação', 'patandrade', 2012, 2015, false, false),
  ('Marcos Vinícius Teixeira', 'Ciência da Computação', 'mvteixeira', 2013, 2016, false, false),
  ('Renata Bastos Cunha', 'Engenharia Elétrica', 'renatacunha', 2013, 2016, false, false),
  ('Gustavo Henrique Batista', 'Engenharia de Computação', 'ghbatista', 2014, 2017, false, false),
  ('Letícia Campos de Oliveira', 'Engenharia Elétrica', 'leticampos', 2014, 2017, false, false),
  ('Rodrigo Freitas Monteiro', 'Engenharia Mecânica', 'rodrigofm', 2014, 2017, false, false),
  ('Amanda Pires Rezende', 'Engenharia de Computação', 'amandapr', 2015, 2018, false, false),
  ('Vinícius Alves Correia', 'Ciência da Computação', 'vinialves', 2015, 2018, false, false),
  ('Beatriz Nunes Machado', 'Engenharia de Computação', 'bianmachado', 2016, 2019, false, false),
  ('Eduardo Lima Pereira', 'Engenharia Elétrica', 'dulimaper', 2016, 2019, false, false),
  ('Larissa Azevedo Gomes', 'Sistemas de Informação', 'larigomes', 2016, 2019, false, false),
  ('Henrique Martins da Costa', 'Engenharia de Computação', 'henrqmc', 2017, 2020, false, false),
  ('Carolina Barros Duarte', 'Engenharia Elétrica', 'carolbd', 2017, 2020, false, false),
  ('Pedro Henrique Sampaio', 'Engenharia de Computação', 'phsampaio', 2018, 2021, false, false),
  ('Natália Ferraz dos Santos', 'Ciência da Computação', 'natferraz', 2018, 2021, false, false),
  ('André Luís Nogueira', 'Engenharia Mecânica', 'alnogueir', 2018, 2021, false, false),
  ('Débora Carvalho Rangel', 'Engenharia de Computação', 'deboracr', 2019, 2022, false, false),
  ('Mateus Faria de Araújo', 'Engenharia Elétrica', 'mateusfa', 2019, 2022, false, false),
  ('Bruna Linhares Medeiros', 'Sistemas de Informação', 'brunalm', 2019, 2022, false, false),
  ('João Victor Coelho Prado', 'Engenharia de Computação', 'jvcoelhop', 2020, 2023, false, false),
  ('Yasmin Souza Brito', 'Ciência da Computação', 'yasminbrito', 2020, 2023, false, false),
  ('Samuel Guimarães Rios', 'Engenharia de Computação', 'samrios', 2021, 2024, false, false),
  ('Luiza Helena Monteiro', 'Engenharia Elétrica', 'luizahm', 2021, 2024, false, false),
  ('Caio Bernardo Vasconcelos', 'Engenharia Mecânica', 'caiobvasc', 2021, 2024, false, false),
  ('Daniela Fonseca Reis', 'Engenharia de Computação', 'danifr', 2022, 2025, false, false),
  ('Igor Nascimento Tavares', 'Ciência da Computação', 'igortav', 2022, 2025, false, false);

-- ============================================================
-- 2. PROJECTS
-- ============================================================

INSERT INTO projects (name, slug, description, long_description, emoji, tags, type, is_active, display_order) VALUES
  (
    'Seguidor de Linhas',
    'seguidor-de-linhas',
    'Robôs autônomos que percorrem trajetos demarcados por linhas no menor tempo possível.',
    'O projeto de Seguidor de Linhas desenvolve robôs compactos e velozes capazes de percorrer circuitos demarcados por linhas pretas sobre fundo branco. Utilizando sensores infravermelhos e algoritmos de controle PID, os robôs tomam decisões em tempo real para manter-se na trajetória com a maior velocidade possível. A equipe participa de diversas competições regionais e nacionais, incluindo a CBR e a LARC.',
    '🏎️',
    ARRAY['PID', 'sensores IR', 'Arduino', 'velocidade', 'controle'],
    'competitivo',
    true, 1
  ),
  (
    'VSSS',
    'vsss',
    'Futebol de robôs em escala reduzida com visão computacional e estratégia autônoma.',
    'O Very Small Size Soccer (VSSS) é uma categoria de futebol de robôs onde equipes de três robôs jogam de forma totalmente autônoma em um campo compacto. O sistema utiliza uma câmera aérea para visão computacional, processamento de imagem em tempo real e algoritmos de planejamento de trajetória e estratégia de jogo. O projeto integra eletrônica, mecânica e software em um sistema multi-agente complexo.',
    '⚽',
    ARRAY['visão computacional', 'OpenCV', 'estratégia', 'multi-agente', 'ROS'],
    'pesquisa',
    true, 2
  ),
  (
    'Simulação 2D',
    'simulacao-2d',
    'Simulação de futebol de robôs em ambiente 2D com foco em inteligência artificial.',
    'O projeto de Simulação 2D utiliza o simulador RoboCup 2D Soccer Simulation para desenvolver estratégias de jogo baseadas em inteligência artificial. Os agentes virtuais competem em partidas simuladas onde devem cooperar, comunicar-se e tomar decisões em tempo real. É uma excelente porta de entrada para o mundo da IA aplicada à robótica, sem necessidade de hardware físico.',
    '🖥️',
    ARRAY['inteligência artificial', 'simulação', 'RoboCup', 'C++', 'estratégia'],
    'competitivo',
    true, 3
  ),
  (
    'Sumô',
    'sumo',
    'Robôs de combate que devem empurrar o oponente para fora da arena circular.',
    'O projeto de Sumô desenvolve robôs autônomos projetados para competições de sumô robótico. Os robôs devem detectar o oponente e empurrá-lo para fora de uma arena circular (dohyō), utilizando sensores de proximidade, motores de alta potência e estratégias de ataque e defesa. O projeto abrange categorias de diferentes pesos e dimensões, desafiando a equipe em projetos mecânicos e eletrônicos variados.',
    '🤖',
    ARRAY['combate', 'sensores ultrassônicos', 'motores DC', 'estratégia', 'CAD'],
    'competitivo',
    true, 4
  ),
  (
    'OPEN',
    'open',
    'Categoria aberta para projetos inovadores e demonstrações de robótica criativa.',
    'A categoria OPEN permite que a equipe explore projetos de robótica sem as restrições das categorias tradicionais. É o espaço para inovação, onde são desenvolvidos protótipos que combinam criatividade e tecnologia. Os projetos OPEN frequentemente resultam em demonstrações interativas e soluções que abordam problemas reais, sendo apresentados em feiras e competições.',
    '💡',
    ARRAY['inovação', 'prototipagem', 'criatividade', 'IoT', 'impressão 3D'],
    'competitivo',
    true, 5
  ),
  (
    'Duckietown',
    'duckietown',
    'Plataforma de pesquisa em veículos autônomos em miniatura com foco em aprendizado de máquina.',
    'O projeto Duckietown utiliza uma plataforma padronizada de veículos autônomos em miniatura para pesquisa em navegação autônoma, percepção visual e aprendizado de máquina. Os Duckiebots navegam por uma cidade em miniatura completa com faixas, sinalizações e interseções. O projeto é parte de uma rede internacional de universidades e promove pesquisa de ponta em direção autônoma acessível.',
    '🦆',
    ARRAY['veículos autônomos', 'ROS', 'machine learning', 'Raspberry Pi', 'visão computacional'],
    'pesquisa',
    true, 6
  ),
  (
    'PDR',
    'pdr',
    'Projeto de pesquisa e desenvolvimento em robótica aplicada a problemas reais.',
    'O Projeto de Desenvolvimento em Robótica (PDR) é o braço de pesquisa da ERUS voltado para a aplicação de robótica em problemas do mundo real. Envolve projetos de pesquisa em parceria com laboratórios e departamentos da UFES, abordando temas como robótica assistiva, automação, processamento de sinais e sistemas embarcados. Os resultados frequentemente são publicados em conferências e periódicos científicos.',
    '🔬',
    ARRAY['pesquisa', 'sistemas embarcados', 'automação', 'publicações', 'robótica assistiva'],
    'pesquisa',
    true, 7
  );

-- ============================================================
-- 3. ACHIEVEMENTS
-- ============================================================

INSERT INTO achievements (title, description, competition, position, year, category) VALUES
  ('1º Lugar Seguidor de Linhas', 'Conquista do primeiro lugar na categoria Seguidor de Linhas na etapa estadual da OBR.', 'OBR Estadual', '1º Lugar', 2014, 'Seguidor de Linhas'),
  ('3º Lugar VSSS', 'Terceiro lugar na categoria Very Small Size Soccer na Competição Brasileira de Robótica.', 'CBR', '3º Lugar', 2015, 'VSSS'),
  ('2º Lugar Sumô Autônomo 3kg', 'Vice-campeonato na categoria Sumô Autônomo 3kg na LARC/CBR.', 'LARC/CBR', '2º Lugar', 2016, 'Sumô'),
  ('1º Lugar Simulação 2D', 'Campeão na categoria Simulação 2D da Liga de Futebol de Robôs na CBR.', 'CBR', '1º Lugar', 2017, 'Simulação 2D'),
  ('Melhor Artigo Técnico', 'Prêmio de melhor artigo técnico apresentado no Simpósio de Robótica da LARC.', 'LARC', 'Melhor Artigo', 2017, 'Pesquisa'),
  ('1º Lugar Seguidor de Linhas', 'Primeiro lugar na categoria Seguidor de Linhas na Competição Brasileira de Robótica.', 'CBR', '1º Lugar', 2018, 'Seguidor de Linhas'),
  ('2º Lugar VSSS', 'Vice-campeonato na categoria VSSS na Latin American Robotics Competition.', 'LARC', '2º Lugar', 2019, 'VSSS'),
  ('3º Lugar Sumô Autônomo 1kg', 'Terceiro lugar na categoria Sumô Autônomo 1kg na Winter Challenge.', 'Winter Challenge', '3º Lugar', 2019, 'Sumô'),
  ('1º Lugar OPEN', 'Primeiro lugar na categoria OPEN com projeto de robô assistivo na CBR.', 'CBR', '1º Lugar', 2021, 'OPEN'),
  ('2º Lugar Simulação 2D', 'Vice-campeonato na Simulação 2D na Competição Brasileira de Robótica.', 'CBR', '2º Lugar', 2022, 'Simulação 2D'),
  ('1º Lugar VSSS', 'Campeão brasileiro na categoria Very Small Size Soccer na LARC/CBR.', 'LARC/CBR', '1º Lugar', 2022, 'VSSS'),
  ('3º Lugar Seguidor de Linhas', 'Terceiro lugar na categoria Seguidor de Linhas na Iron Cup.', 'Iron Cup', '3º Lugar', 2023, 'Seguidor de Linhas'),
  ('1º Lugar Sumô Autônomo 3kg', 'Campeão na categoria Sumô Autônomo 3kg na Competição Brasileira de Robótica.', 'CBR', '1º Lugar', 2023, 'Sumô'),
  ('2º Lugar Duckietown', 'Vice-campeonato no desafio Duckietown na LARC, com destaque em navegação autônoma.', 'LARC', '2º Lugar', 2024, 'Duckietown'),
  ('1º Lugar VSSS', 'Bicampeonato na categoria VSSS na Latin American Robotics Competition.', 'LARC', '1º Lugar', 2024, 'VSSS');

-- ============================================================
-- 4. REPORTS (media coverage)
-- ============================================================

INSERT INTO reports (title, source, url, year) VALUES
  ('Equipe de robótica da UFES conquista prêmio em competição nacional', 'ESTV 1ª Edição', '#', 2013),
  ('Alunos da UFES desenvolvem robôs seguidores de linha para competição', 'TV UFES', '#', 2014),
  ('Robótica atrai estudantes de engenharia na UFES', 'A Tribuna', '#', 2015),
  ('ERUS representa o Espírito Santo na Competição Brasileira de Robótica', 'G1 ES', '#', 2016),
  ('Estudantes capixabas se destacam em torneio de robótica em São Paulo', 'ESTV 2ª Edição', '#', 2017),
  ('Equipe de robótica da UFES recebe apoio para participar de competição latino-americana', 'TV UFES', '#', 2017),
  ('Projeto de robótica da UFES leva tecnologia a escolas públicas de Vitória', 'A Gazeta', '#', 2018),
  ('UFES sedia etapa regional da Olimpíada Brasileira de Robótica', 'G1 ES', '#', 2019),
  ('Robótica na pandemia: equipe da UFES adapta projetos para o formato remoto', 'A Tribuna Online', '#', 2020),
  ('ERUS promove torneio universitário de robótica no campus de Goiabeiras', 'TV UFES', '#', 2021),
  ('Equipe capixaba conquista pódio na LARC com robôs de futebol', 'ESTV 1ª Edição', '#', 2022),
  ('Projeto Duckietown da UFES pesquisa veículos autônomos em miniatura', 'A Gazeta', '#', 2023),
  ('Estudantes da UFES utilizam inteligência artificial em robôs de competição', 'G1 ES', '#', 2023),
  ('ERUS celebra mais de 10 anos de história na robótica capixaba', 'A Tribuna', '#', 2024),
  ('Equipe de robótica da UFES abre inscrições para novos membros em 2025', 'TV UFES', '#', 2025);

-- ============================================================
-- 5. COURSES
-- ============================================================

INSERT INTO courses (name, level, description, is_available, display_order) VALUES
  ('Arduino Básico', 'iniciante', 'Introdução à plataforma Arduino, eletrônica básica, leitura de sensores e controle de atuadores simples. Ideal para quem nunca teve contato com programação embarcada.', true, 1),
  ('Arduino Intermediário', 'intermediário', 'Comunicação serial, uso de bibliotecas externas, controle de motores DC e servos, e integração com displays e módulos Bluetooth.', true, 2),
  ('Arduino Avançado', 'avançado', 'Interrupções, timers, comunicação I2C/SPI, otimização de código para sistemas embarcados e desenvolvimento de PCBs customizadas.', true, 3),
  ('Arduino para Competição', 'especialização', 'Técnicas específicas para robôs de competição: controle PID, leitura de arrays de sensores, estratégias de velocidade e confiabilidade em pista.', true, 4),
  ('Modelagem 3D', 'iniciante', 'Fundamentos de modelagem 3D com SolidWorks e Fusion 360 voltados para projetos de robótica. Criação de peças, montagens e preparação para impressão 3D.', true, 5),
  ('Design de Circuitos', 'intermediário', 'Projeto de circuitos eletrônicos com KiCad: criação de esquemáticos, layout de PCBs, geração de Gerbers e boas práticas de design para fabricação.', true, 6),
  ('Introdução a ROS', 'intermediário', 'Fundamentos do Robot Operating System (ROS): nós, tópicos, serviços, pacotes e integração com sensores e atuadores em robôs reais.', true, 7),
  ('Visão Computacional', 'avançado', 'Processamento de imagem com OpenCV e Python: detecção de cores, formas, calibração de câmera, rastreamento de objetos e aplicações em robótica.', true, 8),
  ('Programação em Python para Robótica', 'iniciante', 'Curso introdutório de Python com foco em aplicações de robótica: manipulação de dados, comunicação serial, automação de tarefas e scripts de controle.', true, 9),
  ('Inteligência Artificial Aplicada', 'avançado', 'Conceitos de aprendizado de máquina e redes neurais aplicados à robótica: classificação de imagens, reinforcement learning e tomada de decisão autônoma.', true, 10),
  ('Eletrônica para Robótica', 'iniciante', 'Fundamentos de eletrônica analógica e digital: resistores, capacitores, transistores, portas lógicas e circuitos básicos para alimentação e controle de robôs.', true, 11),
  ('Controle de Sistemas', 'avançado', 'Teoria de controle aplicada: modelagem de sistemas, controladores PID, resposta em frequência e implementação em microcontroladores.', true, 12);

-- ============================================================
-- 6. BLOG POSTS (sample)
-- ============================================================

INSERT INTO posts (title, slug, content, excerpt, author_name, tags, category, is_published, published_at) VALUES
  (
    'ERUS conquista o bicampeonato na VSSS',
    'erus-conquista-bicampeonato-vsss',
    E'# ERUS conquista o bicampeonato na VSSS\n\nA equipe ERUS conquistou pela segunda vez consecutiva o primeiro lugar na categoria **Very Small Size Soccer (VSSS)** da Latin American Robotics Competition (LARC) 2024.\n\n## A competição\n\nA LARC é a principal competição de robótica da América Latina, reunindo equipes de universidades de todo o continente. Na categoria VSSS, três robôs autônomos jogam futebol em um campo compacto, utilizando visão computacional e estratégias de jogo desenvolvidas pela equipe.\n\n## Destaques técnicos\n\n- Sistema de visão computacional com OpenCV otimizado para baixa latência\n- Algoritmo de planejamento de trajetória com desvio de obstáculos\n- Estratégias de jogo adaptativas baseadas no comportamento do oponente\n- Novo design mecânico dos robôs com melhor tração\n\n## Agradecimentos\n\nAgradecemos a todos os membros que trabalharam incansavelmente na preparação para a competição, aos professores orientadores e à UFES pelo apoio institucional.\n\nVeja mais sobre o projeto [VSSS](/projetos/vsss).',
    'A equipe ERUS conquistou o bicampeonato na categoria VSSS da LARC 2024, consolidando sua posição como referência na categoria.',
    'Pietro Pazini Passos',
    ARRAY['VSSS', 'LARC', 'competição', 'robótica'],
    'competições',
    true,
    '2024-11-15T10:00:00Z'
  ),
  (
    'Processo seletivo 2025.1 — Venha fazer parte da ERUS!',
    'processo-seletivo-2025-1',
    E'# Processo Seletivo 2025.1\n\nEstão abertas as inscrições para o processo seletivo da ERUS para o primeiro semestre de 2025!\n\n## Quem pode participar?\n\nTodos os estudantes regularmente matriculados em qualquer curso da UFES. Não é necessário ter experiência prévia em robótica — nós ensinamos tudo!\n\n## Como funciona?\n\n1. **Inscrição**: Preencha o formulário disponível em nossas redes sociais\n2. **Entrevista**: Uma conversa informal para conhecermos seus interesses\n3. **Período de treinamento**: 4 semanas de capacitação nas áreas da equipe\n4. **Integração**: Alocação em um dos projetos da equipe\n\n## Áreas de atuação\n\n- **Eletrônica**: Circuitos, sensores, PCBs\n- **Programação**: Software embarcado, visão computacional, IA\n- **Mecânica**: Modelagem 3D, impressão 3D, montagem\n- **Gestão**: Marketing, financeiro, organização\n\n## Datas importantes\n\n- Inscrições: 10/03 a 24/03\n- Entrevistas: 25/03 a 28/03\n- Início do treinamento: 31/03\n\nSiga [@erus.ufes](https://instagram.com/erus.ufes) no Instagram para mais informações!',
    'Inscrições abertas para o processo seletivo da ERUS 2025.1. Venha fazer parte da equipe de robótica da UFES!',
    'Lucas Oliveira Santos',
    ARRAY['processo seletivo', 'recrutamento', '2025'],
    'equipe',
    true,
    '2025-03-01T08:00:00Z'
  ),
  (
    'Introdução ao controle PID para robôs seguidores de linha',
    'introducao-controle-pid',
    E'# Introdução ao Controle PID para Seguidores de Linha\n\nNeste tutorial, vamos explorar como implementar um controlador PID para um robô seguidor de linha utilizando Arduino.\n\n## O que é PID?\n\nPID é um acrônimo para **Proporcional, Integral e Derivativo**. É um mecanismo de controle amplamente utilizado em sistemas industriais e robótica.\n\n### Componentes\n\n- **P (Proporcional)**: Correção proporcional ao erro atual\n- **I (Integral)**: Acumula erros passados para eliminar viés\n- **D (Derivativo)**: Prediz erros futuros baseado na taxa de mudança\n\n## Implementação básica\n\n```cpp\nfloat Kp = 1.0, Ki = 0.05, Kd = 0.5;\nfloat error, lastError = 0, integral = 0;\n\nvoid loop() {\n  error = readSensors();\n  integral += error;\n  float derivative = error - lastError;\n  \n  float output = Kp * error + Ki * integral + Kd * derivative;\n  \n  setMotors(baseSpeed + output, baseSpeed - output);\n  lastError = error;\n}\n```\n\n## Ajustando os parâmetros\n\nO ajuste fino dos parâmetros Kp, Ki e Kd é crucial para um bom desempenho. Recomendamos começar pelo método de Ziegler-Nichols.\n\nEm um próximo post, abordaremos técnicas avançadas de tuning para competições.',
    'Aprenda os fundamentos do controle PID aplicado a robôs seguidores de linha com Arduino.',
    'Rafael Mendes Barbosa',
    ARRAY['tutorial', 'PID', 'Arduino', 'seguidor de linhas'],
    'tutorial',
    true,
    '2025-01-20T14:00:00Z'
  ),
  (
    'Retrospectiva ERUS 2024',
    'retrospectiva-erus-2024',
    E'# Retrospectiva ERUS 2024\n\nUm resumo dos principais acontecimentos e conquistas da ERUS ao longo de 2024.\n\n## Competições\n\n- **LARC 2024**: 1º Lugar VSSS, 2º Lugar Duckietown\n- **Iron Cup**: Participação em Seguidor de Linhas e Sumô\n- **CBR Regional**: Classificação para a etapa nacional\n\n## Projetos\n\nEm 2024, expandimos nossas atividades com o projeto **Duckietown**, que alcançou resultados expressivos já em sua primeira participação competitiva. O projeto PDR também publicou dois artigos em conferências nacionais.\n\n## Equipe\n\nRecebemos 8 novos membros pelo processo seletivo 2024.1, totalizando 13 membros ativos. Também realizamos parcerias com o LCAD e o LabTel da UFES.\n\n## O que vem pela frente em 2025\n\n- Preparação para a LARC 2025\n- Novo projeto de educacional com escolas da rede pública\n- Expansão do laboratório com novos equipamentos\n\nObrigado a todos que fizeram parte deste ano incrível!',
    'Relembre os principais momentos e conquistas da ERUS durante o ano de 2024.',
    'Ana Beatriz Ferreira Lima',
    ARRAY['retrospectiva', '2024', 'equipe'],
    'equipe',
    true,
    '2024-12-20T16:00:00Z'
  ),
  (
    'Workshop de ROS2 na UFES',
    'workshop-ros2-ufes',
    E'# Workshop de ROS2 na UFES\n\nA ERUS está organizando um workshop introdutório sobre ROS2 (Robot Operating System 2) aberto para toda a comunidade acadêmica da UFES.\n\nDetalhes serão divulgados em breve nas nossas redes sociais.',
    'Workshop introdutório de ROS2 organizado pela ERUS, aberto para toda a UFES.',
    'Thiago Pereira Cardoso',
    ARRAY['ROS', 'workshop', 'evento'],
    'eventos',
    false,
    NULL
  );

-- ============================================================
-- 7. ADMIN USER (for local testing)
-- Email: admin@erus.ufes.br / Password: admin123
-- Created via Supabase Auth Admin API after db reset.
-- Run: npx supabase auth create-user --email admin@erus.ufes.br --password admin123 --email-confirm
-- ============================================================
