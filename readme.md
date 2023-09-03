

### To configure typescript compiler and create tsconfig.json file

```
tsc --init
```

### To start debugger

1) uncomment this in tsconfig.json file - "sourceMap": true
2) click Run and debug in left bar
3) click on create launch.json file
4) select environment - node.js ( this will create launch.json file )
5) add this line below program property in launch.json file - "preLaunchTask":"tsc: build - tsconfig.json"
6) click on run and debug then launch program