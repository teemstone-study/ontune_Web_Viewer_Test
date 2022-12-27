self.onmessage = function(e) {
    if (isNaN(e.data) === false) {
        let ItemList = Array.from({ length: e.data }).map((_, i) => `item ${i}`); 
        postMessage(ItemList);
    } else {
        postMessage('error');
    }    
}