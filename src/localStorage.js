export  const loadState = () => {
	try {
        const serializedState =  localStorage.getItem('state');
		if (serializedState === null) {
			return undefined;
		}
		return JSON.parse(serializedState);
	} catch (err) {
		console.log("error in load State", err);
		return undefined;
	}
};
export const saveState = (state) => {
	try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
        return loadState();
	} 
	catch (err) {
        console.log("error in save State", err);
        return undefined;
	}
};

//data.map(page => <Route path={page.link} component={page.property} key={page.id}/>
