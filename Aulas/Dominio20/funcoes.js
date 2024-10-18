function adicionarTarefa(tarefas) {
    let addTarefa = prompt("Qual tarefa deseja adicionar?")
    tarefas.push(addTarefa)
    alert("Tarefa adicionada")
    return tarefas
}

function removerTarefa(tarefas) {
    let remTarefa = prompt("Suas tarefas são "+tarefas+ "\nQual deseja remover?" )
    let indice = tarefas.indexOf(remTarefa)
    while (indice == -1) {
        alert("Tarefa não existe")
        remTarefa;
        break
    }
    tarefas.splice(indice,1);
    alert("Tarefa removida")
    return tarefas
}

