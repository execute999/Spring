import axios from 'axios';

export class PersonService {
    getAll(){
        return axios.get("http://localhost:1515/api/" + "GetAll").then(res => res.data);
    }
    save(person) {
        return axios.post("http://localhost:1515/api/" + "NewContact", person).then(res => res.data);
    }
    delete(id) {
        return axios.delete("http://localhost:1515/api/" + "Delete/"+id).then(res => res.data);
    }
}