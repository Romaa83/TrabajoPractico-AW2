import { datos } from "./datos.mjs";
import fs from 'fs/promises'
import http from 'node:http'

const fechaActual = new Date();
const dia = fechaActual.getDate();
const mes = fechaActual.getMonth() + 1;
const anio = fechaActual.getFullYear();
let archivo = `./log-(${dia}-${mes}-${anio}).txt`;

const servidor = http.createServer((peticion, respuesta)=>{
    const ruta = peticion.url;
    if (ruta === '/') {
        respuesta.end('Ingrese GenerarLog en el url para generar archivo')
    }
    else if (ruta === '/generarLog'){
        async function escribir(){
            try {
                let fd
                fd = await fs.open(archivo, 'w')
                await fs.writeFile(fd, datos)
                await fs.appendFile(fd, `Servidor iniciado el ${tiempoInicio.toLocaleString()}\n`);
                respuesta.end('Archivo LOG generado con exito')
            } catch (error) {
                respuesta.end('Error al generar el archivo')
            }
        }

    escribir()
    }
})

process.on('SIGINT', async () =>{
    try {
        let tiempoCierre = new Date()
        await fs.appendFile(archivo, `Servidor cerrado el ${tiempoCierre.toLocaleString()}\n`);
        process.exit(0);
    } catch (error) {
        console.log('Error')
        process.exit(1);
    }
    
});
const tiempoInicio = new Date()
servidor.listen(3000)
