import User from './user';
import UserMessage from '../message/user-message';

export default class DiscordUser extends User {
    constructor(discordUser){
        super();

        this.discordUser = discordUser;
        this.dmChan = null;
    }

    get DiscordUser(){
        return this.discordUser;
    }

    get Id(){
        return this.DiscordUser.id;
    }

    get Tag(){
        return this.DiscordUser.tag;
    }

    get IdentityId(){
        return `discord:${this.Id}`;
    }

    get Name(){
        return this.DiscordUser.username;
    }

    get HasDMChannel(){
        return !!(this.dmChan);
    }

    async getDMChannel(){
        //DM Channel이 없을 경우 만든 후 캐싱
        return this.dmChan || (this.dmChan = await this.DiscordUser.createDM());
    }

    async sendMessage(str, option){
        var dmChan = await this.getDMChannel();

        var rawMessage = await dmChan.send(str, option);

        return new UserMessage(this, rawMessage.content, new Date(rawMessage.createdTimestamp), rawMessage.editable, rawMessage.deleteable);
    }
}