# Prototype 1

This  is a prototype for a new S-GA viewer based on [Mirador](https://github.com/ProjectMirador/mirador) for rendering IIIF manifests and [CETEIcean](https://github.com/TEiC/CETEIcean) for rendering TEI in isomorphic HTML5.

## Installation

First:
```
$ npm install
$ npm run build
```

Second:

Get [Mirador](https://github.com/ProjectMirador/mirador), build it and place it under `/lib/mirador`.

Finally:

Copy or Symlink TEI files from [S-GA's GitHub repo](https://github.com/umd-mith/sga/tree/master/data/tei) to `/tei`.

Also:

Manifest URIs must be full (not relative). This means that you may have to change [this](https://github.com/umd-mith/sga-lab/blob/gh-pages/prototype1/src/index.js#L15) and [this](https://github.com/umd-mith/sga-lab/blob/gh-pages/prototype1/src/index.js#L19) manually to publish the prototype somewhere.

These last two steps will eventually be automated. Hopefully. One day. I'm just a prototype :hear_no_evil:

## Run server to view demo and develop

```
$ npm run dev
```
