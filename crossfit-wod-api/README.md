Para inicializar un proyecto en node se usa

```bash
node init -y 
```
Se agrega un nuevo modulo llamado nodemon
```bash
npm i nodemon -D
```

Se agrega express
```bash
npm i express
```

Se agrega esto en el package.json para crear un nuevo comando de ejecucion
```json
  "scripts": {
    "start": "node index..js",
    "dev": "nodemon src/index.js"
  },
```
lo que hara es la creacion de un nuevo comando que es el siguiente
``` shell
npm run dev
```