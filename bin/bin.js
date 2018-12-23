#!/usr/bin/env node

var commander = require('commander')


commander.version('v' + require('../package.json').version)
.usage('[options] {command} ...')
.command('howtouse', 'show how to use', { isDefault: true })
.command('init [path]','init a plugin.json @ [path] ')
.command('init','just like ( init . )')
.command('publish [path]','publish plugin to your system global,pp will scan all the children dirs ')

.command('config [path]', 'set ssr python client\'s location')
.command('add', 'add a host mannually')
.command('add [uri]', 'add a SSR URI')
.command('connect', 'set the default host and connect it')
.command('ls', 'list all hosts by group and you can view their config')
.command('delay', 'test routes delay')
.command('edit', 'list all hosts by group and you can edit their config')
.command('local', 'edit SSR\'s local config, need reconnect after config')
.command('rm', 'remove a host by list')
.command('clear', 'clear hosts by group')
.command('start', 'start ssr local client and connect default host')
.command('stop', 'stop ssr local client')
.command('restart', 'restart ssr local client')
.command('status', 'show the ssr local client status')
.command('startup', 'set autostart ssr client when you login system(Linux)')
.command('unstartup', 'unset autostart setting')
.option('--verbose', 'output verbose messages on internal operations')
.parse(process.argv)