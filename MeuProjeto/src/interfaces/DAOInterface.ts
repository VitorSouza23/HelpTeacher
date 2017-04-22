/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
export class DAOInterface {
    private _id: any;
    constructor() {

    }

    public setID(id: any) {
        this._id = id;
    }

    public getID() {
        return this._id;
    }
}

