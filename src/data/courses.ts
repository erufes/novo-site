export type CourseLevel =
  | 'iniciante'
  | 'intermediário'
  | 'avançado'
  | 'especialização';

export type Course = {
  name: string;
  level: CourseLevel;
  description: string;
};

export const courses: Course[] = [
  {
    name: 'Arduino Básico',
    level: 'iniciante',
    description:
      'Introdução à plataforma Arduino, eletrônica básica, leitura de sensores e controle de atuadores simples. Ideal para quem nunca teve contato com programação embarcada.',
  },
  {
    name: 'Arduino Intermediário',
    level: 'intermediário',
    description:
      'Comunicação serial, uso de bibliotecas externas, controle de motores DC e servos, e integração com displays e módulos Bluetooth.',
  },
  {
    name: 'Arduino Avançado',
    level: 'avançado',
    description:
      'Interrupções, timers, comunicação I2C/SPI, otimização de código para sistemas embarcados e desenvolvimento de PCBs customizadas.',
  },
  {
    name: 'Arduino para Competição',
    level: 'especialização',
    description:
      'Técnicas específicas para robôs de competição: controle PID, leitura de arrays de sensores, estratégias de velocidade e confiabilidade em pista.',
  },
  {
    name: 'Modelagem 3D',
    level: 'iniciante',
    description:
      'Fundamentos de modelagem 3D com SolidWorks e Fusion 360 voltados para projetos de robótica. Criação de peças, montagens e preparação para impressão 3D.',
  },
  {
    name: 'Design de Circuitos',
    level: 'intermediário',
    description:
      'Projeto de circuitos eletrônicos com KiCad: criação de esquemáticos, layout de PCBs, geração de Gerbers e boas práticas de design para fabricação.',
  },
  {
    name: 'Introdução a ROS',
    level: 'intermediário',
    description:
      'Fundamentos do Robot Operating System (ROS): nós, tópicos, serviços, pacotes e integração com sensores e atuadores em robôs reais.',
  },
  {
    name: 'Visão Computacional',
    level: 'avançado',
    description:
      'Processamento de imagem com OpenCV e Python: detecção de cores, formas, calibração de câmera, rastreamento de objetos e aplicações em robótica.',
  },
  {
    name: 'Programação em Python para Robótica',
    level: 'iniciante',
    description:
      'Curso introdutório de Python com foco em aplicações de robótica: manipulação de dados, comunicação serial, automação de tarefas e scripts de controle.',
  },
  {
    name: 'Inteligência Artificial Aplicada',
    level: 'avançado',
    description:
      'Conceitos de aprendizado de máquina e redes neurais aplicados à robótica: classificação de imagens, reinforcement learning e tomada de decisão autônoma.',
  },
  {
    name: 'Eletrônica para Robótica',
    level: 'iniciante',
    description:
      'Fundamentos de eletrônica analógica e digital: resistores, capacitores, transistores, portas lógicas e circuitos básicos para alimentação e controle de robôs.',
  },
  {
    name: 'Controle de Sistemas',
    level: 'avançado',
    description:
      'Teoria de controle aplicada: modelagem de sistemas, controladores PID, resposta em frequência e implementação em microcontroladores.',
  },
];
