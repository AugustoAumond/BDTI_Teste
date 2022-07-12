export default function listReducer (state = localStorage.getItem('tasks') || JSON.parse(localStorage.getItem('tasks')) === undefined ? JSON.parse(localStorage.getItem('tasks')) : [{id: 0, name: 'Nenhuma tarefa pendente', finished: false}], action){
    
    switch(action.type){
        case 'add':
            localStorage.setItem('tasks', JSON.stringify(action.payload[1]));
            return action.payload[1];
        
        case 'del':
            JSON.stringify(localStorage.setItem('tasks', JSON.stringify(action.payload[0].splice(1,1))));
            return action.payload[0].splice(1,1); 
            
        case 'edit': 
            action.payload[0] = action.payload[1]; 
            JSON.stringify(localStorage.setItem('tasks', JSON.stringify(action.payload[0])));
            return  action.payload[0] 
                
        case 'finish':
            return 

        default:
        return state
    } 
}