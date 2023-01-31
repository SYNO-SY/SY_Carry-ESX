fx_version  'cerulean'
use_experimental_fxv2_oal 'yes'
lua54       'yes'
game        'gta5'

name        'SY_CARRY'
author      'SYNO'
version     '1.3'
license     'GNU General Public License v3.0'
repository  'https://github.com/SYNO-SY/SY_Carry'
description 'A Carry Script With Request System for Fivem RP Server'



ui_page 'html/ui.html'

files {
	'html/ui.html',
	'html/styles.css',
	'html/scripts.js',
	'html/debounce.min.js',
	'html/fonts/*.ttf',
	'html/fonts/*.otf',
	'html/img/*.png'
}

shared_scripts {
    'config.lua',
}

server_scripts {
	'server/*.lua'
}

client_scripts {
	'client/*.lua'
}



