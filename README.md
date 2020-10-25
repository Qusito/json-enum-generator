# JSON Enum Generator for TypeScript

> A simple tool to help generate a TypeScript enum using a JSON file

### Installation

```
npm install @qusito/json-enum-generator
```

### Usage

To use this library you have to provide 3 arguments:

- `--input` or `-i`: The full path of the JSON file you want to process, for example `~/someDir/someFile.json`
- `--output` or `-o`: The path where the result should be written to, for example `~/someProject/src/enums/`
- `--enumName` or `-n`: The name for the enum to be generated
- `--fileName` or `-f`: The name for the enum file to be generated, if not provided argument `--enumName` is used.
  - **The extension .ts is not needed and will be appended by the library**

```bash
json-enum-generator --input ~/someFile.json --output ~/someDir --enumName SomethingGreatEnum --fileName SomethingGreat.enum
```

### Maintainer

This library is maintained by [Jules Kreutzer](mailto:jules@qusito.nl) and [Qusito](https://qusito.nl)

<img src="http://qusito.nl/wp-content/uploads/2020/06/Logo-700x200-1.png" alt="Qusito logo" style="zoom:25%; float: left" />

