import { toast } from "react-toastify";

const getStoredReadList = () => {
    // read-list
    const storedListStr = localStorage.getItem('read-list');
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr);
        return storedList;
    } else {
        return [];
    }
}

const addToStoredReadList = (id) => {
    const storedList = getStoredReadList();
    //    already exist or not
    if (storedList.includes(id)) {
        console.log(id, 'already exist');
    } else {
        // storedList.push(id)
        const updatedList = [...storedList, id]
        // const storedListStr = JSON.stringify(storedList);
        const storedListStr = JSON.stringify(updatedList);
        localStorage.setItem('read-list', storedListStr)
        toast('This book is added to your read list.')
    }
}

export { addToStoredReadList, getStoredReadList }