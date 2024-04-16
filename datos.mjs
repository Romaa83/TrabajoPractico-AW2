import os from "node:os"

const procesador = JSON.stringify(os.cpus())
const MemoriaLibre = ((os.freemem()/1024/1024/1024)).toFixed(2)
const MemoriaTotal = ((os.totalmem()/1024/1024/1024)).toFixed(2)
const memoriaUsada = MemoriaTotal - MemoriaLibre 

let datos = ""
datos += "Procesador"
datos += os.EOL
datos += procesador
datos += os.EOL
datos += os.EOL
datos += "Memoria Libre"
datos += os.EOL
datos += MemoriaLibre
datos += os.EOL
datos += os.EOL
datos += "Memoria Total"
datos += os.EOL
datos += MemoriaTotal
datos += os.EOL
datos += os.EOL
datos += "Memoria Usada"
datos += os.EOL
datos += memoriaUsada
datos += os.EOL
datos += os.EOL

export {datos} 