# rmdirs

> A tool for quickly deleting folders, based on nodejs.

![rmdirs](https://img.shields.io/npm/v/rmdirs.svg?style=flat-square)
![rmdirs](https://img.shields.io/npm/dt/rmdirs.svg)

## install

```
npm install -g rmdirs
```

## use

```bash
$ rmdirs --help

Usage: index [options]

Options:
  -p, --path <value>  delete the entered directory (relative path)
  -V, --version       output the version number
  -h, --help          output usage information
```

```bash
# delete folder: node_modules
$ rmdirs -p node_modules

# Interactive command delete, support multiple selection delete
$ rmdirs

? select directory and delete: (Press <space> to select, <a> to toggle all, <i> to invert selection)
>(*) node_modules
 ( ) src
 (*) dist
```