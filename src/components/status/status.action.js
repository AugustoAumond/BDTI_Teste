
export function Pendenting (list){
    let pendente = 0;
    if (list){
        if (list[0].name !== 'Nenhuma tarefa pendente'){
            list.forEach(e => {
                if (e.finished === false){
                    pendente = pendente + 1
                }
            });
        return pendente;
        } else {
            return 0;
        }
    }
    
}