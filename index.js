const fs = require('fs')
const os = require('os')
const path = require('path')


if(!fs.existsSync(path.resolve("log", "log.txt"))){
    fs.writeFileSync(path.resolve("log", "log.txt"), "Arquivo criado!", "utf-8")
}

function calculateMemoryUsage() {
    return ((os.totalmem() - os.freemem()) * 100) / os.totalmem();
}

setInterval(() => {
    try{
        let memUsage = calculateMemoryUsage()
        let content = "Nome do computador: "+os.hostname()+"\nSistema operacional"+os.platform() + os.release()+"\nArquitetura: "+os.arch()+"\nCpu:"+os.cpus()[0].model+"\nTempo de atividade: "+os.uptime()+"\nUso de memória: "+memUsage+"%"
        fs.appendFileSync(path.resolve("log", "log.txt"),"\n\n" + content, "utf8")
    }catch(err){
        console.log("Algo deu errado ao modificar o arquivo: ", err)
    }
}, 3000)

setInterval(() => {
    let memUsage = calculateMemoryUsage()
    let content = "Nome do computador: "+os.hostname()+"\nSistema operacional"+os.platform() + os.release()+"\nArquitetura: "+os.arch()+"\nCpu:"+os.cpus()[0].model+"\nTempo de atividade: "+os.uptime()+"\nUso de memória: "+memUsage+"%"
    console.log(content)
}, 3000)

