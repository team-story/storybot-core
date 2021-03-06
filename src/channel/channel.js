import { EventEmitter } from 'events';

export default class Channel extends EventEmitter {
    constructor(client, id, name){
        super();
        
        this.client = client;
        this.id = id;
        this.name = name;
    }

    get Client(){
        return this.client;
    }

    get Id(){
        return this.id;
    }

    get IdentityId(){
        return this.Id;
    }

    get Name(){
        return this.name;
    }

    get CanGetMemberList() {
        return false;
    }

    async getMemberList(){
        return [/*User*/];
    }

    async send(msgTemplate){
        return [];
    }
}