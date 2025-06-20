let handler = async (m, { conn, args }) => {
    let userId = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    let user = global.db.data.users[userId]
    let name = conn.getName(userId)
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let totalCommands = Object.values(global.plugins).filter((v) => v.help && v.tags).length
    
    let txt = `
Hola! Soy  *${botname}*  ≽^•⩊•^≼
Aquí tienes la lista de comandos
╭┈ ↷
│ִ𖤐 Cliente » @${userId.split('@')[0]}
│✮ Bot » ${(conn.user.jid == global.conn.user.jid ? 'Principal 🅥' : 'Prem Bot 🅑')}
│ⴵ Activada » ${uptime} 
│✧ Comandos » ${totalCommands} 
│✰ Usuarios » ${totalreg}
│🜸 Baileys » Multi Device 
│❀ Modo » Publico 
╰─────────────────
Crea un *Sub-Bot* con tu número utilizando *#qr* o *#code*

⋆｡𖦹˚｡⋆⋆｡𖦹°｡⋆『 Info-Bot 』⋆｡𖦹˚｡⋆⋆｡𖦹°｡⋆

❍ Comandos para ver estado e información de la Bot.
ִ ࣪𖤐 *#help • #menu*
> ✮ Ver la lista de comandos de la Bot.
ִ ࣪𖤐 *#bots • #sockets*
> ✮ Ver la lista de Sub-Bots activos.
ִ ࣪𖤐 *#code • #qr*
> ✮ Crea una sesión de Sub-Bot.
ִ ࣪𖤐 *#infobot • #infobot*
> ✮ Ver la información completa de la Bot.
ִ ࣪𖤐 *#p • #ping*
> ✮ Ver la velocidad de respuesta del Bot.
ִ ࣪𖤐 *#creador*
> ✮ Contacto del creador de la Bot.
ִ ࣪𖤐 *#status • #estado*
> ✮ Ver el estado actual de la Bot.
ִ ࣪𖤐 *#links • #grupos*
> ✮ Ver los enlaces oficiales de la Bot.
ִ ࣪𖤐 *#sug • #newcommand*
> ✮ Sugiere un nuevo comando.
ִ ࣪𖤐 *#reporte • #reportar*
> ✮ Reporta alguna falla o problema de la Bot.
ִ ࣪𖤐 *#sistema • #system*
> ✮ Ver estado del sistema de alojamiento.
ִ ࣪𖤐 *#speed • #speedtest*
> ✮ Ver las estadísticas de velocidad de la Bot.
ִ ࣪𖤐 *#views • #usuarios*
> ✮ Ver la cantidad de usuarios registrados en el sistema.
ִ ࣪𖤐 *#funciones • #totalfunciones*
> ✮ Ver todas las funciones de la Bot.
ִ ࣪𖤐 *#ds • #fixmsgespera*
> ✮ Eliminar archivos de sesión innecesarios.
ִ ࣪𖤐 *#uptime • #runtime*
> ✮ Ver tiempo activo o en linea de la Bot.
 ࣪𖤐 *#staff • #colaboradores*
> ✮ Ver la lista de desarrolladores de la Bot.
ִ ࣪𖤐 *#editautoresponder*
> ✮ Configurar un Prompt personalizado de la Bot.

ᯓ★๋ ࣭ ⭑๋ ₊⊹ ݁˖. ݁⭑๋꩜『 Buscadores 』ᯓ★๋ ࣭ ⭑๋ ₊⊹ ݁˖. ݁⭑๋꩜

❍ Comandos para realizar búsquedas en distintas plataformas.
ִ ࣪𖤐 *#tiktoksearch • #tiktoks*
> ✮ Buscador de videos de tiktok.
ִ ࣪𖤐 *#tweetposts*
> ✮ Buscador de posts de Twitter/X.
ִ ࣪𖤐 *#ytsearch • #yts*
> ✮ Realiza búsquedas de Youtube.
ִ ࣪𖤐 *#githubsearch*
> ✮ Buscador de usuarios de GitHub.
ִ ࣪𖤐 *#cuevana • #cuevanasearch*
> ✮ Buscador de películas/series por Cuevana.
ִ ࣪𖤐 *#google*
> ✮ Realiza búsquedas por Google.
ִ ࣪𖤐 *#pin • #pinterest*
> ✮ Buscador de imagenes de Pinterest.
ִ ࣪𖤐 *#imagen • #image*
> ✮ buscador de imagenes de Google.
ִ ࣪𖤐 *#animesearch • #animess*
> ✮ Buscador de animes de tioanime.
ִ ࣪𖤐 *#animei • #animeinfo*
> ✮ Buscador de capítulos de #animesearch.
ִ ࣪𖤐 *#infoanime*
> ✮ Buscador de información de anime/manga.
ִ ࣪𖤐 *#npmjs*
> ✮ Buscandor de npmjs.

⋆｡ﾟ☁︎｡⋆｡ ﾟ☾ ﾟ｡⋆『 Descargas 』⋆｡ﾟ☁︎｡⋆｡ ﾟ☾ ﾟ｡⋆

❍ Comandos de descargas para varios archivos.
ִ ࣪𖤐 *#tiktok • #tt*
> ✮ Descarga videos de TikTok.
ִ ࣪𖤐 *#mediafire • #mf*
> ✮ Descargar un archivo de MediaFire.
ִ ࣪𖤐 *#pinvid • #pinvideo* + [enlace]
> ✮ Descargar vídeos de Pinterest. 
ִ ࣪𖤐 *#mega • #mg* + [enlace]
> ✮ Descargar un archivo de MEGA.
ִ ࣪𖤐 *#play • #play2*
> ✮ Descarga música/video de YouTube.
ִ ࣪𖤐 *#ytmp3 • #ytmp4*
> ✮ Descarga música/video de YouTube mediante url.
ִ ࣪𖤐 *#fb • #facebook*
> ✮ Descarga videos de Facebook.
ִ ࣪𖤐 *#twitter • #x* + [Link]
> ✮ Descargar un video de Twitter/X
ִ ࣪𖤐 *#ig • #instagram*
> ✮ Descarga contenido de Instagram.
ִ ࣪𖤐 *#tts • #tiktoks* + [busqueda]
> ✮ Buscar videos de tiktok 
ִ ࣪𖤐 *#terabox • #tb* + [enlace]
> ✮ Descargar archivos por Terabox.
ִ ࣪𖤐 *#gdrive • #drive* + [enlace]
> ✮ Descargar archivos por Google Drive.
ִ ࣪𖤐 *#ttimg • #ttmp3* + <url>
> ✮ Descarga fotos/audios de tiktok. 
ִ ࣪𖤐 *#gitclone* + <url> 
> ✮ Descarga un repositorio de github.
ִ ࣪𖤐 *#apk • #modapk*
> ✮ Descarga un apk de Aptoide.
ִ ࣪𖤐 *#tiktokrandom • #ttrandom*
> ✮ Descarga un video aleatorio de tiktok.
ִ ࣪𖤐 *#npmdl • #npmdownloader*
> ✮ Descarga paquetes de NPMJs.
ִ ࣪𖤐 *#animelinks • #animedl*
> ✮ Descarga Links disponibles de descargas.

₊‧.°.⋆✮⋆.°.‧₊『 Stickers 』₊‧.°.⋆✮⋆.°.‧₊

❍ Comandos para creaciones de stickers etc.
ִ ࣪𖤐 *#sticker • #s*
> ✮ Crea stickers de (imagen/video)
ִ ࣪𖤐 *#setmeta*
> ✮ Estable un pack y autor para los stickers.
ִ ࣪𖤐 *#delmeta*
> ✮ Elimina tu pack de stickers.
ִ ࣪𖤐 *#pfp • #getpic*
> ✮ Obtén la foto de perfil de un usuario.
ִ ࣪𖤐 *#qc*
> ✮ Crea stickers con texto o de un usuario.
ִ ࣪𖤐 *#toimg • #img*
> ✮ Convierte stickers en imagen.
ִ ࣪𖤐 *#brat • #ttp • #attp*︎ 
> ✮ Crea stickers con texto.
ִ ࣪𖤐 *#emojimix*
> ✮ Fuciona 2 emojis para crear un sticker.
ִ ࣪𖤐 *#wm*
> ✮ Cambia el nombre de los stickers.

₊‧.°.⋆✮⋆.°.‧₊『 Herramientas 』₊‧.°.⋆✮⋆.°.‧₊

❍ Comandos de herramientas con muchas funciones.
ִ ࣪𖤐 *#calcular • #calcular • #cal*
> ✮ Calcular todo tipo de ecuaciones.
ִ ࣪𖤐 *#tiempo • #clima*
> ✮ Ver el clima de un pais.
ִ ࣪𖤐 *#horario*
> ✮ Ver el horario global de los países.
ִ ࣪𖤐 *#fake • #fakereply*
> ✮ Crea un mensaje falso de un usuario.
ִ ࣪𖤐 *#hd*
> ✮ Mejora la calidad de una imagen.
ִ ࣪𖤐 *#letra*
> ✮ Cambia la fuente de las letras.
ִ ࣪𖤐 *#read • #readviewonce • #ver*
> ✮ Ver imágenes de una sola vista.
ִ ࣪𖤐 *#whatmusic • #shazam*
> ✮ Descubre el nombre de canciones o vídeos.
ִ ࣪𖤐 *#ss • #ssweb*
> ✮ Ver el estado de una página web.
ִ ࣪𖤐 *#length • #tamaño*
> ✮ Cambia el tamaño de imágenes y vídeos.
ִ ࣪𖤐 *#say • #decir* + [texto]
> ✮ Repetir un mensaje.
ִ ࣪𖤐 *#todoc • #toducument*
> ✮ Crea documentos de (audio, imágenes y vídeos).
ִ ࣪𖤐 *#translate • #traducir • #trad*
> ✮ Traduce palabras en otros idiomas.

• :･ﾟ⊹˚• \`『 Grupos 』\` •˚⊹:･ﾟ•

❍ Comandos de grupos para una mejor gestión de ellos.
ִ ࣪𖤐 *#config • #on*
> ✮ Ver opciones de configuración de grupos.
ִ ࣪𖤐 *#hidetag*
> ✮ Envia un mensaje mencionando a todos los usuarios
ִ ࣪𖤐 *#gp • #infogrupo*
> ✮  Ver la Informacion del grupo.
ִ ࣪𖤐 *#linea • #listonline*
> ✮ Ver la lista de los usuarios en linea.
ִ ࣪𖤐 *#setwelcome*
> ✮ Establecer un mensaje de bienvenida personalizado.
ִ ࣪𖤐 *#setbye*
> ✮ Establecer un mensaje de despedida personalizado.
ִ ࣪𖤐 *#link*
> ✮ El bot envia el link del grupo.
ִ ࣪𖤐 *#admins • #admin*
> ✮ Mencionar a los admins para solicitar ayuda.
ִ ࣪𖤐 *#restablecer • #revoke*
> ✮ Restablecer el enlace del grupo.
ִ ࣪𖤐 *#grupo • #group* [open / abrir]
> ✮ Cambia ajustes del grupo para que todos los usuarios envien mensaje.
ִ ࣪𖤐 *#grupo • #gruop* [close / cerrar]
> ✮ Cambia ajustes del grupo para que solo los administradores envien mensaje.
ִ ࣪𖤐 *#kick* [número / mension]
> ✮ Elimina un usuario de un grupo.
ִ ࣪𖤐 *#add • #añadir • #agregar* [número]
> ✮ Invita a un usuario a tu grupo.
ִ ࣪𖤐 *#promote* [mension / etiquetar]
> ✮ El bot dara administrador al usuario mencionando.
ִ ࣪𖤐 *#demote* [mension / etiquetar]
> ✮ El bot quitara administrador al usuario mencionando.
ִ ࣪𖤐 *#gpbanner • #groupimg*
> ✮ Cambiar la imagen del grupo.
ִ ࣪𖤐 *#gpname • #groupname*
> ✮ Cambiar el nombre del grupo.
ִ ࣪𖤐 *#gpdesc • #groupdesc*
> ✮ Cambiar la descripción del grupo.
ִ ࣪𖤐 *#advertir • #warn • #warning*
> ✮ Darle una advertencia aún usuario.
ִ ࣪𖤐 ︎*#unwarn • #delwarn*
> ✮ Quitar advertencias.
ִ ࣪𖤐 *#advlist • #listadv*
> ✮ Ver lista de usuarios advertidos.
ִ ࣪𖤐 *#bot on*
> ✮ Enciende el bot en un grupo.
ִ ࣪𖤐 *#bot off*
> ✮ Apaga el bot en un grupo.
ִ ࣪𖤐 *#mute* [mension / etiquetar]
> ✮ El bot elimina los mensajes del usuario.
ִ ࣪𖤐 *#unmute* [mension / etiquetar]
> ✮ El bot deja de eliminar los mensajes del usuario.
ִ ࣪𖤐 *#encuesta • #poll*
> ✮ Crea una encuesta.
ִ ࣪𖤐 *#delete • #del*
> ✮ Elimina mensaje de otros usuarios.
ִ ࣪𖤐 *#fantasmas*
> ✮ Ver lista de inactivos del grupo.
ִ ࣪𖤐 *#kickfantasmas*
> ✮ Elimina a los inactivos del grupo.
ִ ࣪𖤐 *#invocar • #tagall • #todos*
> ✮ Invoca a todos los usuarios de un grupo.
ִ ࣪𖤐 *#setemoji • #setemo*
> ✮ Cambia el emoji que se usa en la invitación de usuarios.
ִ ࣪𖤐 *#listnum • #kicknum*
> ✮ Elimine a usuario por el prefijo de país.

₊‧.°.⋆✮⋆.°.‧₊『 Economia 』₊‧.°.⋆✮⋆.°.‧₊

❍ Comandos de economía y rpg para ganar dinero y otros recursos.
ִ ࣪𖤐 *#w • #work • #trabajar*
> ✮ Trabaja para ganar ${moneda}.
ִ ࣪𖤐 *#slut • #protituirse*
> ✮ Trabaja como prostituta y gana ${moneda}.
ִ ࣪𖤐 *#cf • #suerte*
> ✮ Apuesta tus ${moneda} a cara o cruz.
ִ ࣪𖤐 *#crime • #crimen
> ✮ Trabaja como ladrón para ganar ${moneda}.
ִ ࣪𖤐 *#ruleta • #roulette • #rt*
> ✮ Apuesta ${moneda} al color rojo o negro.
ִ ࣪𖤐 *#casino • #apostar*
> ✮ Apuesta tus ${moneda} en el casino.
ִ ࣪𖤐 *#slot*
> ✮ Apuesta tus ${moneda} en la ruleta y prueba tu suerte.
ִ ࣪𖤐 *#cartera • #wallet*
> ✮ Ver tus ${moneda} en la cartera.
ִ ࣪𖤐 *#banco • #bank*
> ✮ Ver tus ${moneda} en el banco.
ִ ࣪𖤐 *#deposit • #depositar • #d*
> ✮ Deposita tus ${moneda} al banco.
ִ ࣪𖤐 *#with • #retirar • #withdraw*
> ✮ Retira tus ${moneda} del banco.
ִ ࣪𖤐 *#transfer • #pay*
> ✮ Transfiere ${moneda} o XP a otros usuarios.
ִ ࣪𖤐 *#miming • #minar • #mine*
> ✮ Trabaja como minero y recolecta recursos.
ִ ࣪𖤐 *#buyall • #buy*
> ✮ Compra ${moneda} con tu XP.
ִ ࣪𖤐 *#daily • #diario*
> ✮ Reclama tu recompensa diaria.
ִ ࣪𖤐 *#cofre*
> ✮ Reclama un cofre diario lleno de recursos.
ִ ࣪𖤐 *#weekly • #semanal*
> ✮ Reclama tu regalo semanal.
ִ ࣪𖤐 *#monthly • #mensual*
> ✮ Reclama tu recompensa mensual.
ִ ࣪𖤐 *#steal • #robar • #rob*
> ✮ Intenta robarle ${moneda} a alguien.
ִ ࣪𖤐 *#robarxp • #robxp*
> ✮ Intenta robar XP a un usuario.
ִ ࣪𖤐 *#eboard • #baltop*
> ✮ Ver el ranking de usuarios con más ${moneda}.
ִ ࣪𖤐 *#aventura • #adventure*
> ✮ Aventúrate en un nuevo reino y recolecta recursos.
ִ ࣪𖤐 *#curar • #heal*
> ✮ Cura tu salud para volverte aventurar.
ִ ࣪𖤐 *#cazar • #hunt • #berburu*
> ✮ Aventúrate en una caza de animales.
ִ ࣪𖤐 *#inv • #inventario*
> ✮ Ver tu inventario con todos tus ítems.
ִ ࣪𖤐 *#mazmorra • #explorar*
> ✮ Explorar mazmorras para ganar ${moneda}.
ִ ࣪𖤐 *#halloween*
> ✮ Reclama tu dulce o truco (Solo en Halloween).
ִ ࣪𖤐 *#christmas • #navidad*
> ✮ Reclama tu regalo navideño (Solo en Navidad).

• :･ﾟ⊹˚• \`『 Gacha 』\` •˚⊹:･ﾟ•

❍ Comandos de gacha para reclamar y colecciónar personajes.
ִ ࣪𖤐 *#rollwaifu • #rw • #roll*
> ✮ Waifu o husbando aleatorio.
ִ ࣪𖤐 *#claim • #c • #reclamar*
> ✮ Reclamar un personaje.
ִ ࣪𖤐 *#harem • #waifus • #claims*
> ✮ Ver tus waifus reclamadas.
ִ ࣪𖤐 *#ainfo • #animeinfo* + [nombre]
> ✮ Ver información de un anime.
ִ ࣪𖤐 *#charimage • #waifuimage • #wimage* 
> ✮ Ver una imagen aleatoria de un personaje.
ִ ࣪𖤐 *#charinfo • #winfo • #waifuinfo*
> ✮ Ver información de un personaje.
ִ ࣪𖤐 *#givechar • #givewaifu • #regalar*
> ✮ Regalar un personaje a otro usuario.
ִ ࣪𖤐 *#vote • #votar*
> ✮ Votar por un personaje para subir su valor.
ִ ࣪𖤐 *#waifusboard • #waifustop • #topwaifus*
> ✮ Ver el top de personajes con mayor valor.

• :･ﾟ⊹˚• \`『 Perfil 』\` •˚⊹:･ﾟ•

❍ Comandos de perfil para ver, configurar y comprobar estados de tu perfil.
ִ ࣪𖤐 *#reg • #verificar • #register*
> ✮ Registra tu nombre y edad en el bot.
ִ ࣪𖤐 *#unreg*
> ✮ Elimina tu registro del bot.
ִ ࣪𖤐 *#profile*
> ✮ Muestra tu perfil de usuario.
ִ ࣪𖤐 *#marry* [mension / etiquetar]
> ✮ Propón matrimonio a otro usuario.
ִ ࣪𖤐 *#divorce*
> ✮ Divorciarte de tu pareja.
ִ ࣪𖤐 *#setgenre • #setgenero*
> ✮ Establece tu género en el perfil del bot.
ִ ࣪𖤐 *#delgenre • #delgenero*
> ✮ Elimina tu género del perfil del bot.
ִ ࣪𖤐 *#setbirth • #setnacimiento*
> ✮ Establece tu fecha de nacimiento en el perfil del bot.
ִ ࣪𖤐 *#delbirth • #delnacimiento*
> ✮ Elimina tu fecha de nacimiento del perfil del bot.
ִ ࣪𖤐 *#setdescription • #setdesc*
> ✮ Establece una descripción en tu perfil del bot.
ִ ࣪𖤐 *#deldescription • #deldesc*
> ✮ Elimina la descripción de tu perfil del bot.
ִ ࣪𖤐 *#lb • #lboard* + <Paginá>
> ✮ Top de usuarios con más (experiencia y nivel).
ִ ࣪𖤐 *#level • #lvl* + <@Mencion>
> ✮ Ver tu nivel y experiencia actual.
ִ ࣪𖤐 *#comprarpremium • #premium*
> ✮ Compra un pase premium para usar el bot sin límites.
ִ ࣪𖤐 *#confesiones • #confesar*
> ✮ Confiesa tus sentimientos a alguien de manera anonima.

• :･ﾟ⊹˚• \`『 Juegos 』\` •˚⊹:･ﾟ•

❍ Comandos de juegos para jugar con rus amigos.
ִ ࣪𖤐 *#amistad • #amigorandom* 
> ✮ hacer amigos con un juego. 
ִ ࣪𖤐 *#chaqueta • #jalamela*
> ✮ Hacerte una chaqueta.
ִ ࣪𖤐 *#chiste*
> ✮ La bot te cuenta un chiste.
ִ ࣪𖤐 *#consejo* 
> ✮ La bot te da un consejo. 
ִ ࣪𖤐 *#doxeo • #doxear* + <mencion>
> ✮ Simular un doxeo falso.
ִ ࣪𖤐 *#facto*
> ✮ La bot te lanza un facto. 
ִ ࣪𖤐 *#formarpareja*
> ✮ Forma una pareja. 
ִ ࣪𖤐 *#formarpareja5*
> ✮ Forma 5 parejas diferentes.
ִ ࣪𖤐 *#frase*
> ✮ La bot te da una frase.
ִ ࣪𖤐 *#huevo*
> ✮ Agarrale el huevo a alguien.
ִ ࣪𖤐 *#chupalo* + <mencion>
> ✮ Hacer que un usuario te la chupe.
ִ ࣪𖤐 *#aplauso* + <mencion>
> ✮ Aplaudirle a alguien.
ִ ࣪𖤐 *#marron* + <mencion>
> ✮ Burlarte del color de piel de un usuario. 
ִ ࣪𖤐 *#suicidar*
> ✮ Suicidate. 
ִ ࣪𖤐 *#iq • #iqtest* + <mencion>
> ✮ Calcular el iq de alguna persona. 
ִ ࣪𖤐 *#meme*
> ✮ La bot te envía un meme aleatorio. 
ִ ࣪𖤐 *#morse*
> ✮ Convierte un texto a codigo morse. 
ִ ࣪𖤐 *#nombreninja*
> ✮ Busca un nombre ninja aleatorio. 
ִ ࣪𖤐 *#paja • #pajeame* 
> ✮ La bot te hace una paja.
ִ ࣪𖤐 *#personalidad* + <mencion>
> ✮ La bot busca tu personalidad. 
ִ ࣪𖤐 *#piropo*
> ✮ Lanza un piropo.
ִ ࣪𖤐 *#pregunta*
> ✮ Hazle una pregunta a la bot.
ִ ࣪𖤐 *#ship • #pareja*
> ✮ La bot te da la probabilidad de enamorarte de una persona. 
ִ ࣪𖤐 *#sorteo*
> ✮ Empieza un sorteo. 
ִ ࣪𖤐 *#top*
> ✮ Empieza un top de personas.
ִ ࣪𖤐 *#formartrio* + <mencion>
> ✮ Forma un trio.
ִ ࣪𖤐 *#ahorcado*
> ✮ Diviertete con la bot jugando el juego ahorcado.
ִ ࣪𖤐 *#genio*
> ✮ Comienza una pregunta con el genio.
ִ ࣪𖤐 *#mates • #matematicas*
> ✮ Responde las preguntas de matemáticas para ganar recompensas.
ִ ࣪𖤐 *#ppt*
> ✮ Juega piedra papel o tijeras con la bot.
ִ ࣪𖤐 *#sopa • #buscarpalabra*
> ✮ Juega el famoso juego de sopa de letras.
ִ ࣪𖤐 *#pvp • #suit* + <mencion>
> ✮ Juega un pvp contra otro usuario.
ִ ࣪𖤐 *#ttt*
> ✮ Crea una sala de juego. 

• :･ﾟ⊹˚• \`『 Anime 』\` •˚⊹:･ﾟ•

❍ Comandos de reacciones de anime.
ִ ࣪𖤐 *#angry • #enojado* + <mencion>
> ✮ Estar enojado
ִ ࣪𖤐 *#bite* + <mencion>
> ✮ Muerde a alguien
ִ ࣪𖤐 *#bleh* + <mencion>
> ✮ Sacar la lengua
ִ ࣪𖤐 *#blush* + <mencion>
> ✮ Sonrojarte
ִ ࣪𖤐 *#bored • #aburrido* + <mencion>
> ✮ Estar aburrido
ִ ࣪𖤐 *#cry* + <mencion>
> ✮ Llorar por algo o alguien
ִ ࣪𖤐 *#cuddle* + <mencion>
> ✮ Acurrucarse
ִ ࣪𖤐 *#dance* + <mencion>
> ✮ Sacate los pasitos prohíbidos
ִ ࣪𖤐 *#drunk* + <mencion>
> ✮ Estar borracho
ִ ࣪𖤐 *#eat • #comer* + <mencion>
> ✮ Comer algo delicioso
ִ ࣪𖤐 *#facepalm* + <mencion>
> ✮ Darte una palmada en la cara
ִ ࣪𖤐 *#happy • #feliz* + <mencion>
> ✮ Salta de felicidad
ִ ࣪𖤐 *#hug* + <mencion>
> ✮ Dar un abrazo
ִ ࣪𖤐 *#impregnate • #preg* + <mencion>
> ✮ Embarazar a alguien
ִ ࣪𖤐 *#kill* + <mencion>
> ✮ Toma tu arma y mata a alguien
ִ ࣪𖤐 *#kiss • #besar* • #kiss2 + <mencion>
> ✮ Dar un beso
ִ ࣪𖤐 *#laugh* + <mencion>
> ✮ Reírte de algo o alguien
ִ ࣪𖤐 *#lick* + <mencion>
> ✮ Lamer a alguien
ִ ࣪𖤐 *#love • #amor* + <mencion>
> ✮ Sentirse enamorado
ִ ࣪𖤐 *#pat* + <mencion>
> ✮ Acaricia a alguien
ִ ࣪𖤐 *#poke* + <mencion>
> ✮ Picar a alguien
ִ ࣪𖤐 *#pout* + <mencion>
> ✮ Hacer pucheros
ִ ࣪𖤐 *#punch* + <mencion>
> ✮ Dar un puñetazo
ִ ࣪𖤐 *#run* + <mencion>
> ✮ Correr
ִ ࣪𖤐 *#sad • #triste* + <mencion>
> ✮ Expresar tristeza
ִ ࣪𖤐 *#scared* + <mencion>
> ✮ Estar asustado
ִ ࣪𖤐 *#seduce* + <mencion>
> ✮ Seducir a alguien
ִ ࣪𖤐 *#shy • #timido* + <mencion>
> ✮ Sentir timidez
ִ ࣪𖤐 *#slap* + <mencion>
> ✮ Dar una bofetada
ִ ࣪𖤐 *#dias • #days*
> ✮ Darle los buenos días a alguien 
ִ ࣪𖤐 *#noches • #nights*
> ✮ Darle las buenas noches a alguien 
ִ ࣪𖤐 *#sleep* + <mencion>
> ✮ Tumbarte a dormir
ִ ࣪𖤐 *#smoke* + <mencion>
> ✮ Fumar
ִ ࣪𖤐 *#think* + <mencion>
> ✮ Pensar en algo

• :･ﾟ⊹˚• \`『 NSFW 』\` •˚⊹:･ﾟ•

❍ Comandos NSFW (Contenido para adultos)
ִ ࣪𖤐 *#hentaisearch • #searchhentai*
> ✮ Buscador de capítulos hentai.
ִ ࣪𖤐 #xnxxsearch • #xnxxs*
> ✮ Buscador de vídeos de Xnxx.
ִ ࣪𖤐 *#xvsearch • #xvideossearch*
> ✮ Buscador de vídeos de Xvideos.
ִ ࣪𖤐 *#pornhubsearch • #phsearch*
> ✮ Buscador de videos de Pornhub.
ִ ࣪𖤐 *#xvideosdl*
> ✮ Descarga videos porno de (Xvideos). 
ִ ࣪𖤐 *#xnxxdl*
> ✮ Descarga videos porno de (xnxx).
ִ ࣪𖤐 *#anal* + <mencion>
> ✮ Hacer un anal
ִ ࣪𖤐 *#waifu*
> ✮ Buscá una waifu aleatorio.
ִ ࣪𖤐 *#bath* + <mencion>
> ✮ Bañarse
ִ ࣪𖤐 *#blowjob • #mamada • #bj* + <mencion>
> ✮ Dar una mamada
ִ ࣪𖤐 *#boobjob* + <mencion>
> ✮ Hacer una rusa
ִ ࣪𖤐 *#cum* + <mencion>
> ✮ Venirse en alguien.
ִ ࣪𖤐 *#fap* + <mencion>
> ✮ Hacerse una paja
ִ ࣪𖤐 *#ppcouple • #ppcp*
> ✮ Genera imagenes para amistades o parejas.
ִ ࣪𖤐 *#footjob* + <mencion>
> ✮ Hacer una paja con los pies
ִ ࣪𖤐 *#fuck • #coger • #fuck2* + <mencion>
> ✮ Follarte a alguien
ִ ࣪𖤐 *#cafe • #coffe*
> ✮ Tomate un cafecito con alguien
ִ ࣪𖤐 *#violar • #perra + <mencion>
> ✮ Viola a alguien
ִ ࣪𖤐 *#grabboobs* + <mencion>
> ✮ Agarrrar tetas
ִ ࣪𖤐 *#grop* + <mencion>
> ✮ Manosear a alguien
ִ ࣪𖤐 *#lickpussy* + <mencion>
> ✮ Lamer un coño
ִ ࣪𖤐 *#rule34 • #r34* + [Tags]
> ✮ Buscar imagenes en Rule34
ִ ࣪𖤐 *#sixnine • #69* + <mencion>
> ✮ Haz un 69 con alguien
ִ ࣪𖤐 *#spank • #nalgada* + <mencion>
> ✮ Dar una nalgada
ִ ࣪𖤐 *#suckboobs* + <mencion>
> ✮ Chupar tetas
ִ ࣪𖤐 *#undress • #encuerar* + <mencion>
> ✮ Desnudar a alguien
ִ ࣪𖤐 *#yuri • #tijeras* + <mencion>
> ✮ Hacer tijeras.

  `.trim()

  await conn.sendMessage(m.chat, { 
      text: txt,
      contextInfo: {
          mentionedJid: [m.sender, userId],
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
              newsletterJid: channelRD.id,
              newsletterName: channelRD.name,
              serverMessageId: -1,
          },
          forwardingScore: 999,
          externalAdReply: {
              title: botname,
              body: textbot,
              thumbnailUrl: banner,
              sourceUrl: redes,
              mediaType: 1,
              showAdAttribution: true,
              renderLargerThumbnail: true,
          },
      },
  }, { quoted: m })

}

handler.help = ['menu']
handler.tags = ['main']
handler.command = ['menu', 'menú', 'help']

export default handler

function clockString(ms) {
    let seconds = Math.floor((ms / 1000) % 60)
    let minutes = Math.floor((ms / (1000 * 60)) % 60)
    let hours = Math.floor((ms / (1000 * 60 * 60)) % 24)
    return `${hours}h ${minutes}m ${seconds}s`
}
