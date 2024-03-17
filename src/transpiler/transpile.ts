// Compile all files and exit.

import { startWatching } from './transpileTsFiles'

const watcher = startWatching('./example')
watcher.on('ready', () => watcher.close())
