const preguntasTema1 = [
  // --- BLOQUE 1: MBR, GPT Y ESTRUCTURA DE DISCO ---
  {
    number: 1,
    tema: 1,
    text: "¿En qué sector del disco se encuentra el Master Boot Record (MBR) y cuál es su tamaño exacto?",
    options: [
      "En el último sector del disco; 1024 bytes",
      "En el primer sector del disco (Sector 0); 512 bytes",
      "En la partición /boot; 4096 bytes",
      "En el sector de inicio de la partición EFI; 256 bytes"
    ],
    correct: 1,
    justification: "El MBR se aloja en el primer sector (Sector 0) del disco físico y tiene un tamaño estricto de 512 bytes."
  },
  {
    number: 2,
    tema: 1,
    text: "¿Cuántos bytes exactamente del MBR de 512 bytes corresponden al código de arranque principal (Stage 1)?",
    options: [
      "446 bytes",
      "64 bytes",
      "510 bytes",
      "2 bytes"
    ],
    correct: 0,
    justification: "El MBR reserva los primeros 446 bytes para el código de arranque (Stage 1)."
  },
  {
    number: 3,
    tema: 1,
    text: "¿Cuántos bytes exactamente del MBR están reservados para la tabla de particiones primarias?",
    options: [
      "446 bytes",
      "64 bytes",
      "2 bytes",
      "128 bytes"
    ],
    correct: 1,
    justification: "La tabla de particiones primarias en MBR ocupa exactamente 64 bytes (4 entradas x 16 bytes)."
  },
  {
    number: 4,
    tema: 1,
    text: "¿Cuál es la firma mágica (magic bytes) al final de un MBR de 512 bytes que indica a la BIOS que el disco es arrancable?",
    options: [
      "0x8000",
      "0x55AA",
      "0x1234",
      "0xEF64"
    ],
    correct: 1,
    justification: "Los últimos 2 bytes del sector de arranque MBR deben ser exactamente 0x55AA."
  },
  {
    number: 5,
    tema: 1,
    text: "¿Cuál es el número máximo de particiones PRIMARIAS que se pueden definir en un esquema MBR tradicional?",
    options: [
      "2",
      "4",
      "128",
      "16"
    ],
    correct: 1,
    justification: "MBR solo admite hasta 4 particiones primarias debido al tamaño de su tabla (64 bytes / 16 bytes por entrada)."
  },
  {
    number: 6,
    tema: 1,
    text: "En un esquema GPT (GUID Partition Table), ¿cuántas particiones independientes se pueden crear por defecto sin necesidad de particiones extendidas?",
    options: [
      "4",
      "16",
      "64",
      "128"
    ],
    correct: 3,
    justification: "GPT reserva espacio predeterminado para al menos 128 particiones directas."
  },
  {
    number: 7,
    tema: 1,
    text: "¿Qué estructura coloca GPT en el sector 0 para evitar que herramientas antiguas que no soportan GPT sobreescriban el disco creyendo que está sin particionar?",
    options: [
      "Protective MBR",
      "EFI System Partition",
      "Primary Header",
      "Backup GPT"
    ],
    correct: 0,
    justification: "El Protective MBR simula una única partición que abarca todo el disco de tipo 0xEE."
  },

  // --- BLOQUE 2: FIRMWARE, UEFI Y SECURE BOOT ---
  {
    number: 8,
    tema: 1,
    text: "En un entorno UEFI, ¿cuál es el sistema de archivos OBLIGATORIO que debe tener la partición de sistema EFI (ESP) para ser leída por el firmware?",
    options: [
      "ext4",
      "Btrfs",
      "FAT (FAT12/FAT16/FAT32)",
      "NTFS"
    ],
    correct: 2,
    justification: "La especificación UEFI exige que la partición ESP esté formateada en una variante de FAT."
  },
  {
    number: 9,
    tema: 1,
    text: "¿En qué directorio se montan e instalan habitualmente las imágenes de arranque UEFI dentro de la jerarquía de Linux?",
    options: [
      "/boot/efi/",
      "/etc/uefi/",
      "/var/lib/esp/",
      "/sys/firmware/efi/"
    ],
    correct: 0,
    justification: "La partición ESP se suele montar bajo `/boot/efi/`."
  },
  {
    number: 10,
    tema: 1,
    text: "¿Qué herramienta CLI de Linux permite modificar, crear y reordenar las entradas de arranque guardadas en la NVRAM de UEFI?",
    options: [
      "efibootmgr",
      "uefi-config",
      "grub-nvram",
      "bootctl-legacy"
    ],
    correct: 0,
    justification: "`efibootmgr` manipula las variables de arranque almacenadas en la NVRAM del firmware UEFI."
  },
  {
    number: 11,
    tema: 1,
    text: "¿Qué requisito fundamental exige el mecanismo UEFI Secure Boot para permitir la ejecución de un bootloader o kernel?",
    options: [
      "Que esté almacenado en un disco SSD.",
      "Que el binario esté firmado digitalmente por una clave de confianza guardada en el firmware.",
      "Que esté compilado únicamente con GCC.",
      "Que tenga permisos de ejecución 777 en FAT32."
    ],
    correct: 1,
    justification: "Secure Boot valida la firma digital del ejecutable antes de darle el control del hardware."
  },
  {
    number: 12,
    tema: 1,
    text: "¿Cómo se llama el pequeño cargador intermedio (bootloader Shim) firmado por Microsoft que utilizan distribuciones Linux para iniciar GRUB 2 con Secure Boot?",
    options: [
      "shim.efi",
      "uefi-bridge.bin",
      "secure-grub.exe",
      "bootloader.sig"
    ],
    correct: 0,
    justification: "`shim.efi` actua de intermediario firmado que permite luego verificar la firma de la distribución."
  },

  // --- BLOQUE 3: DIFERENCIAS DE INDEXACIÓN Y SINTAXIS GRUB (LEGACY VS GRUB 2) ---
  {
    number: 13,
    tema: 1,
    text: "En GRUB Legacy, ¿a qué disco físico y partición corresponde exactamente la nomenclatura '(hd0,1)'?",
    options: [
      "Primer disco duro, primera partición.",
      "Primer disco duro, segunda partición.",
      "Segundo disco duro, primera partición.",
      "Segundo disco duro, segunda partición."
    ],
    correct: 1,
    justification: "GRUB Legacy cuenta discos desde 0 y particiones desde 0. Por lo tanto (hd0,1) = disco 0, partición 1 (segunda)."
  },
  {
    number: 14,
    tema: 1,
    text: "En GRUB 2, ¿a qué disco físico y partición corresponde exactamente la nomenclatura '(hd0,1)' o 'hd0,msdos1'?",
    options: [
      "Primer disco duro, primera partición.",
      "Primer disco duro, segunda partición.",
      "Segundo disco duro, primera partición.",
      "Segundo disco duro, segunda partición."
    ],
    correct: 0,
    justification: "GRUB 2 cuenta discos desde 0, pero particiones desde 1. Por lo tanto (hd0,1) = disco 0, partición 1 (primera)."
  },
  {
    number: 15,
    tema: 1,
    text: "En GRUB Legacy, ¿a qué disco físico y partición corresponde la nomenclatura '(hd1,0)'?",
    options: [
      "Primer disco duro, primera partición.",
      "Segundo disco duro, primera partición.",
      "Primer disco duro, segunda partición.",
      "Segundo disco duro, segunda partición."
    ],
    correct: 1,
    justification: "(hd1,0) en GRUB Legacy es el segundo disco (1) y la primera partición (0)."
  },
  {
    number: 16,
    tema: 1,
    text: "En GRUB 2, ¿a qué disco físico y partición corresponde la nomenclatura '(hd1,1)'?",
    options: [
      "Primer disco duro, primera partición.",
      "Segundo disco duro, primera partición.",
      "Segundo disco duro, segunda partición.",
      "Primer disco duro, segunda partición."
    ],
    correct: 1,
    justification: "En GRUB 2, el disco 1 es el segundo disco físico y la partición 1 es la primera partición."
  },
  {
    number: 17,
    tema: 1,
    text: "¿Cuál es el archivo de configuración PRINCIPAL de GRUB Legacy que se editaba manualmente?",
    options: [
      "/boot/grub/grub.cfg",
      "/boot/grub/menu.lst",
      "/etc/default/grub",
      "/etc/grub.d/40_custom"
    ],
    correct: 1,
    justification: "`menu.lst` (o `grub.conf`) era el archivo de configuración manual de GRUB Legacy."
  },
  {
    number: 18,
    tema: 1,
    text: "¿Cuál es el archivo de configuración PRINCIPAL generado automáticamente que NO se debe editar manualmente en GRUB 2?",
    options: [
      "/boot/grub/grub.cfg",
      "/boot/grub/menu.lst",
      "/etc/default/grub",
      "/etc/grub.d/10_linux"
    ],
    correct: 0,
    justification: "`grub.cfg` es compilado automáticamente por `grub-mkconfig` y no debe editarse a mano."
  },
  {
    number: 19,
    tema: 1,
    text: "¿En qué archivo de texto plano el administrador modifica los parámetros globales de GRUB 2 (como el tiempo de espera o el kernel predeterminado)?",
    options: [
      "/boot/grub/grub.cfg",
      "/etc/default/grub",
      "/etc/grub.conf",
      "/boot/grub/menu.lst"
    ],
    correct: 1,
    justification: "El archivo de variables globales para el administrador en GRUB 2 es `/etc/default/grub`."
  },
  {
    number: 20,
    tema: 1,
    text: "¿En qué directorio se almacenan los scripts en orden ejecutable (00_header, 10_linux, etc.) que utiliza `grub-mkconfig`?",
    options: [
      "/etc/grub.d/",
      "/boot/grub/scripts/",
      "/etc/default/grub.d/",
      "/usr/lib/grub/"
    ],
    correct: 0,
    justification: "Los scripts ejecutables de generación del menú de GRUB 2 están en `/etc/grub.d/`."
  },
  {
    number: 21,
    tema: 1,
    text: "¿Cuál es el comando exacto para generar y guardar la nueva configuración de GRUB 2 en el destino correcto?",
    options: [
      "grub-install -o /boot/grub/grub.cfg",
      "grub-mkconfig -o /boot/grub/grub.cfg",
      "update-grub-config /boot/grub/grub.cfg",
      "grub2-generate -f /boot/grub/grub.cfg"
    ],
    correct: 1,
    justification: "Se utiliza `grub-mkconfig -o /boot/grub/grub.cfg`."
  },
  {
    number: 22,
    tema: 1,
    text: "Si deseas instalar el código del cargador de arranque GRUB 2 en el MBR del primer disco SATA `/dev/sda`, ¿cuál es el comando correcto?",
    options: [
      "grub-install /dev/sda1",
      "grub-install /dev/sda",
      "grub-mkconfig /dev/sda",
      "grub-install /boot/efi"
    ],
    correct: 1,
    justification: "Debes apuntar al disco entero (`/dev/sda`), no a una partición específica (`/dev/sda1`)."
  },
  {
    number: 23,
    tema: 1,
    text: "Si deseas instalar GRUB 2 especificando directamente la partición en lugar del MBR (no recomendado en MBR estándar), ¿qué comando usarías?",
    options: [
      "grub-install /dev/sda",
      "grub-install /dev/sda1",
      "grub-mkconfig /dev/sda1",
      "grub-set-boot /dev/sda1"
    ],
    correct: 1,
    justification: "Para escribir en el boot sector de una partición concreta se indica la partición (ej. `/dev/sda1`)."
  },
  {
    number: 24,
    tema: 1,
    text: "¿Qué variable de `/etc/default/grub` define el tiempo en segundos que el menú esperará antes de iniciar la entrada por defecto?",
    options: [
      "GRUB_TIMEOUT",
      "GRUB_WAIT",
      "GRUB_DELAY",
      "GRUB_TIME"
    ],
    correct: 0,
    justification: "`GRUB_TIMEOUT` define los segundos de pausa del menú."
  },
  {
    number: 25,
    tema: 1,
    text: "¿Qué comando de GRUB 2 permite seleccionar una entrada de arranque específica SOLO para el PRÓXIMO reinicio temporal?",
    options: [
      "grub-set-default",
      "grub-reboot",
      "grub-next-boot",
      "systemctl reboot --entry"
    ],
    correct: 1,
    justification: "`grub-reboot` define la entrada de inicio para un solo arranque."
  },

  // --- BLOQUE 4: FAMILIA SYSLINUX / PXELINUX / ISOLINUX / EXTLINUX ---
  {
    number: 26,
    tema: 1,
    text: "¿Qué ejecutable o variante de la familia SYSLINUX se utiliza para arrancar sistemas desde imágenes o medios ópticos en formato ISO9660?",
    options: [
      "PXELINUX",
      "EXTLINUX",
      "ISOLINUX",
      "MEMDISK"
    ],
    correct: 2,
    justification: "`ISOLINUX` está diseñado para soportes ópticos ISO9660."
  },
  {
    number: 27,
    tema: 1,
    text: "¿Qué variante de la familia SYSLINUX se emplea para arrancar clientes ligeros a través de la red local?",
    options: [
      "PXELINUX",
      "EXTLINUX",
      "ISOLINUX",
      "SYSLINUX"
    ],
    correct: 0,
    justification: "`PXELINUX` gestiona el arranque por red PXE."
  },
  {
    number: 28,
    tema: 1,
    text: "¿Qué variante de la familia SYSLINUX está diseñada específicamente para instalarse en sistemas de archivos nativos de Linux como ext2, ext3, ext4, Btrfs o XFS?",
    options: [
      "ISOLINUX",
      "EXTLINUX",
      "PXELINUX",
      "SYSLINUX (clásico)"
    ],
    correct: 1,
    justification: "`EXTLINUX` opera sobre sistemas de archivos Linux (ext2/3/4, btrfs, etc.)."
  },
  {
    number: 29,
    tema: 1,
    text: "¿Qué variante original de SYSLINUX se usaba históricamente para arrancar desde sistemas de archivos FAT (en disquetes o pendrives USB de bajo nivel)?",
    options: [
      "SYSLINUX (clásico)",
      "EXTLINUX",
      "ISOLINUX",
      "PXELINUX"
    ],
    correct: 0,
    justification: "El SYSLINUX original estaba restringido a unidades formateadas en FAT."
  },
  {
    number: 30,
    tema: 1,
    text: "¿Cuál es el nombre predeterminado del archivo de configuración del cargador EXTLINUX?",
    options: [
      "extlinux.conf",
      "syslinux.cfg",
      "boot.cfg",
      "grub.cfg"
    ],
    correct: 0,
    justification: "EXTLINUX busca su configuración en `extlinux.conf` (o `syslinux.cfg`)."
  },
  {
    number: 31,
    tema: 1,
    text: "En un servidor TFTP para PXELINUX, ¿cuál es el nombre del archivo binario del cargador principal que descarga el cliente?",
    options: [
      "pxelinux.0",
      "pxelinux.cfg",
      "boot.pxe",
      "vmlinuz.pxe"
    ],
    correct: 0,
    justification: "El ejecutable servido por TFTP suele ser `pxelinux.0`."
  },
  {
    number: 32,
    tema: 1,
    text: "En PXELINUX, ¿en qué subdirectorio dentro de la raíz TFTP se deben almacenar las configuraciones de arranque por cliente?",
    options: [
      "pxelinux.cfg/",
      "pxelinux.d/",
      "tftpboot/cfg/",
      "boot/pxe/"
    ],
    correct: 0,
    justification: "La carpeta obligatoria para los archivos de configuración es `pxelinux.cfg/`."
  },
  {
    number: 33,
    tema: 1,
    text: "Si PXELINUX no encuentra un archivo asignado a la MAC o IP en `pxelinux.cfg/`, ¿cuál es el nombre del archivo de configuración genérico final al que recurre?",
    options: [
      "default",
      "generic.cfg",
      "pxelinux.conf",
      "main"
    ],
    correct: 0,
    justification: "El archivo de reserva fallback es `pxelinux.cfg/default`."
  },
  {
    number: 34,
    tema: 1,
    text: "¿Qué dos servicios/protocolos de red son INDISPENSABLES en el servidor para que funcione el arranque PXE?",
    options: [
      "DHCP y TFTP",
      "HTTP y DNS",
      "FTP y SSH",
      "NFS y SMTP"
    ],
    correct: 0,
    justification: "DHCP asigna la IP/nombre de archivo y TFTP sirve el binario del cargador."
  },
  {
    number: 35,
    tema: 1,
    text: "¿Qué opción del servicio DHCP (Opción 67) indica al cliente PXE el nombre del archivo que debe solicitar por TFTP?",
    options: [
      "filename (o Bootfile-Name)",
      "next-server",
      "domain-name",
      "routers"
    ],
    correct: 0,
    justification: "La Option 67 de DHCP envía el nombre del archivo (`filename \"pxelinux.0\"`)."
  },
  {
    number: 36,
    tema: 1,
    text: "¿Qué opción del servicio DHCP (Opción 66) indica al cliente PXE la dirección IP del servidor TFTP?",
    options: [
      "next-server (o Server-Name)",
      "filename",
      "domain-name-servers",
      "broadcast-address"
    ],
    correct: 0,
    justification: "La Option 66 o la directiva `next-server` especifica la IP del servidor TFTP."
  },

  // --- BLOQUE 5: SYSV INIT Y /ETC/INITTAB ---
  {
    number: 37,
    tema: 1,
    text: "En un sistema SysV init tradicional, ¿cuál es el primer proceso de espacio de usuario ejecutado por el Kernel y cuál es su PID?",
    options: [
      "init (o telinit); PID 1",
      "systemd; PID 0",
      "kthreadd; PID 1",
      "bash; PID 2"
    ],
    correct: 0,
    justification: "El proceso `init` siempre recibe el PID 1."
  },
  {
    number: 38,
    tema: 1,
    text: "¿Cuál es el archivo de configuración central leído por el programa SysV `init` al arrancar el sistema?",
    options: [
      "/etc/inittab",
      "/etc/init.conf",
      "/etc/sysvinit.cfg",
      "/etc/rc.local"
    ],
    correct: 0,
    justification: "`/etc/inittab` contiene las reglas de niveles de ejecución y procesos en SysV."
  },
  {
    number: 39,
    tema: 1,
    text: "¿Cuál es el formato exacto de sintaxis por campos en cada línea del archivo `/etc/inittab`?",
    options: [
      "id:runlevels:action:process",
      "process:action:runlevels:id",
      "action:id:runlevels:process",
      "runlevels:id:process:action"
    ],
    correct: 0,
    justification: "La estructura en inittab es cuatro campos separados por dos puntos: `id:runlevels:action:process`."
  },
  {
    number: 40,
    tema: 1,
    text: "En `/etc/inittab`, ¿qué acción especifica el runlevel predeterminado al que entrará el sistema tras el boot (ej: `id:3:initdefault:`)?",
    options: [
      "initdefault",
      "sysinit",
      "bootwait",
      "respawn"
    ],
    correct: 0,
    justification: "`initdefault` define el runlevel inicial por defecto."
  },
  {
    number: 41,
    tema: 1,
    text: "En `/etc/inittab`, ¿qué acción indica a init que debe reejecutar un proceso automáticamente cada vez que este finalice o muera?",
    options: [
      "respawn",
      "once",
      "wait",
      "boot"
    ],
    correct: 0,
    justification: "`respawn` vuelve a lanzar el proceso si finaliza (usado para las terminales virtuales getty)."
  },
  {
    number: 42,
    tema: 1,
    text: "En `/etc/inittab`, ¿qué acción indica que un proceso debe ejecutarse UNA SOLA VEZ al entrar en el runlevel y esperar a que termine antes de continuar?",
    options: [
      "wait",
      "once",
      "respawn",
      "bootwait"
    ],
    correct: 0,
    justification: "`wait` ejecuta el proceso una sola vez y pausa el procesamiento de inittab hasta que dicho proceso concluya."
  },
  {
    number: 43,
    tema: 1,
    text: "En `/etc/inittab`, ¿qué acción indica que un proceso debe ejecutarse UNA SOLA VEZ al entrar en el runlevel SIN esperar a que termine?",
    options: [
      "once",
      "wait",
      "respawn",
      "boot"
    ],
    correct: 0,
    justification: "`once` lanza el proceso en segundo plano sin esperar a que finalice."
  },
  {
    number: 44,
    tema: 1,
    text: "En `/etc/inittab`, ¿qué acción indica la tarea de inicialización básica que se ejecuta ANTES que cualquier otra durante la fase de inicio?",
    options: [
      "sysinit",
      "boot",
      "initdefault",
      "powerwait"
    ],
    correct: 0,
    justification: "`sysinit` se ejecuta en primer lugar al arrancar el sistema."
  },
  {
    number: 45,
    tema: 1,
    text: "En `/etc/inittab`, ¿qué etiqueta de acción intercepta la combinación de teclas Ctrl+Alt+Supr?",
    options: [
      "ctrlaltdel",
      "kbrequest",
      "powerfail",
      "sysrequest"
    ],
    correct: 0,
    justification: "`ctrlaltdel` define la orden ejecutada al pulsar la combinación de teclas."
  },

  // --- BLOQUE 6: RUNLEVELS Y SCRIPTS (DEBIAN VS RED HAT) ---
  {
    number: 46,
    tema: 1,
    text: "En SysV init, ¿a qué estado equivale el Runlevel 0?",
    options: [
      "Apagado del sistema (Power Off / Halt)",
      "Modo monousuario",
      "Reinicio del sistema (Reboot)",
      "Modo texto multiusuario"
    ],
    correct: 0,
    justification: "Runlevel 0 apaga el equipo."
  },
  {
    number: 47,
    tema: 1,
    text: "En SysV init, ¿a qué estado equivale el Runlevel 6?",
    options: [
      "Reinicio del sistema (Reboot)",
      "Apagado del sistema",
      "Modo gráfico",
      "Modo monousuario"
    ],
    correct: 0,
    justification: "Runlevel 6 reinicia el equipo."
  },
  {
    number: 48,
    tema: 1,
    text: "En SysV init, ¿a qué estado está reservado el Runlevel 1 (o 'S' / 'single')?",
    options: [
      "Modo monousuario / rescate de mantenimiento sin red",
      "Modo multiusuario gráfico",
      "Modo multiusuario en texto",
      "Sin uso"
    ],
    correct: 0,
    justification: "Runlevel 1 / S es el modo monousuario."
  },
  {
    number: 49,
    tema: 1,
    text: "En distribuciones de la familia Red Hat (CentOS/RHEL SysV), ¿a qué modo equivale el Runlevel 3?",
    options: [
      "Modo multiusuario en línea de comandos (texto) con red",
      "Modo multiusuario gráfico (X11)",
      "Modo monousuario",
      "Modo sin red"
    ],
    correct: 0,
    justification: "En Red Hat, el Runlevel 3 es consola de texto multiusuario con red."
  },
  {
    number: 50,
    tema: 1,
    text: "En distribuciones de la familia Red Hat (CentOS/RHEL SysV), ¿a qué modo equivale el Runlevel 5?",
    options: [
      "Modo multiusuario gráfico (X11 / Display Manager)",
      "Modo multiusuario en texto",
      "Modo personalizado sin definir",
      "Modo de reinicio"
    ],
    correct: 0,
    justification: "En Red Hat, el Runlevel 5 es el entorno gráfico."
  },
  {
    number: 51,
    tema: 1,
    text: "En distribuciones basadas en Debian (SysV tradicional), ¿qué característica especial tienen los Runlevels 2, 3, 4 y 5?",
    options: [
      "Son completamente idénticos por defecto (entorno multiusuario).",
      "El 2 es gráfico y los demás son texto.",
      "El 5 está prohibido usarlo.",
      "El 3 apaga la red."
    ],
    correct: 0,
    justification: "En Debian SysV tradicional, los runlevels 2 al 5 son configurados de manera idéntica por defecto."
  },
  {
    number: 52,
    tema: 1,
    text: "Dentro del directorio `/etc/rc3.d/`, ¿qué indica la letra 'S' en el script `S20rsyslog` y cómo se procesa numéricamente?",
    options: [
      "Start (Iniciar); se ejecuta en orden numérico ascendente (de menor a mayor)",
      "Stop (Detener); se ejecuta en orden ascendente",
      "Start; se ejecuta en orden descendente",
      "System; se ejecuta en paralelo"
    ],
    correct: 0,
    justification: "'S' = Start. El número (20) determina el orden secuencial ascendente de ejecución."
  },
  {
    number: 53,
    tema: 1,
    text: "Dentro del directorio `/etc/rc3.d/`, ¿qué indica la letra 'K' en el script `K10apache2` y qué función cumple al cambiar a ese runlevel?",
    options: [
      "Kill/Stop (Detener el servicio); se procesa antes que los scripts 'S'",
      "Kernel; ejecuta el script en el espacio del Kernel",
      "Keep; mantiene el servicio activo",
      "Kill; destruye el proceso por la fuerza con SIGKILL"
    ],
    correct: 0,
    justification: "'K' = Kill/Stop. SysV ejecuta primero los scripts K para detener los servicios no deseados."
  },
  {
    number: 54,
    tema: 1,
    text: "Al cambiar de nivel de ejecución en SysV init, ¿cuál es el orden estricto de ejecución entre scripts de tipo 'K' y 'S'?",
    options: [
      "Se ejecutan primero TODOS los scripts 'K' y luego TODOS los scripts 'S'.",
      "Se ejecutan primero los scripts 'S' y luego los 'K'.",
      "Se ejecutan intercalados según su número sin importar la letra.",
      "Se ejecutan al mismo tiempo en paralelo."
    ],
    correct: 0,
    justification: "SysV primero ejecuta todos los scripts 'K' (stop) y tras terminar, ejecuta todos los 'S' (start)."
  },
  {
    number: 55,
    tema: 1,
    text: "¿En qué directorio residen los archivos o scripts originales de servicios SysV a los cuales apuntan los enlaces simbólicos de `/etc/rcX.d/`?",
    options: [
      "/etc/init.d/",
      "/etc/rc.d/scripts/",
      "/usr/sbin/init/",
      "/var/init/"
    ],
    correct: 0,
    justification: "Los scripts reales se alojan en `/etc/init.d/`."
  },
  {
    number: 56,
    tema: 1,
    text: "¿Qué comando CLI se utiliza en Red Hat (SysV) para habilitar o deshabilitar servicios en niveles de ejecución específicos?",
    options: [
      "chkconfig",
      "update-rc.d",
      "systemctl",
      "service-config"
    ],
    correct: 0,
    justification: "`chkconfig` es la herramienta de gestión en Red Hat SysV."
  },
  {
    number: 57,
    tema: 1,
    text: "¿Qué comando CLI se utiliza en Debian (SysV) para crear o eliminar los enlaces simbólicos Sxx/Kxx en los directorios `/etc/rcX.d/`?",
    options: [
      "update-rc.d",
      "chkconfig",
      "sysv-config",
      "debian-service"
    ],
    correct: 0,
    justification: "`update-rc.d` gestiona los enlaces simbólicos en Debian SysV."
  },
  {
    number: 58,
    tema: 1,
    text: "¿Qué comando se usa en SysV init para cambiar inmediatamente al nivel de ejecución 3 en tiempo de ejecución?",
    options: [
      "init 3 (o telinit 3)",
      "runlevel 3",
      "systemctl isolate 3",
      "change-runlevel 3"
    ],
    correct: 0,
    justification: "`init 3` o `telinit 3` cambian de runlevel."
  },
  {
    number: 59,
    tema: 1,
    text: "¿Qué comando muestra el nivel de ejecución previo y el actual en SysV init?",
    options: [
      "runlevel",
      "who -r",
      "Ambas A y B son correctas",
      "Ninguna de las anteriores"
    ],
    correct: 2,
    justification: "Tanto `runlevel` como `who -r` proporcionan el nivel de ejecución anterior y activo."
  },

  // --- BLOQUE 7: UPSTART Y OTROS SISTEMAS DE INICIAIZACIÓN ---
  {
    number: 60,
    tema: 1,
    text: "¿Qué sistema de inicialización basado en EVENTOS fue creado por Canonical/Ubuntu para sustituir a SysV antes de adoptar systemd?",
    options: [
      "Upstart",
      "OpenRC",
      "runit",
      "s6"
    ],
    correct: 0,
    justification: "Upstart fue desarrollado por Canonical como un sistema asíncrono basado en eventos."
  },
  {
    number: 61,
    tema: 1,
    text: "¿En qué directorio almacena Upstart sus archivos de configuración de tareas y servicios (jobs con extensión `.conf`)?",
    options: [
      "/etc/init/",
      "/etc/upstart.d/",
      "/etc/inittab.d/",
      "/var/log/upstart/"
    ],
    correct: 0,
    justification: "Upstart lee las definiciones de trabajos en `/etc/init/`."
  },
  {
    number: 62,
    tema: 1,
    text: "¿Cuál es la sintaxis de comando utilizada en Upstart para consultar el estado de un trabajo llamado 'networking'?",
    options: [
      "status networking",
      "systemctl status networking",
      "chkconfig networking --status",
      "initctl check networking"
    ],
    correct: 0,
    justification: "Upstart incluye comandos directos como `status`, `start` y `stop`."
  },

  // --- BLOQUE 8: SYSTEMD (TARGETS, UNIDADES, COMANDOS) ---
  {
    number: 63,
    tema: 1,
    text: "En systemd, ¿a qué target equivale directamente el antiguo Runlevel 0 (Apagado)?",
    options: [
      "poweroff.target",
      "reboot.target",
      "emergency.target",
      "halt.target"
    ],
    correct: 0,
    justification: "`poweroff.target` realiza el apagado completo."
  },
  {
    number: 64,
    tema: 1,
    text: "En systemd, ¿a qué target equivale directamente el antiguo Runlevel 1 (Monousuario)?",
    options: [
      "rescue.target",
      "emergency.target",
      "single.target",
      "maintenance.target"
    ],
    correct: 0,
    justification: "`rescue.target` corresponde al antiguo modo single-user/runlevel 1."
  },
  {
    number: 65,
    tema: 1,
    text: "En systemd, ¿a qué target equivale directamente el antiguo Runlevel 3 (Multiusuario en consola de texto con red)?",
    options: [
      "multi-user.target",
      "graphical.target",
      "console.target",
      "network.target"
    ],
    correct: 0,
    justification: "`multi-user.target` proporciona el entorno de consola sin X11."
  },
  {
    number: 66,
    tema: 1,
    text: "En systemd, ¿a qué target equivale directamente el antiguo Runlevel 5 (Multiusuario gráfico)?",
    options: [
      "graphical.target",
      "multi-user.target",
      "display.target",
      "desktop.target"
    ],
    correct: 0,
    justification: "`graphical.target` añade la interfaz gráfica sobre el modo multiusuario."
  },
  {
    number: 67,
    tema: 1,
    text: "En systemd, ¿a qué target equivale directamente el antiguo Runlevel 6 (Reinicio)?",
    options: [
      "reboot.target",
      "poweroff.target",
      "reload.target",
      "reset.target"
    ],
    correct: 0,
    justification: "`reboot.target` efectúa el reinicio de la máquina."
  },
  {
    number: 68,
    tema: 1,
    text: "¿Qué comando de systemd cambia el target activo INMEDIATAMENTE en tiempo de ejecución sin alterar el inicio predeterminado del sistema?",
    options: [
      "systemctl isolate <target>",
      "systemctl set-default <target>",
      "systemctl enable <target>",
      "systemctl switch <target>"
    ],
    correct: 0,
    justification: "`systemctl isolate` cambia el target activo de forma inmediata."
  },
  {
    number: 69,
    tema: 1,
    text: "¿Qué comando de systemd fija PERMANENTEMENTE el target que se cargará por defecto en los siguientes arranques?",
    options: [
      "systemctl set-default <target>",
      "systemctl isolate <target>",
      "systemctl enable <target>",
      "systemctl make-default <target>"
    ],
    correct: 0,
    justification: "`systemctl set-default` cambia el enlace del target predeterminado."
  },
  {
    number: 70,
    tema: 1,
    text: "¿Qué comando muestra el target configurado actualmente por defecto en systemd?",
    options: [
      "systemctl get-default",
      "systemctl show-default",
      "systemctl status-default",
      "systemd-analyze default"
    ],
    correct: 0,
    justification: "`systemctl get-default` consulta el target por defecto."
  },
  {
    number: 71,
    tema: 1,
    text: "¿En qué directorio con MÁXIMA PRIORIDAD coloca el administrador sus archivos de unidad (units) de systemd modificados?",
    options: [
      "/etc/systemd/system/",
      "/lib/systemd/system/",
      "/usr/lib/systemd/system/",
      "/run/systemd/system/"
    ],
    correct: 0,
    justification: "`etc/systemd/system/` sobrescribe a las unidades del sistema provistas por paquetes."
  },
  {
    number: 72,
    tema: 1,
    text: "¿En qué directorio se almacenan las unidades de systemd instaladas por los paquetes del sistema operativo (distribución)?",
    options: [
      "/lib/systemd/system/ (o /usr/lib/systemd/system/)",
      "/etc/systemd/system/",
      "/var/lib/systemd/",
      "/opt/systemd/units/"
    ],
    correct: 0,
    justification: "Las unidades empaquetadas por la distribución están en `/lib/systemd/system/` o `/usr/lib/systemd/system/`."
  },
  {
    number: 73,
    tema: 1,
    text: "Si creas o editas una unidad en `/etc/systemd/system/`, ¿qué comando debes ejecutar para que el demonio systemd recargue sus archivos de configuración?",
    options: [
      "systemctl daemon-reload",
      "systemctl reload-all",
      "systemctl restart systemd",
      "systemd-refresh"
    ],
    correct: 0,
    justification: "`systemctl daemon-reload` reescanea los archivos de unidad en el disco."
  },
  {
    number: 74,
    tema: 1,
    text: "En la sección `[Unit]` de systemd, ¿qué directiva expresa una dependencia DÉBIL u OPCIONAL (si falla, la unidad principal continúa)?",
    options: [
      "Wants=",
      "Requires=",
      "After=",
      "Before="
    ],
    correct: 0,
    justification: "`Wants=` define una dependencia débil (no destructiva si falla)."
  },
  {
    number: 75,
    tema: 1,
    text: "En la sección `[Unit]` de systemd, ¿qué directiva expresa una dependencia FUERTE u OBLIGATORIA (si la unidad requerida falla, la unidad actual también falla)?",
    options: [
      "Requires=",
      "Wants=",
      "After=",
      "Conflicts="
    ],
    correct: 0,
    justification: "`Requires=` impone una dependencia estricta."
  },
  {
    number: 76,
    tema: 1,
    text: "En systemd, ¿qué función cumple la directiva `After=` en la sección `[Unit]`?",
    options: [
      "Establece ÚNICAMENTE el orden de ejecución (se inicia después de la unidad especificada), sin imponer dependencia.",
      "Establece una dependencia obligatoria de fallo.",
      "Reinicia la unidad si la anterior se detiene.",
      "Pone la unidad en segundo plano."
    ],
    correct: 0,
    justification: "`After=` controla únicamente el orden temporal de arranque, desvinculado de la dependencia."
  },
  {
    number: 77,
    tema: 1,
    text: "¿Qué comando de systemd deshabilita por completo una unidad enlazándola a `/dev/null` para evitar que sea iniciada manualmente o por otra dependencia?",
    options: [
      "systemctl mask <unidad>",
      "systemctl disable <unidad>",
      "systemctl stop <unidad>",
      "systemctl block <unidad>"
    ],
    correct: 0,
    justification: "`systemctl mask` redirige la unidad a `/dev/null` anulando cualquier invocación."
  },
  {
    number: 78,
    tema: 1,
    text: "¿Qué comando revierte el efecto de `systemctl mask`?",
    options: [
      "systemctl unmask <unidad>",
      "systemctl enable <unidad>",
      "systemctl unblock <unidad>",
      "systemctl restore <unidad>"
    ],
    correct: 0,
    justification: "`systemctl unmask` remueve el enlace a `/dev/null`."
  },
  {
    number: 79,
    tema: 1,
    text: "¿Qué comando de systemd analiza y desglose el tiempo consumido por cada servicio durante el boot para identificar cuellos de botella?",
    options: [
      "systemd-analyze blame",
      "systemctl boot-time",
      "journalctl --analyze",
      "systemd-time --list"
    ],
    correct: 0,
    justification: "`systemd-analyze blame` enumera las unidades ordenadas por el tiempo de carga."
  },
  {
    number: 80,
    tema: 1,
    text: "¿Qué comando de systemd permite visualizar el árbol jerárquico de dependencias cargadas por un objetivo?",
    options: [
      "systemctl list-dependencies",
      "systemd-tree",
      "journalctl --tree",
      "systemctl show-tree"
    ],
    correct: 0,
    justification: "`systemctl list-dependencies` dibuja el árbol de dependencias."
  },

  // --- BLOQUE 9: INITRAMFS, KERNEL Y PROCESO DE INICIO ---
  {
    number: 81,
    tema: 1,
    text: "¿Cuál es el propósito principal del archivo/imagen `initramfs` cargado en RAM durante el arranque?",
    options: [
      "Proporcionar los controladores y módulos de almacenamiento necesarios para poder montar el sistema de archivos raíz definitivo ('/').",
      "Reemplazar al kernel permanently.",
      "Guardar los registros de logs de la BIOS.",
      "Configurar la red inalámbrica antes del login."
    ],
    correct: 0,
    justification: "`initramfs` contiene los controladores mínimos iniciales para acceder a `/`."
  },
  {
    number: 82,
    tema: 1,
    text: "Internamente, ¿qué formato de archivo de empaquetado/archivo utiliza una imagen `initramfs`?",
    options: [
      "cpio (comprimido habitualmente con gzip, xz o lz4)",
      "tar.gz",
      "zip",
      "iso9660"
    ],
    correct: 0,
    justification: "Las imágenes `initramfs` son archivos en formato `cpio` comprimidos."
  },
  {
    number: 83,
    tema: 1,
    text: "¿Qué comando se utiliza en sistemas Debian/Ubuntu para regenerar las imágenes initramfs activas?",
    options: [
      "update-initramfs -u",
      "dracut --force",
      "mkinitrd",
      "genramfs -a"
    ],
    correct: 0,
    justification: "Debian utiliza `update-initramfs -u`."
  },
  {
    number: 84,
    tema: 1,
    text: "¿Qué herramienta es el estándar en distribuciones de la familia Red Hat / Fedora para generar la imagen initramfs?",
    options: [
      "dracut",
      "update-initramfs",
      "mkinitramfs",
      "build-init"
    ],
    correct: 0,
    justification: "Red Hat empleaba `mkinitrd` y en versiones modernas utiliza `dracut`."
  },

  // --- BLOQUE 10: TÉCNICAS DE RECUPERACIÓN, LOGS Y PARÁMETROS DEL KERNEL ---
  {
    number: 85,
    tema: 1,
    text: "Al pasar la opción `init=/bin/bash` en la línea del Kernel en GRUB, ¿qué acción realiza el sistema al arrancar?",
    options: [
      "Omitir el inicio de init/systemd y lanzar una shell bash directa con permisos de root como PID 1.",
      "Iniciar en modo gráfico sin pedir contraseña.",
      "Ejecutar un chequeo automático de disco fsck sin montar nada.",
      "Reiniciar en bucle de emergencia."
    ],
    correct: 0,
    justification: "`init=/bin/bash` sustituye el ejecutable de inicialización por la shell bash directamente."
  },
  {
    number: 86,
    tema: 1,
    text: "Al arrancar con `init=/bin/bash`, el sistema de archivos raíz ('/') se monta por seguridad en modo de solo lectura. ¿Qué comando debes ejecutar para cambiarlo a lectura/escritura?",
    options: [
      "mount -o remount,rw /",
      "chmod 777 /",
      "fsck -f /",
      "systemctl rw /"
    ],
    correct: 0,
    justification: "`mount -o remount,rw /` vuelve a montar la raíz con permisos de escritura."
  },
  {
    number: 87,
    tema: 1,
    text: "Si modificas `/etc/shadow` desde un entorno de rescate en un sistema con SELinux activo, ¿qué archivo debes crear en `/` para forzar el re-etiquetado de seguridad en el próximo reinicio normal?",
    options: [
      "/.autorelabel",
      "/etc/selinux/relabel",
      "/fix_selinux",
      "/.relabel_now"
    ],
    correct: 0,
    justification: "Crear `/.autorelabel` fuerza a SELinux a corregir los contextos de archivo en el boot."
  },
  {
    number: 88,
    tema: 1,
    text: "¿Qué parámetro enviado al Kernel en GRUB permite desactivar SELinux por completo durante el proceso de inicio?",
    options: [
      "selinux=0",
      "noselinux=1",
      "disable_security",
      "se=off"
    ],
    correct: 0,
    justification: "Pasar `selinux=0` deshabilita SELinux durante el arranque."
  },
  {
    number: 89,
    tema: 1,
    text: "¿Qué parámetro enviado al Kernel en GRUB en un sistema con systemd fuerza el arranque en el modo de emergencia estricto?",
    options: [
      "systemd.unit=emergency.target",
      "systemd.unit=rescue.target",
      "systemd.emergency=true",
      "boot_mode=emergency"
    ],
    correct: 0,
    justification: "`systemd.unit=emergency.target` fuerza la carga de ese target."
  },
  {
    number: 90,
    tema: 1,
    text: "¿Qué parámetro enviado al Kernel en GRUB en un sistema con systemd fuerza el arranque en el modo de rescate / monousuario?",
    options: [
      "systemd.unit=rescue.target",
      "systemd.unit=emergency.target",
      "single",
      "Ambas opciones A y C son válidas"
    ],
    correct: 3,
    justification: "Tanto `systemd.unit=rescue.target` como la palabra clave `1` o `single` derivan en el modo rescate."
  },
  {
    number: 91,
    tema: 1,
    text: "¿Cuál es la diferencia técnica fundamental entre `rescue.target` y `emergency.target` en systemd?",
    options: [
      "`rescue.target` intenta montar los sistemas de archivos de `/etc/fstab`; `emergency.target` no procesa fstab y monta la raíz en solo lectura.",
      "`rescue.target` activa la red y `emergency.target` no.",
      "`rescue.target` abre interfaz gráfica de rescate.",
      "Son sinónimos exactos."
    ],
    correct: 0,
    justification: "`emergency.target` no intenta montar los puntos definidos en `/etc/fstab`, mientras que `rescue.target` sí."
  },
  {
    number: 92,
    tema: 1,
    text: "¿Qué comando consulta el búfer circular de mensajes del Kernel desde la fase inicial de encendido?",
    options: [
      "dmesg",
      "lsmod",
      "lspci",
      "cat /var/log/syslog"
    ],
    correct: 0,
    justification: "`dmesg` (display message) imprime el ring buffer del Kernel."
  },
  {
    number: 93,
    tema: 1,
    text: "En systemd, ¿qué comando muestra los registros de log pertenecientes ÚNICAMENTE al arranque (boot) actual del sistema?",
    options: [
      "journalctl -b 0 (o journalctl -b)",
      "journalctl -u boot",
      "journalctl --current-boot",
      "journalctl -k"
    ],
    correct: 0,
    justification: "`journalctl -b` filtra los eventos del boot en curso."
  },
  {
    number: 94,
    tema: 1,
    text: "En systemd, ¿qué comando muestra los registros de log del arranque ANTERIOR al actual?",
    options: [
      "journalctl -b -1",
      "journalctl --last-boot",
      "journalctl -b 1",
      "journalctl -p prev"
    ],
    correct: 0,
    justification: "`journalctl -b -1` recupera los logs del boot previo."
  },
  {
    number: 95,
    tema: 1,
    text: "¿Qué parámetro en `/etc/systemd/journald.conf` configura el almacenamiento persistente de los logs en disco (`/var/log/journal/`)?",
    options: [
      "Storage=persistent",
      "Storage=disk",
      "KeepLogs=yes",
      "Journal=save"
    ],
    correct: 0,
    justification: "`Storage=persistent` obliga a guardar los datos de `journald` en disco de forma permanente."
  },
  {
    number: 96,
    tema: 1,
    text: "¿Qué parámetro de la línea de comandos del Kernel le indica a Linux qué partición o UUID debe usarse como sistema de archivos raíz?",
    options: [
      "root=",
      "rootfs=",
      "drive=",
      "system_root="
    ],
    correct: 0,
    justification: "`root=/dev/sdaX` o `root=UUID=...` asigna el volumen raíz."
  },
  {
    number: 97,
    tema: 1,
    text: "¿Qué parámetro de arranque del Kernel redirige la consola de mensajes de salida a un puerto serie físico en `ttyS0`?",
    options: [
      "console=ttyS0,115200",
      "serial=ttyS0",
      "output=ttyS0",
      "redirect=serial"
    ],
    correct: 0,
    justification: "`console=ttyS0,115200` redirige la consola por el puerto serie."
  },
  {
    number: 98,
    tema: 1,
    text: "En el intérprete interactivo CLI de GRUB 2, ¿cuál es el orden sintáctico para cargar manualmente el Kernel, el initramfs e iniciar la sesión?",
    options: [
      "1. linux /vmlinuz root=...  2. initrd /initrd.img  3. boot",
      "1. kernel /vmlinuz  2. ramdisk /initrd.img  3. start",
      "1. load /vmlinuz  2. load /initrd.img  3. run",
      "1. boot /vmlinuz  2. initrd /initrd.img"
    ],
    correct: 0,
    justification: "En GRUB 2 se utiliza la palabra `linux` para la imagen del Kernel, `initrd` para la ramdisk y `boot` para ejecutar."
  },
  {
    number: 99,
    tema: 1,
    text: "¿Qué herramienta te permite verificar la consistencia de inodos y reparar un sistema de archivos ext4 desmontado antes de montar la raíz?",
    options: [
      "fsck /dev/sda1",
      "mount -repair /dev/sda1",
      "systemd-fsck /dev/sda1",
      "dd check /dev/sda1"
    ],
    correct: 0,
    justification: "`fsck` o `fsck.ext4` realiza la comprobación de integridad del sistema de archivos."
  },
  {
    number: 100,
    tema: 1,
    text: "¿Qué comando envía una notificación broadcast a todas las terminales abiertas y programa el apagado/reinicio del sistema en 5 minutos?",
    options: [
      "shutdown -r +5 \"Mensaje de aviso\"",
      "wall \"Mensaje\" && reboot",
      "systemctl reboot --delay 5",
      "init 6 --time 5"
    ],
    correct: 0,
    justification: "`shutdown -r +5 \"mensaje\"` envía el broadcast y programa el reinicio."
  }
];