export class Pupils {
    pupils = new Map();
    read (id) {
        if (this.pupils.has(id)) {
            return this.pupils.get(id);
        }
    }

    update (id, newData) {
        let updatedProfile = this.pupils.get(id);
        updatedProfile = {...newData};
        this.pupils.set(id, updatedProfile);
        return id;
    }
    remove (id) {
        if(!this.pupils.has(id)) {
            throw Error('Invalid Id');
        }

        return this.pupils.delete(id);
    }
}