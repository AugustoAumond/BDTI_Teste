// Pegar as tarefas pendentes;
export function ListPendenting (list){
    let pendenting = [];
    list?.forEach(e => {
       if (e.finished === false){
        pendenting.push(e);
       }
    });
    return pendenting;
}

// Pegar as tarefas finalizadas;
export function ListFinished (list){
    let finished = [];
    list?.forEach(e => {
       if (e.finished === true){
        finished.push(e);
       }
    });
    return finished;
}

// Remover o item e reorganizar ids;
export function RemoveAction(id, list){
    let index = 0;
    let newList = list;
    newList.splice(id, 1);
    if (newList.length !== 0){
        newList.map((e)=>{  
            e.id = index;
            index++;
        }) 
    }
    return newList;
}

