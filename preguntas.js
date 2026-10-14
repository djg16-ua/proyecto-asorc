const questions = [
  {
    number: 1,
    tema: 2,
    text: "¿Cuál de los siguientes archivos se utiliza para configurar un mensaje estático que se muestra únicamente ANTES de que un usuario inicie sesión en una consola de terminal local (tty)?",
    options: [
      "/etc/motd",
      "/etc/issue",
      "/etc/issue.net",
      "/etc/wall"
    ],
    correct: 1,
    justification: "/etc/issue contiene el mensaje de logon estático mostrado antes de iniciar sesión en consolas locales. /etc/issue.net es para conexiones de red y /etc/motd se muestra tras un inicio de sesión exitoso."
  },
  {
    number: 2,
    tema: 2,
    text: "Si deseas enviar un mensaje dinámico de alerta a la terminal de TODOS los usuarios conectados al sistema de forma inmediata, ¿qué comando debes utilizar?",
    options: [
      "write",
      "notify-send",
      "wall",
      "mesg y"
    ],
    correct: 2,
    justification: "El comando wall ('write all') transmite mensajes en tiempo real a las terminales tty y pts de todos los usuarios logueados que tengan activado el estado de recepción de mensajes."
  },
  {
    number: 3,
    tema: 1,
    text: "En el proceso de arranque en sistemas con firmware BIOS tradicional, ¿dónde busca el sistema el primer código del gestor de arranque?",
    options: [
      "En la partición EFI (/boot/efi)",
      "En el Master Boot Record (MBR), en el primer sector del disco.",
      "En el directorio /etc/inittab",
      "En la memoria swap"
    ],
    correct: 1,
    justification: "En sistemas BIOS, el firmware ejecuta el código alojado en los primeros 512 bytes del disco ejecutable, denominado MBR."
  }
];