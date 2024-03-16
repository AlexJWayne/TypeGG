// Compile all files and exit.

import { startWatching } from './transpile-ts-files'

const watcher = startWatching('./example')
watcher.on('ready', () => watcher.close())
