# wdio-slick-reporter-example

This repository contains a sample wdio-project for testing [wdio-slick-reporter](https://github.com/codeclown/wdio-slick-reporter).

Just clone it and run to see the reporter in action.

## Install dependencies

Requires ChromeDriver installed.

```bash
npm install
```

## Run the example specs

```bash
npm test
```

## Record a gif

This is the process to record a demo gif for the [main repository](https://github.com/codeclown/wdio-slick-reporter).

Recommended terminal size: 132x35.

```bash
./node_modules/.bin/ttystudio frames.json
  cd /path/to/wdio-slick-reporter-example && npm --silent test
  ^Q # stop recording with ctrl-q
./node_modules/.bin/ttystudio --play frames.json # preview and e.g. play around with --range
./node_modules/.bin/ttystudio frames.json demo.gif
```
