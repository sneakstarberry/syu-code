import axios from 'axios';

export async function getTodo() {
    const res = await axios.get(
        '/api/posts'
    );
    return res.data;
}

export async function postTodo(data) {
    const res = await axios.post(
        '/api/',{text:data}
    );
    return res.data;
}

export async function delTodo(id) {
    const res = await axios.delete(
        '/api/'+id+'/'
    );
    return res.data;
}




export async function patchTodo(id, data) {
    
    const res = await axios.patch(
        '/api/'+id+'/', {done:data=!data}
    );
    return res.data;
}