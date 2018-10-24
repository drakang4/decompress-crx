# decompress-unzip

> crx decompress plugin

## Install

```bash
$ npm install --save decompress-unzip
```

## Usage

```js
const decompress = require('decompress');
const decompressCrx = require('decompress-crx');

decompress('unicorn.crx', 'dist', {
  plugins: [decompressCrx()],
}).then(() => {
  console.log('Files decompressed');
});
```

## API

### decompressCrx()(buf)

#### buf

Type: `Buffer`

Buffer to decompress.

## License

MIT © [Heeryong Kang](https://github.com/drakang4)
