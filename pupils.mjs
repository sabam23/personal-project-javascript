export class Pupils {
    pupils = new Map();
    read (id) {
        if (this.pupils.has(id)) {
            return this.pupils.get(id);
        }
    }
    update (id, newData) {
        if (this.pupils.has(id) ===false) {
            throw new  Error('Pupil Doesnt exsist');
        }
        let updatedProfile = this.pupils.get(id);
        updatedProfile = {...newData};
        this.pupils.set(id, updatedProfile);
        return id;
    }
    remove (id) {
        if(this.pupils.has(id) === false) {
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
        const dateExp =/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/g;
        if (typeof pupil.dateOfBirth !== 'string') {
            throw new Error('Type should be a string');
        } else if (dateExp.test(pupil.dateOfBirth) === false) {
            throw new Error('Enter date format');
        }
        //Phones
        if (Array.isArray(pupil.phones) === false) {
            throw new Error('Type should be an array');
        }
        for (let phone of pupil.phones) {
            if (typeof phone.phone !== 'string' || typeof phone.primary !== 'boolean') {
                throw new Error('Phone Should be a string and primary boolean');
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