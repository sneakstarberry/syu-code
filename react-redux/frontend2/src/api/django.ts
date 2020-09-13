import axios from 'axios';

export async function getTodo(id:string) {
    const response = await axios.get<GetData>(
        'http://127.0.0.1:8000/api/'+id+'/'
    );
    return response.data;
}

export interface GetData {
    id:string;
    text:string;
    created_at:Date;
}