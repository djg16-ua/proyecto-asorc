const preguntasTema2 = [
    // --- BLOQUE 1: COPIAS DE SEGURIDAD (tar, rsync, dd, cintas) ---
    {
        number: 1,
        tema: 2,
        text: "¿Qué opción del comando `tar` se utiliza específicamente para comprimir un archivo de archivo utilizando la herramienta `xz`?",
        options: [
            "-z",
            "-j",
            "-J",
            "-Z"
        ],
        correct: 2,
        justification: "La opción `-J` invoca la compresión xz. Por su parte, `-z` usa gzip y `-j` usa bzip2."
    },
    {
        number: 2,
        tema: 2,
        text: "¿Qué opción del comando `tar` se utiliza para comprimir un archivo con `bzip2`?",
        options: [
            "-j",
            "-z",
            "-J",
            "-Z"
        ],
        correct: 0,
        justification: "La opción `-j` aplica compresión bzip2 en tar."
    },
    {
        number: 3,
        tema: 2,
        text: "¿Qué flag del comando `tar` permite listar el contenido de un archivo `.tar` sin extraerlo en el disco?",
        options: [
            "-x",
            "-t",
            "-c",
            "-r"
        ],
        correct: 1,
        justification: "La opción `-t` (list/table of contents) enumera los archivos contenidos en el tarball."
    },
    {
        number: 4,
        tema: 2,
        text: "¿Cuál es el comando correcto para realizar una copia bit a bit directa del disco `/dev/sdb` al archivo `/backup/disco.img` en bloques de 4 megabytes?",
        options: [
            "dd if=/dev/sdb of=/backup/disco.img bs=4M",
            "dd of=/dev/sdb if=/backup/disco.img bs=4M",
            "tar -cvf /backup/disco.img /dev/sdb --bs=4M",
            "rsync -a /dev/sdb /backup/disco.img --bs=4M"
        ],
        correct: 0,
        justification: "`dd if=origen of=destino bs=tamaño_bloque`. `if` es Input File y `of` es Output File."
    },
    {
        number: 5,
        tema: 2,
        text: "Si inviertes por error los parámetros `if` y `of` ejecutando `dd if=/backup/disco.img of=/dev/sdb`, ¿qué sucede?",
        options: [
            "Se sobrescribirá por completo el dispositivo `/dev/sdb` perdiendo todos sus datos existentes.",
            "Ocurrirá un error de sintaxis y el comando no se ejecutará.",
            "Se creará una copia de respaldo de `/dev/sdb` dentro del archivo imagen.",
            "Se montará la imagen en modo de solo lectura."
        ],
        correct: 0,
        justification: "En `dd`, `of` indica el destino de escritura. Poner la unidad física en `of` destruiría los datos originales al escribir encima la imagen."
    },
    {
        number: 6,
        tema: 2,
        text: "¿Qué opción de `rsync` es la forma abreviada equivalente a habilitar el modo archivo (`-rlptgoD`), el cual preserva enlaces, permisos, tiempos, propietarios y grupos?",
        options: [
            "-a",
            "-r",
            "-z",
            "-v"
        ],
        correct: 0,
        justification: "La opción `-a` (archive) engloba la recursividad y la conservación de la metadata original."
    },
    {
        number: 7,
        tema: 2,
        text: "En `rsync`, ¿cuál es la diferencia crucial entre ejecutar `rsync -a /origen/ /destino` (con barra final en origen) y `rsync -a /origen /destino` (sin barra final)?",
        options: [
            "Con barra se copian los CONTENIDOS dentro de `/destino/`; sin barra se crea la subcarpeta `/destino/origen/`.",
            "Con barra se realiza una copia incremental; sin barra se realiza una copia completa.",
            "Sin barra borra los archivos en destino; con barra no.",
            "No existe ninguna diferencia funcional."
        ],
        correct: 0,
        justification: "La barra diagonal al final del directorio de origen en rsync evita que se cree el directorio padre en el destino, copiando solo su contenido."
    },
    {
        number: 8,
        tema: 2,
        text: "¿Qué opción de `rsync` asegura que los archivos eliminados en el directorio de origen también sean borrados en la copia del directorio de destino?",
        options: [
            "--delete",
            "--remove-source-files",
            "--purge",
            "--clean"
        ],
        correct: 0,
        justification: "`--delete` borra los archivos en el destino que ya no existen en la fuente de origen para mantener un réplica exacta."
    },
    {
        number: 9,
        tema: 1,
        text: "¿Qué archivo o dispositivo especial en `/dev/` se utiliza para interactuar con unidades de cinta SCSI en modo NO rebobinado (no-rewind)?",
        options: [
            "/dev/nst0",
            "/dev/st0",
            "/dev/tape0",
            "/dev/rst0"
        ],
        correct: 0,
        justification: "Los dispositivos con prefijo `n` (ej. `/dev/nst0`) no rebobinan automáticamente la cinta al finalizar la operación."
    },
    {
        number: 10,
        tema: 2,
        text: "¿Qué comando CLI se utiliza para controlar operaciones físicas en unidades de cinta magnética como rebobinar (`rewind`) o expulsar (`eject`)?",
        options: [
            "mt",
            "tapecntrl",
            "tapectl",
            "tar --tape-control"
        ],
        correct: 0,
        justification: "El comando `mt` (magnetic tape) gestiona las operaciones físicas en serpentines de cinta."
    },

    // --- BLOQUE 2: INSTALACIÓN DESDE CÓDIGO FUENTE (configure, make, parches) ---
    {
        number: 11,
        tema: 2,
        text: "En el proceso de compilación tradicional de tres pasos (`./configure && make && make install`), ¿cuál es la responsabilidad de `./configure`?",
        options: [
            "Comprobar las dependencias del sistema, librerías y arquitectura para generar el archivo `Makefile`.",
            "Compilar el código fuente en binarios ejecutables.",
            "Copiar los archivos binarios compilados a directorios como `/usr/local/bin`.",
            "Descomprimir el paquete tarball del código fuente."
        ],
        correct: 0,
        justification: "`./configure` verifica el entorno del sistema y construye el archivo `Makefile` adaptado al equipo."
    },
    {
        number: 12,
        tema: 2,
        text: "Si deseas cambiar el directorio de instalación por defecto de un programa compilado desde fuente de `/usr/local` a `/opt/programa`, ¿qué opción debes pasarle a `./configure`?",
        options: [
            "--prefix=/opt/programa",
            "--dir=/opt/programa",
            "--target=/opt/programa",
            "--path=/opt/programa"
        ],
        correct: 0,
        justification: "El flag `--prefix=` define el directorio raíz para los binarios y archivos generados durante `make install`."
    },
    {
        number: 13,
        tema: 2,
        text: "Durante la compilación de un software en C, si `./configure` falla indicando la falta de `gcc`, ¿qué grupo o paquete esencial se debe instalar en Debian/Ubuntu?",
        options: [
            "build-essential",
            "Development Tools",
            "gcc-complete",
            "make-compiler"
        ],
        correct: 0,
        justification: "`build-essential` instala `gcc`, `g++`, `make` y las librerías base de C en entornos Debian/Ubuntu."
    },
    {
        number: 14,
        tema: 2,
        text: "¿Qué metapaquete o grupo de paquetes equivalente se debe instalar en Red Hat / CentOS para disponer del compilador y herramientas de compilación?",
        options: [
            "\"Development Tools\"",
            "build-essential",
            "rpm-build",
            "gcc-toolchain"
        ],
        correct: 0,
        justification: "En Red Hat / CentOS se utiliza `dnf groupinstall \"Development Tools\"` o `yum groupinstall \"Development Tools\"`."
    },
    {
        number: 15,
        tema: 2,
        text: "¿Qué comando procesa las instrucciones dentro de `Makefile` para traducir el código fuente en código máquina/objetos ejecutable?",
        options: [
            "make",
            "./configure",
            "gcc-build",
            "cmake"
        ],
        correct: 0,
        justification: "`make` lee las reglas del `Makefile` y compila los objetivos definidos."
    },
    {
        number: 16,
        tema: 2,
        text: "Generalmente, ¿cuál de los tres comandos del flujo de compilación requiere permisos de superusuario (`root` o `sudo`)?",
        options: [
            "make install",
            "./configure",
            "make",
            "Todos requieren root"
        ],
        correct: 0,
        justification: "`make install` requiere permisos de root para copiar archivos en directorios protegidos del sistema como `/usr/local/bin` o `/usr/bin`."
    },
    {
        number: 17,
        tema: 2,
        text: "¿Qué herramienta se utiliza para aplicar un archivo de diferencias (`.patch` o `.diff`) al código fuente de un programa antes de compilar?",
        options: [
            "patch",
            "diff --apply",
            "update-source",
            "git apply-diff"
        ],
        correct: 0,
        justification: "El comando `patch` lee las diferencias producidas por `diff` e integra los cambios en los archivos fuente."
    },
    {
        number: 18,
        tema: 2,
        text: "Si tienes un archivo de parche `cambios.patch` generado desde la raíz del árbol de código fuente y estás situado dentro de dicho directorio, ¿qué parámetro usas con `patch` para omitir el primer nivel del prefijo de directorio en la ruta?",
        options: [
            "patch -p1 < cambios.patch",
            "patch -strip=1 < cambios.patch",
            "patch -d1 < cambios.patch",
            "patch --ignore=1 < cambios.patch"
        ],
        correct: 0,
        justification: "La opción `-p1` elimina el primer directorio de la ruta del archivo incluido dentro del archivo de parche."
    },
    {
        number: 19,
        tema: 2,
        text: "¿Qué opción del comando `patch` permite revertir o deshacer un parche que ya fue aplicado previamente?",
        options: [
            "-R",
            "-u",
            "-d",
            "-c"
        ],
        correct: 0,
        justification: "La opción `-R` (reverse) aplica las diferencias a la inversa deshaciendo los cambios."
    },

    // --- BLOQUE 3: NOTIFICACIONES A USUARIOS (write, wall, notify-send, issue, motd) ---
    {
        number: 20,
        tema: 2,
        text: "¿Qué comando permite enviar un mensaje broadcast inmediato a las terminales activas de TODOS los usuarios conectados al sistema?",
        options: [
            "wall",
            "write",
            "notify-send",
            "mesg"
        ],
        correct: 0,
        justification: "`wall` (write all) difunde el mensaje a todos los usuarios con sesiones tty/pts abiertas."
    },
    {
        number: 21,
        tema: 2,
        text: "Si deseas enviar un mensaje privado de terminal únicamente al usuario 'kevin' conectado en la terminal `tty4`, ¿qué comando usas?",
        options: [
            "write kevin tty4",
            "wall kevin tty4",
            "notify-send kevin tty4",
            "echo \"hola\" > kevin"
        ],
        correct: 0,
        justification: "La sintaxis de `write` es `write usuario [terminal]`."
    },
    {
        number: 22,
        tema: 2,
        text: "¿Qué comando permite a un usuario bloquear o permitir la recepción de mensajes enviados a través de `write` o `wall` en su terminal?",
        options: [
            "mesg",
            "chmod tty",
            "write-permission",
            "tty-lock"
        ],
        correct: 0,
        justification: "`mesg y` habilita la recepción de mensajes en la terminal y `mesg n` la bloquea."
    },
    {
        number: 23,
        tema: 2,
        text: "Si un usuario ejecuta el comando `mesg n`, ¿quién de los siguientes puede SEGUIR enviándole mensajes a su terminal utilizando `wall`?",
        options: [
            "El usuario root",
            "Cualquier usuario con permisos sudo",
            "Nadie, el bloqueo es infranqueable",
            "Cualquier usuario del mismo grupo"
        ],
        correct: 0,
        justification: "El usuario `root` anula las restricciones fijadas por `mesg n`."
    },
    {
        number: 24,
        tema: 2,
        text: "¿Qué comando de la interfaz gráfica (entorno X11/Desktop) envía notificaciones emergentes de escritorio al entorno visual del usuario?",
        options: [
            "notify-send",
            "xmessage",
            "wall --gui",
            "zenity --notify"
        ],
        correct: 0,
        justification: "`notify-send` envía notificaciones emergentes al demonio de notificaciones del escritorio."
    },
    {
        number: 25,
        tema: 2,
        text: "¿Cuál es el archivo de texto plano cuyo contenido se muestra a los usuarios ANTES del prompt de inicio de sesión (login) en una consola local?",
        options: [
            "/etc/issue",
            "/etc/motd",
            "/etc/issue.net",
            "/etc/login.warn"
        ],
        correct: 0,
        justification: "`/etc/issue` se muestra antes del login en la consola física."
    },
    {
        number: 26,
        tema: 2,
        text: "¿Qué archivo de texto plano está diseñado para mostrar advertencias o banners de bienvenida a los usuarios que se conectan de forma remota a través de red (ej. SSH o Telnet) ANTES de autenticarse?",
        options: [
            "/etc/issue.net",
            "/etc/issue",
            "/etc/motd",
            "/etc/ssh/banner"
        ],
        correct: 0,
        justification: "`/etc/issue.net` se utiliza para las conexiones de red pre-login."
    },
    {
        number: 27,
        tema: 2,
        text: "¿Cuál es el archivo cuyo contenido se muestra a los usuarios DESPUÉS de haber completado con éxito la autenticación y el inicio de sesión (login)?",
        options: [
            "/etc/motd",
            "/etc/issue",
            "/etc/profile",
            "/etc/bashrc"
        ],
        correct: 0,
        justification: "`/etc/motd` (Message of the Day) se imprime al completar el inicio de sesión exitoso."
    },

    // --- BLOQUE 4: MONITORIZACIÓN Y CAPACIDAD (CPU, MEMORIA, DISCO, RED) ---
    {
        number: 28,
        tema: 2,
        text: "¿Qué comando de monitorización muestra el uso de memoria RAM e intercambio (Swap) en el sistema expresado en valores legibles como Megabytes o Gigabytes mediante `-h` o `-m`?",
        options: [
            "free",
            "memstat",
            "vmstat",
            "top"
        ],
        correct: 0,
        justification: "`free` ofrece un resumen de memoria usada, libre, compartida, buffers/cache y swap."
    },
    {
        number: 29,
        tema: 2,
        text: "En la salida del comando `vmstat`, ¿qué indica si la columna 'b' bajo la sección de procesos tiene un valor superior a 0?",
        options: [
            "Procesos bloqueados en espera ininterrumpida de operaciones de Entrada/Salida (I/O).",
            "Procesos ejecutándose en segundo plano.",
            "Procesos zombi terminados no leídos por el padre.",
            "Número de hilos activos de la CPU."
        ],
        correct: 0,
        justification: "La columna 'b' en `vmstat` contabiliza los procesos en espera ininterrumpida ('D' state, normalmente I/O de disco)."
    },
    {
        number: 30,
        tema: 2,
        text: "En la salida de `vmstat`, ¿qué indican valores elevados en las columnas `si` y `so`?",
        options: [
            "Intensas operaciones de 'Swap In' y 'Swap Out' indicando saturación de RAM física.",
            "Entrada y salida de sockets de red en bytes/segundo.",
            "Interrupciones de software por segundo.",
            "Lecturas y escrituras en la partición `/boot`."
        ],
        correct: 0,
        justification: "`si` (swap in) y `so` (swap out) indican movimiento de páginas entre la RAM y la partición Swap."
    },
    {
        number: 31,
        tema: 2,
        text: "¿Qué comando interactivo muestra el consumo de I/O de disco en tiempo real filtrado por cada proceso individual (similar a `top` para procesador)?",
        options: [
            "iotop",
            "iostat",
            "lsof",
            "dstat"
        ],
        correct: 0,
        justification: "`iotop` monitorea en tiempo real qué procesos leen o escriben activamente en el disco."
    },
    {
        number: 32,
        tema: 2,
        text: "¿Qué comando recopila y reporta estadísticas de rendimiento del sistema (CPU, I/O, memoria) de forma histórica o en intervalos fijos (ej: `sar 1 4`)?",
        options: [
            "sar",
            "sysstat-show",
            "top",
            "uptime"
        ],
        correct: 0,
        justification: "`sar` (System Activity Reporter) de la suite `sysstat` captura estadísticas periódicas."
    },
    {
        number: 33,
        tema: 2,
        text: "¿Qué herramienta CLI se utiliza para listar todos los archivos y sockets abiertos por los procesos en ejecución?",
        options: [
            "lsof",
            "fuser",
            "ls-open",
            "procstat"
        ],
        correct: 0,
        justification: "`lsof` (List Open Files) muestra las conexiones, archivos y descriptores abiertos."
    },
    {
        number: 34,
        tema: 2,
        text: "¿Qué comando te permite identificar de forma rápida qué PID de proceso está utilizando un archivo o un punto de montaje específico (ej. `/mnt/usb`) e impedir su desmontaje?",
        options: [
            "fuser",
            "lsof",
            "umount --check",
            "Ambas opciones A y B son válidas"
        ],
        correct: 3,
        justification: "Tanto `fuser` como `lsof` muestran qué procesos ocupan un archivo o punto de montaje."
    },
    {
        number: 35,
        tema: 2,
        text: "¿Qué herramienta interactivamente muestra el consumo de ancho de banda de red agrupado por conexiones y hosts en tiempo real (similar a `top` para la red)?",
        options: [
            "iftop",
            "iptraf",
            "tcpdump",
            "netstat"
        ],
        correct: 0,
        justification: "`iftop` muestra una lista de conexiones de red ordenadas por el uso de ancho de banda."
    },
    {
        number: 36,
        tema: 2,
        text: "¿Qué utilidad avanzada de captura de paquetes permite analizar el tráfico de red en modo promiscuo desde la CLI?",
        options: [
            "tcpdump",
            "wireshark-cli",
            "ping",
            "traceroute"
        ],
        correct: 0,
        justification: "`tcpdump` es el sniffer de consola por excelencia para capturar paquetes de red."
    },

    // --- BLOQUE 5: TRAMPAS Y DETALLES DE SINTAXIS PARA DIPLOMARSE ---
    {
        number: 37,
        tema: 2,
        text: "Si un administrador ejecuta `tar -cvf backup.tar /home`, ¿qué acción realiza la opción `-c`?",
        options: [
            "Crea un nuevo archivo de archivo (create).",
            "Comprime el archivo usando gzip.",
            "Compara el archivo existente con el disco.",
            "Cambia al directorio especificado."
        ],
        correct: 0,
        justification: "`-c` indica 'create' (crear nuevo tarball)."
    },
    {
        number: 38,
        tema: 2,
        text: "En el comando `tar -xvf backup.tar`, ¿qué función cumple el flag `-x`?",
        options: [
            "Extrae los archivos (extract).",
            "Excluye los archivos indicados.",
            "Aplica compresión xz.",
            "Muestra el progreso detallado."
        ],
        correct: 0,
        justification: "`-x` indica 'extract' (extraer del tarball)."
    },
    {
        number: 39,
        tema: 2,
        text: "Al usar `tar -czvf backup.tar.gz /var/log`, ¿qué opción añade la compresión `gzip`?",
        options: [
            "-z",
            "-j",
            "-J",
            "-g"
        ],
        correct: 0,
        justification: "La `-z` minúscula activa la compresión con `gzip`."
    },
    {
        number: 40,
        tema: 2,
        text: "¿Qué sucede si ejecutas `tar -cvf /etc/datos.tar` sin especificar la ruta de archivos de origen al final del comando?",
        options: [
            "Tar dará un error indicando que falta especificar los archivos a empaquetar.",
            "Empaquetará automáticamente el directorio actual.",
            "Creará un archivo vacío sin preguntar.",
            "Empaquetará la raíz `/`."
        ],
        correct: 0,
        justification: "El comando `tar` requiere al menos una fuente o lista de archivos/directorios de origen a empaquetar."
    },
    {
        number: 41,
        tema: 2,
        text: "¿Qué opción de `rsync` permite mostrar el progreso detallado durante la transferencia de archivos?",
        options: [
            "--progress",
            "-p",
            "--show",
            "--verbose-status"
        ],
        correct: 0,
        justification: "`--progress` o `-P` muestra la velocidad y barra de progreso durante el copiado."
    },
    {
        number: 42,
        tema: 2,
        text: "Si quieres copiar por SSH con `rsync` usando el puerto no estándar 2222, ¿cuál es la sintaxis correcta?",
        options: [
            "rsync -e 'ssh -p 2222' /origen/ user@host:/destino/",
            "rsync -p 2222 /origen/ user@host:/destino/",
            "rsync --port=2222 /origen/ user@host:/destino/",
            "rsync -ssh-port 2222 /origen/ user@host:/destino/"
        ],
        correct: 0,
        justification: "Se utiliza la opción `-e` (rsh/ssh) para pasar comandos e instrucciones al cliente de shell remoto."
    },
    {
        number: 43,
        tema: 2,
        text: "¿Qué parámetro del comando `dd` define el tamaño de bloque de lectura y escritura de datos?",
        options: [
            "bs=",
            "block=",
            "count=",
            "size="
        ],
        correct: 0,
        justification: "`bs=` (block size) fija el tamaño del bloque (ej: `bs=1M`)."
    },
    {
        number: 44,
        tema: 2,
        text: "Si deseas copiar únicamente los primeros 100 bloques de un disco mediante `dd`, ¿qué opción debes usar?",
        options: [
            "count=100",
            "limit=100",
            "blocks=100",
            "stop=100"
        ],
        correct: 0,
        justification: "`count=N` limita la copia a un número exacto de bloques."
    },
    {
        number: 45,
        tema: 2,
        text: "¿Qué parámetro de `dd` permite saltarse N bloques del origen antes de comenzar la lectura?",
        options: [
            "skip=N",
            "seek=N",
            "offset=N",
            "start=N"
        ],
        correct: 0,
        justification: "`skip=N` salta N bloques en el archivo de entrada (`if`)."
    },
    {
        number: 46,
        tema: 2,
        text: "¿Qué parámetro de `dd` permite saltarse N bloques en el destino antes de comenzar la escritura?",
        options: [
            "seek=N",
            "skip=N",
            "jump=N",
            "offset=N"
        ],
        correct: 0,
        justification: "`seek=N` salta N bloques en el archivo de salida (`of`)."
    },
    {
        number: 47,
        tema: 2,
        text: "¿Cuál es el comando básico para rebobinar la cinta montada en `/dev/st0` mediante `mt`?",
        options: [
            "mt -f /dev/st0 rewind",
            "mt /dev/st0 --rewind",
            "tape -f /dev/st0 rewind",
            "mt rewind /dev/st0"
        ],
        correct: 0,
        justification: "La sintaxis estándar es `mt -f dispositivo comando`."
    },
    {
        number: 48,
        tema: 2,
        text: "En `mt`, ¿qué comando hace avanzar la cinta hasta el final de los datos grabados (End of Data) para añadir un backup al final?",
        options: [
            "eod (o eom)",
            "forward-end",
            "seek-data",
            "next-block"
        ],
        correct: 0,
        justification: "`eod` / `eom` (End of Data / End of Media) posiciona el cabezal tras el último registro existente."
    },
    {
        number: 49,
        tema: 2,
        text: "Al ejecutar `./configure`, si deseas habilitar un módulo opcional denominado 'ssl', ¿qué sintaxis se usa habitualmente?",
        options: [
            "--with-ssl (o --enable-ssl)",
            "--use-ssl",
            "--include-ssl",
            "-module ssl"
        ],
        correct: 0,
        justification: "Los scripts de GNU Autoconf usan `--with-feature` o `--enable-feature`."
    },
    {
        number: 50,
        tema: 2,
        text: "Si deseas compilar un programa usando 4 hilos de CPU en paralelo para acelerar el proceso con `make`, ¿qué opción utilizas?",
        options: [
            "make -j4",
            "make -p4",
            "make --threads=4",
            "make -c4"
        ],
        correct: 0,
        justification: "`-j` (jobs) permite ejecutar múltiples tareas de compilación simultáneamente."
    },
    {
        number: 51,
        tema: 2,
        text: "¿Qué objetivo del `Makefile` se suele ejecutar para eliminar los archivos binarios intermediarios (`.o`) compilados previamente?",
        options: [
            "make clean",
            "make remove",
            "make purge",
            "make uninstall"
        ],
        correct: 0,
        justification: "`make clean` borra los archivos objeto generados en compilaciones previas."
    },
    {
        number: 52,
        tema: 2,
        text: "¿Qué comando crea un archivo de diferencias unificado entre el archivo original `main.c` y el modificado `main_nuevo.c` apto para enviárselo a `patch`?",
        options: [
            "diff -u main.c main_nuevo.c > parche.patch",
            "patch -make main.c main_nuevo.c > parche.patch",
            "diff --patch main.c main_nuevo.c",
            "cmp -u main.c main_nuevo.c"
        ],
        correct: 0,
        justification: "`diff -u` genera el formato de diferencias unificado requerido habitualmente por `patch`."
    },
    {
        number: 53,
        tema: 2,
        text: "Para ver qué usuarios tienen actualmente sesiones abiertas en terminales con el estado de permiso de recepción de mensajes (`+` o `-`), ¿qué comando usas?",
        options: [
            "who -T",
            "w --messages",
            "users -v",
            "mesg --list"
        ],
        correct: 0,
        justification: "`who -T` (o `who -w`) añade una columna con `+` (permite escritura) o `-` (bloquea escritura)."
    },
    {
        number: 54,
        tema: 2,
        text: "Si deseas enviar un mensaje con `wall` leyendo el texto directamente desde un archivo llamado `aviso.txt`, ¿cuál es la sintaxis correcta?",
        options: [
            "wall < aviso.txt",
            "wall --file aviso.txt",
            "cat aviso.txt | write -all",
            "wall -f aviso.txt"
        ],
        correct: 0,
        justification: "`wall` acepta la entrada estándar enviada por redirección (`<`)."
    },
    {
        number: 55,
        tema: 2,
        text: "¿En qué archivo de configuración global se puede establecer un banner de texto de advertencia de login para conexiones SSH remótamente?",
        options: [
            "/etc/ssh/sshd_config (mediante la directiva Banner /etc/issue.net)",
            "/etc/ssh/banner.conf",
            "/etc/motd.d/ssh",
            "/etc/security/banner"
        ],
        correct: 0,
        justification: "Se configura especificando la ruta en la directiva `Banner` dentro de `/etc/ssh/sshd_config`."
    },
    {
        number: 56,
        tema: 2,
        text: "En sistemas Linux modernos con systemd, ¿qué directorio se utiliza para añadir fragmentos dinámicos del mensaje del día (motd)?",
        options: [
            "/etc/update-motd.d/ (o /etc/motd.d/)",
            "/var/log/motd.d/",
            "/usr/share/motd/",
            "/etc/sysctl.d/"
        ],
        correct: 0,
        justification: "Los scripts ejecutables en `/etc/update-motd.d/` generan dinámicamente el mensaje mostrado tras autenticarse."
    },
    {
        number: 57,
        tema: 2,
        text: "¿Qué herramienta te permite medir de forma aislada la tasa de uso global de procesador por cada núcleo individualmente en tiempo real?",
        options: [
            "mpstat -P ALL",
            "cpustat -a",
            "sar -m",
            "vmstat -cpu"
        ],
        correct: 0,
        justification: "`mpstat -P ALL` de la suite `sysstat` desglosa el uso por núcleo lógico/físico."
    },
    {
        number: 58,
        tema: 2,
        text: "En el comando `top`, ¿qué tecla debes pulsar para ordenar la lista de procesos activos según su uso de memoria RAM de mayor a menor?",
        options: [
            "M",
            "P",
            "N",
            "T"
        ],
        correct: 0,
        justification: "En `top`, pulsar `M` ordena por uso de memoria RAM y `P` por uso de CPU."
    },
    {
        number: 59,
        tema: 2,
        text: "En el comando `top`, ¿qué tecla debes pulsar para ordenar la lista de procesos según el consumo de CPU?",
        options: [
            "P",
            "M",
            "C",
            "K"
        ],
        correct: 0,
        justification: "Pulsar `P` ordena la lista por uso de procesador."
    },
    {
        number: 60,
        tema: 2,
        text: "¿Qué comando te permite ver el espacio en disco consumido de forma resumida por una carpeta específica (ej: `/var/log`)?",
        options: [
            "du -sh /var/log",
            "df -h /var/log",
            "ls -lh /var/log",
            "stat -s /var/log"
        ],
        correct: 0,
        justification: "`du -sh` (disk usage summary human-readable) calcula el tamaño total de la carpeta especificada."
    },
    {
        number: 61,
        tema: 2,
        text: "¿Qué comando muestra el espacio ocupado y disponible de los sistemas de archivos montados?",
        options: [
            "df -h",
            "du -h",
            "mount -s",
            "lsblk -f"
        ],
        correct: 0,
        justification: "`df` (disk free) analiza el espacio libre a nivel de sistema de archivos."
    },
    {
        number: 62,
        tema: 2,
        text: "¿Qué opción del comando `df` muestra la información sobre la cantidad de inodos utilizados y libres en lugar de bloques de espacio?",
        options: [
            "-i",
            "-a",
            "-T",
            "-k"
        ],
        correct: 0,
        justification: "`df -i` reporta la estructura de inodos (Iused, IFree, IUse%)."
    },
    {
        number: 63,
        tema: 2,
        text: "¿Qué utilidad muestra estadísticas avanzadas de E/S de dispositivos de disco (como %util, await, r/s, w/s)?",
        options: [
            "iostat -x",
            "vmstat -d",
            "sar -d",
            "Todas las anteriores proveen información de I/O de disco"
        ],
        correct: 3,
        justification: "Tanto `iostat -x`, `vmstat -d` como `sar -d` entregan estadísticas detalladas de discos."
    },
    {
        number: 64,
        tema: 2,
        text: "¿Qué significa el valor '%util' cercano al 100% en el reporte de `iostat -x`?",
        options: [
            "El dispositivo de almacenamiento está saturado al límite de su capacidad de atención de peticiones (cuello de botella de E/S).",
            "El disco duro está lleno en un 100% de su capacidad en GB.",
            "La CPU está al 100% de su carga.",
            "La tasa de transferencia de la red está agotada."
        ],
        correct: 0,
        justification: "`%util` al 100% indica que el dispositivo de almacenamiento no da más de sí y genera colas de I/O."
    },
    {
        number: 65,
        tema: 2,
        text: "¿Qué comando te permite cambiar la prioridad de ejecución (valor nice) de un proceso que ya está corriendo mediante su PID?",
        options: [
            "renice",
            "nice",
            "chpriority",
            "setnice"
        ],
        correct: 0,
        justification: "`renice` altera la prioridad de un proceso ya lanzado. `nice` ajusta la prioridad al arrancarlo."
    },
    {
        number: 66,
        tema: 2,
        text: "En el sistema de prioridades Nice en Linux, ¿qué rango de valores es posible asignar?",
        options: [
            "-20 (máxima prioridad) a +19 (mínima prioridad)",
            "0 a 100",
            "+20 a -19",
            "1 a 99"
        ],
        correct: 0,
        justification: "Los valores nice van de -20 (más amable con la CPU, prioridad más alta) a +19 (prioridad más baja)."
    },
    {
        number: 67,
        tema: 2,
        text: "¿Qué usuario puede asignar valores de nice negativos (prioridad alta, por debajo de 0) a los procesos?",
        options: [
            "Únicamente el usuario root",
            "Cualquier usuario sobre sus propios procesos",
            "Cualquier miembro del grupo wheel",
            "Ningún usuario, son calculados automáticamente por el kernel"
        ],
        correct: 0,
        justification: "Solo el superusuario `root` puede asignar o incrementar la prioridad fijando un nice negativo."
    },
    {
        number: 68,
        tema: 2,
        text: "¿Qué comando muestra el uso de memoria virtual mapeada especificando los bloques y librerías cargadas de un PID concreto?",
        options: [
            "pmap",
            "vmstat",
            "meminfo",
            "lsof -m"
        ],
        correct: 0,
        justification: "`pmap` reporta el mapa de memoria asignado a un proceso específico."
    },
    {
        number: 69,
        tema: 2,
        text: "¿En qué directorio del sistema de archivos procfs se puede inspeccionar la información detallada del hardware de CPU del equipo?",
        options: [
            "/proc/cpuinfo",
            "/sys/cpu/info",
            "/proc/processor",
            "/proc/hardware/cpu"
        ],
        correct: 0,
        justification: "`/proc/cpuinfo` expone el modelo, núcleos, velocidad y flags de la CPU."
    },
    {
        number: 70,
        tema: 2,
        text: "¿En qué directorio procfs se consulta la información en tiempo real sobre el desglose de memoria del sistema?",
        options: [
            "/proc/meminfo",
            "/sys/memory/status",
            "/proc/ram",
            "/proc/memory"
        ],
        correct: 0,
        justification: "`/proc/meminfo` expone los contadores detallados de RAM y Swap."
    },
    {
        number: 71,
        tema: 2,
        text: "¿Qué comando de la suite `iproute2` muestra las estadísticas de bytes de tráfico enviadas y recibidas en cada interfaz de red?",
        options: [
            "ip -s link",
            "ifconfig -a",
            "netstat -i",
            "Todas las anteriores muestran estadísticas de red"
        ],
        correct: 3,
        justification: "Tanto `ip -s link`, `ifconfig` como `netstat -i` muestran estadísticas de los paquetes/bytes."
    },
    {
        number: 72,
        tema: 2,
        text: "¿Qué utilidad interactiva ncurses monitorea las conexiones de red TCP/UDP locales y remotas ofreciendo estadísticas por protocolo e interfaz?",
        options: [
            "iptraf (o iptraf-ng)",
            "tcpdump",
            "netstat",
            "ss"
        ],
        correct: 0,
        justification: "`iptraf` provee una consola interactiva para monitorizar tráfico y sockets."
    },
    {
        number: 73,
        tema: 2,
        text: "¿Qué herramienta es el sustituto moderno del comando `netstat` para examinar sockets y conexiones activas?",
        options: [
            "ss",
            "ip socket",
            "sockstat",
            "lsof -net"
        ],
        correct: 0,
        justification: "`ss` (socket statistics) reemplaza al clásico `netstat` ofreciendo mayor rapidez."
    },
    {
        number: 74,
        tema: 2,
        text: "Si ejecutas `ss -tulpn`, ¿qué significa la opción `-l`?",
        options: [
            "Muestra únicamente los sockets que están en escucha (Listening).",
            "Muestra las conexiones locales.",
            "Limita el resultado a 10 líneas.",
            "Muestra los logs de auditoría."
        ],
        correct: 0,
        justification: "`-l` filtra para mostrar únicamente los servicios a la escucha (listening)."
    },
    {
        number: 75,
        tema: 2,
        text: "En el comando `ss -tulpn`, ¿qué función cumple el parámetro `-p`?",
        options: [
            "Muestra el proceso (PID y nombre) al que pertenece cada socket.",
            "Muestra el puerto numérico.",
            "Filtra por protocolo Ping/ICMP.",
            "Muestra la prioridad del tráfico."
        ],
        correct: 0,
        justification: "`-p` muestra los procesos asociados al socket abierto."
    },
    {
        number: 76,
        tema: 2,
        text: "Si detectas que la CPU tiene un uso muy bajo pero la carga del sistema (load average) es anormalmente alta, ¿cuál es la causa más probable?",
        options: [
            "Un cuello de botella en las operaciones de I/O de disco (procesos bloqueados esperando disco).",
            "Un fallo de memoria RAM físicamente defectuosa.",
            "Un sobrecalentamiento de la GPU.",
            "Una sobrecarga en la tarjeta de red."
        ],
        correct: 0,
        justification: "Procesos en estado Uninterruptible Sleep (I/O blocking / D state) incrementan la carga general del sistema sin consumir CPU."
    },
    {
        number: 77,
        tema: 2,
        text: "¿Qué comando te permite rastrear las llamadas al sistema (system calls) y señales efectuadas por un programa en ejecución para diagnosticar cuellos de botella o fallos?",
        options: [
            "strace",
            "ltrace",
            "ptrace",
            "valgrind"
        ],
        correct: 0,
        justification: "`strace` intercepta y registra las llamadas al sistema que realiza un proceso."
    },
    {
        number: 78,
        tema: 2,
        text: "¿Qué comando se utiliza para rastrear las llamadas a librerías dinámicas (`.so`) que realiza un programa?",
        options: [
            "ltrace",
            "strace",
            "libcheck",
            "ldd"
        ],
        correct: 0,
        justification: "`ltrace` intercepta llamadas a librerías de usuario compartidas."
    },
    {
        number: 79,
        tema: 2,
        text: "¿Qué comando te muestra las librerías compartidas asociadas que necesita un binario ejecutable para funcionar?",
        options: [
            "ldd",
            "lsof",
            "ls-libs",
            "strace -l"
        ],
        correct: 0,
        justification: "`ldd` (list dynamic dependencies) imprime las bibliotecas dinámicas compartidas."
    },
    {
        number: 80,
        tema: 2,
        text: "Si instalas una librería compilada manualmente en `/usr/local/lib`, ¿qué comando debes ejecutar para actualizar la caché del enlazador dinámico de bibliotecas?",
        options: [
            "ldconfig",
            "ldd --update",
            "librefresh",
            "systemctl reload ld"
        ],
        correct: 0,
        justification: "`ldconfig` crea los enlaces necesarios y actualiza la caché `/etc/ld.so.cache`."
    },
    {
        number: 81,
        tema: 2,
        text: "¿En qué archivo de configuración se definen las rutas adicionales de búsqueda de librerías para `ldconfig`?",
        options: [
            "/etc/ld.so.conf",
            "/etc/libraries.conf",
            "/etc/ld.d.conf",
            "/usr/lib/ld.conf"
        ],
        correct: 0,
        justification: "`/etc/ld.so.conf` (y archivos en `/etc/ld.so.conf.d/`) especifica los directorios de librerías."
    },
    {
        number: 82,
        tema: 2,
        text: "¿Qué herramienta genera gráficos e historias en formato de base de datos redonda sobre el rendimiento para almacenar métricas del sistema consumiendo un espacio constante en disco?",
        options: [
            "RRDtool",
            "Collectd",
            "Nagios",
            "Cacti"
        ],
        correct: 0,
        justification: "RRDtool (Round Robin Database tool) guarda series temporales de datos manteniendo un tamaño fijo."
    },
    {
        number: 83,
        tema: 2,
        text: "¿Qué demonio recopila periódicamente estadísticas del sistema y puede enviarlas a RRDtool para su representación gráfica?",
        options: [
            "collectd",
            "sysstatd",
            "monit",
            "sar-daemon"
        ],
        correct: 0,
        justification: "`collectd` es un demonio liviano que reúne métricas del sistema y del rendimiento."
    },
    {
        number: 84,
        tema: 2,
        text: "¿Qué tipo de copia de seguridad copia ÚNICAMENTE los archivos que han cambiado desde la ÚLTIMA copia de seguridad completa (nivel 0)?",
        options: [
            "Copia Diferencial",
            "Copia Incremental",
            "Copia Espejo",
            "Copia Sintética"
        ],
        correct: 0,
        justification: "Una copia diferencial respalda todas las modificaciones ocurridas desde la última copia completa."
    },
    {
        number: 85,
        tema: 2,
        text: "¿Qué tipo de copia de seguridad respalda ÚNICAMENTE los datos cambiados desde la ÚLTIMA copia de seguridad (sea esta completa o incremental)?",
        options: [
            "Copia Incremental",
            "Copia Diferencial",
            "Copia Parcial",
            "Copia Delta"
        ],
        correct: 0,
        justification: "Una copia incremental almacena los datos modificados con respecto al último punto de restauración realizado."
    },
    {
        number: 86,
        tema: 2,
        text: "En una estrategia de restauración tras un desastre con backups incrementales diarios y un backup completo el domingo, ¿qué archivos se necesitan recuperar para volver al estado del jueves?",
        options: [
            "El backup completo del domingo MÁS todos los backups incrementales del lunes, martes, miércoles y jueves.",
            "Solo el backup incremental del jueves.",
            "El backup completo del domingo más únicamente el incremental del jueves.",
            "Los backups incrementales del lunes al jueves sin el del domingo."
        ],
        correct: 0,
        justification: "Para restaurar backups incrementales se requiere la copia completa base más cada una de las copias incrementales intermedias secuenciales."
    },
    {
        number: 87,
        tema: 2,
        text: "En una estrategia de restauración con backups diferenciales diarios y un backup completo el domingo, ¿qué archivos se necesitan para volver al estado del jueves?",
        options: [
            "El backup completo del domingo MÁS únicamente el backup diferencial del jueves.",
            "El backup completo del domingo más todos los diferenciales del lunes, martes, miércoles y jueves.",
            "Solo el backup diferencial del jueves.",
            "Se requiere una imagen de disco dd."
        ],
        correct: 0,
        justification: "Con la estrategia diferencial sólo se requiere la última copia completa y la copia diferencial correspondiente al día que se desea restaurar."
    },
    {
        number: 88,
        tema: 2,
        text: "¿Qué comando de `tar` permite agregar archivos nuevos al final de un archivo `.tar` ya existente sin volver a empaquetarlo por completo?",
        options: [
            "-r (or --append)",
            "-u (or --update)",
            "-A (or --catenate)",
            "-c (or --create)"
        ],
        correct: 0,
        justification: "La opción `-r` / `--append` añade archivos al final de un archivo tar sin compresión."
    },
    {
        number: 89,
        tema: 2,
        text: "¿Qué opción del comando `tar` actualiza los archivos en el archivo tar únicamente si la versión en disco es más reciente que la empaquetada?",
        options: [
            "-u (or --update)",
            "-r (or --append)",
            "-m (or --touch)",
            "-f"
        ],
        correct: 0,
        justification: "`-u` (`--update`) añade únicamente los archivos modificados desde la creación del paquete tar."
    },
    {
        number: 90,
        tema: 2,
        text: "Si deseas excluir ciertos directorios (por ejemplo `/proc` y `/sys`) al crear una copia con `tar`, ¿qué opción utilizas?",
        options: [
            "--exclude=/proc --exclude=/sys",
            "--ignore=/proc,/sys",
            "-skip /proc /sys",
            "-no-dir /proc /sys"
        ],
        correct: 0,
        justification: "`--exclude=` excluye los patrones o rutas especificadas durante la empaquetación."
    },
    {
        number: 91,
        tema: 2,
        text: "Para preservar las ACLs (Listas de Control de Acceso) y atributos extendidos con `tar` durante un backup, ¿qué opciones deben incluirse?",
        options: [
            "--acls y --xattrs",
            "--preserve-permissions-all",
            "-p --extended",
            "--security"
        ],
        correct: 0,
        justification: " `--acls` y `--xattrs` fuerzan a `tar` a respaldar las ACLs de POSIX y atributos extendidos."
    },
    {
        number: 92,
        tema: 2,
        text: "¿Qué comando muestra la lista de procesos ordenados en forma de árbol para analizar las relaciones padre/hijo?",
        options: [
            "pstree",
            "ps -tree",
            "top -t",
            "proc-tree"
        ],
        correct: 0,
        justification: "`pstree` dibuja una representación visual en árbol de la jerarquía de procesos."
    },
    {
        number: 93,
        tema: 2,
        text: "¿Qué comando de la suite `ps` muestra todos los procesos del sistema con detalles de formato completo estilo BSD?",
        options: [
            "ps aux",
            "ps -ef",
            "ps --all",
            "Ambas A y B son ampliamente usadas"
        ],
        correct: 3,
        justification: "Tanto `ps aux` (estilo BSD) como `ps -ef` (estilo System V) muestran la totalidad de los procesos."
    },
    {
        number: 94,
        tema: 2,
        text: "En la salida del comando `uptime`, ¿qué representan los tres números numéricos al final?",
        options: [
            "La carga media del sistema (load average) en los últimos 1, 5 y 15 minutos respectivamente.",
            "El uso de CPU en los últimos 1, 5 y 15 segundos.",
            "Los usuarios conectados, hilos y procesos en ejecucion.",
            "El porcentaje de RAM usada, buffers y swap."
        ],
        correct: 0,
        justification: "Representan la media de procesos en cola de ejecución (load average) durante 1, 5 y 15 minutos."
    },
    {
        number: 95,
        tema: 2,
        text: "Si un sistema de 4 núcleos (4 CPU cores) tiene una carga media (load average) de 4.0 a los 15 minutos, ¿cuál es el estado de rendimiento del sistema?",
        options: [
            "Sistemas plenamente utilizados al 100% de su capacidad pero sin saturación ni colas.",
            "Saturado al 400% (a punto de colapsar).",
            "Inactivo al 75%.",
            "Un núcleo sobrecargado y tres durmiendo."
        ],
        correct: 0,
        justification: "En un sistema quad-core, una carga de 4.00 significa que los 4 núcleos están ocupados exactamente al 100% sin generar cola de retraso."
    },
    {
        number: 96,
        tema: 2,
        text: "¿Qué comando te permite enviar una señal personalizada a un proceso mediante su nombre en lugar de su PID?",
        options: [
            "pkill (o killall)",
            "renice",
            "sigprocess",
            "pterm"
        ],
        correct: 0,
        justification: "`pkill` y `killall` permiten enviar señales utilizando el nombre del proceso."
    },
    {
        number: 97,
        tema: 2,
        text: "¿Qué número de señal envía por defecto el comando `kill <PID>` si no se especifica ningún argumento?",
        options: [
            "SIGTERM (15)",
            "SIGKILL (9)",
            "SIGHUP (1)",
            "SIGINT (2)"
        ],
        correct: 0,
        justification: "Por defecto, `kill` envía la señal 15 (`SIGTERM`), solicitando una finalización limpia al proceso."
    },
    {
        number: 98,
        tema: 2,
        text: "¿Qué número de señal envía una orden de finalización forzada e inmediata a nivel de kernel que el proceso NO puede interceptar ni ignorar?",
        options: [
            "SIGKILL (9)",
            "SIGTERM (15)",
            "SIGSTOP (19)",
            "SIGHUP (1)"
        ],
        correct: 0,
        justification: "La señal 9 (`SIGKILL`) destruye el proceso incondicionalmente a nivel del Kernel."
    },
    {
        number: 99,
        tema: 2,
        text: "¿Qué señal se utiliza habitualmente para ordenar a un demonio/servicio que relea sus archivos de configuración sin detener el proceso?",
        options: [
            "SIGHUP (1)",
            "SIGTERM (15)",
            "SIGUSR1 (10)",
            "SIGCONT (18)"
        ],
        correct: 0,
        justification: "La señal 1 (`SIGHUP` - Hang Up) se utiliza convencionalmente para que los demonios recarguen su configuración."
    },
    {
        number: 100,
        tema: 2,
        text: "¿Qué comando muestra información en tiempo real sobre los sockets de red, puertos abiertos y tablas de ruteo de forma similar a `netstat` pero más rápido?",
        options: [
            "ss",
            "ip route",
            "nmap",
            "netmonitor"
        ],
        correct: 0,
        justification: "`ss` (Socket Statistics) analiza el estado de sockets del sistema de forma eficiente desde el espacio de kernel."
    }
];