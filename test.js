const fs = require('fs');
const path = require('path');
const isJpg = require('is-jpg');
const pify = require('pify');
const test = require('ava');
const m = require('./');

const fsP = pify(fs);

test('extract file', async t => {
  const buf = await fsP.readFile(path.join(__dirname, 'fixtures', 'file.crx'));
  const files = await m()(buf);

  t.is(files[1].path, 'test.jpg');
  t.true(isJpg(files[1].data));
});

test('return empty array if non-valid file is supplied', async t => {
  const buf = await fsP.readFile(__filename);
  const files = await m()(buf);

  t.is(files.length, 0);
});

test('throw on wrong input', async t => {
  await t.throws(m()('foo'), 'Expected a Buffer, got string');
});
