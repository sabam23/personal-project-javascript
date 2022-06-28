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

    add(pupil) {
        if (typeof pupil !== 'object') {
            throw new TypeError('Type should be an object !');
        }
        //Name
        if (typeof pupil.name !== 'object'){
            throw new Error('Name type should be an object');
        } else if (typeof pupil.name.first !== 'string' || typeof pupil.name.last !== 'string') {
            throw new Error('Full Name should be a string');
        }
        //Date
        if (typeof pupil.dateOfBirth !== 'string') {
            throw new Error('Type should be a Date');
        }
        //Phones
        if (Array.isArray(pupil.phones) === false) {
            throw new Error('Type should be an array');
        }
        for (let phone of pupil.phones) {
            if (typeof phone.phone !== 'string' || typeof phone.primary !== 'boolean') {
                throw new Error('Emails Should be a string and primary boolean');
            }
        }
        //Sex
        if (pupil.sex !== 'Male' && pupil.sex !== 'Female') {
            throw new Error('Invalid Gender');
        }
        //Description
        if (pupil.hasOwnProperty('description') && typeof pupil.description !== 'string') {
            throw new TypeError('Description Type should be a string !');
        }

        pupil.id = Math.floor(Math.random() * 15000).toString();
        this.pupils.set(pupil.id, pupil);
        return pupil;
    }
}