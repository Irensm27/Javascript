function addToLocalStorage(arrayName, objToAdd){
    const lSItem = localStorage.getItem(arrayName);
     if( !lSItem){
         throw new Error('there is no such array');
     }
     const array = JSON.parse(lSItem);
     if(typeof objToAdd ==='object' ){
         array.push(objToAdd);
     }
     localStorage.setItem(arrayName, JSON.stringify(array));

}
addToLocalStorage('sessionList',{});