const helloSelector_task = (state) => {
    switch (state.sort_by) {
        case 'name':
            return state.data.sort((a, b) => {
                if(b.name > a.name){
                    return -1;
                }
                else 
                  return b.name == a.name ? 0 : 1 ;
            });
        case 'estimation':
            return state.data.sort((a, b) => {
                return parseInt(b.estimation) - parseInt(a.estimation);
            }).reverse();
        case 'company':
            return state.data.sort((a, b) => {
                if(b.company > a.company){
                    return -1;
                }
                else {
                    return b.company == a.company ? 0 : 1 ;
                }
            });
        default:
            return state.data;
    }
};

export default helloSelector_task;