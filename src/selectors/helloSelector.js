const helloSelector = (state) => {
    
    switch (state.sort_by) {
        case 'age':
            return state.data.sort((a, b) => {
                return parseInt(b.age) - parseInt(a.age);
            }).reverse();
        case 'name':
            return state.data.sort((a, b) => {
                if(b.name > a.name){
                    return -1;
                }
                else 
                  return b.name == a.name ? 0 : 1 ;
            });
        case 'designation':
            return state.data.sort((a, b) => {
                if(b.designation > a.designation){
                    return -1;
                }
                else {
                    return b.designation == a.designation ? 0 : 1 ;
                }
            });
        default:
            return state.data;
    }
};

export default helloSelector;


