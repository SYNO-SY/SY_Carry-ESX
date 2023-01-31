fx_version   'cerulean'
use_experimental_fxv2_oal 'yes'
lua54        'yes'
game 'gta5'

name   'SY_CARRY'
author 'SYNO'
version '1.3'
license      ''
repository   'https://github.com/'
description 'A Carry Script With Request System for Fivem RP Server'



ui_page 'html/ui.html'

files {
	'html/ui.html',
	'html/styles.css',
	'html/scripts.js',
	'html/debounce.min.js',
	'html/fonts/BebasNeueBold.ttf',
	'html/fonts/*.otf',
	'html/img/*.png'
}

shared_scripts {
    'config.lua',
}

server_scripts {
	'server/main.lua'
}

client_scripts {
	'client/main.lua'
}



