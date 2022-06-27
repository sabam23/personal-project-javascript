export class Teachers {
    teachers = new Map();
    add(teacher) {
        if (typeof teacher !== 'object') {
            throw new TypeError('Type should be an object !');
        }
        //Name
        if (typeof teacher.name !== 'object'){
            throw new Error('Name type should be an object');
        } else if (typeof teacher.name.first !== 'string' || typeof teacher.name.last !== 'string') {
            throw new Error('Full Name should be a string');
        }
        //Date
        if (typeof teacher.dateOfBirth !== 'string') {
            throw new Error('Type should be a Date');
        }
        //Email
        if (Array.isArray(teacher.emails) === false) {
            throw new Error('Type should be an array');
        }
        for (let email of teacher.emails) {
            if(typeof email !== 'obect')
            if (typeof email.email !== 'string' || typeof email.primary !== 'boolean') {
                throw new Error('Emails Should be a string and primary boolean');
            }
        }
        //Phones
        if (Array.isArray(teacher.phones) === false) {
            throw new Error('Type should be an array');
        }
        for (let phone of teacher.phones) {
            if (typeof phone.phone !== 'string' && typeof phone.primary !== 'boolean') {
                throw new Error('Emails Should be a string and primary boolean');
            }
        }
        //Sex
        if (teacher.sex !== 'Male' && teacher.sex !== 'Female') {
            throw new Error('Invalid Gender');
        }
        //Subjects
        if (Array.isArray(teacher.subjects) === false) {
            throw new Error('Type should be an array');
        }
        for (let subject of teacher.subjects) {
            if (typeof subject.subject !== 'string') {
                throw new Error('Type Should be a string');
            }
        }
        //Description
        if (teacher.hasOwnProperty('description') && typeof teacher.description !== 'string') {
            throw new TypeError('Description Type should be a string !');
        }

        teacher.id = Math.floor(Math.random() * 15000).toString();
        this.teachers.set(teacher.id, teacher);
        return teacher.id;
    }

    read (id) {
        if (this.teachers.has(id)) {
            return this.teachers.get(id);
        }
    }

    update (id, newData) {
        let updatedProfile = this.teachers.get(id);
        updatedProfile = {...newData};
        this.teachers.set(id, updatedProfile);
        return id;
    }

    remove (id) {
        if(!this.teachers.has(id)) {
            throw Error('Invalid Id');
        }

        return this.teachers.delete(id);
    }
}