const test = require('ava')
const execa = require('execa')

test('throws if not in project (build)', async t => {
  const error = await t.throwsAsync(execa.command('node bin/maizzle build'))

  t.truthy(error.stderr.includes('Cannot find module'))
})

test('throws if not in project (serve)', async t => {
  const error = await t.throwsAsync(execa.command('node bin/maizzle serve'))

  t.truthy(error.stderr.includes('Cannot find module'))
})
