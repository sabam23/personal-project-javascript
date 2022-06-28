export class LMS {
    lms = new Map();

    add(subject) {
        if (!(subject instanceof Subject)) {
            throw new Error('Not Subject Instance!');
        }
        this.lms.set(subject.subject.id, subject.subject);

        return subject.id;
    }

    remove(subject) {
        if (this.lms.has(subject.subject.id) === false){
            throw Error('Invalid Id');
        }

        this.lms.delete(subject.subject.id);
    }

    verify (subject) {
        if (this.lms.has(subject.subject.id) === false){
            return false;
        } else if (this.lms.has(subject.subject.id)) {
            return true;
        }
    }

    readAll () {
        let result = [];
        for (const i of this.lms.values()) {
            result.push(i);
        }
        return result;
    }
}

export class Subject {
    constructor(subject) {
        this.subject = subject;
        if (typeof this.subject !== 'object') {
            throw new TypeError('Type should be an object !');
        } else if (typeof this.subject.title !== 'string') {
            throw new Error('Title is required and type should be a string !');
        } else if (typeof this.subject.lessons !== 'number') {
            throw new Error('Lessons is required and type should be a number !');
        } else if (this.subject.hasOwnProperty('description') && typeof this.subject.description !== 'string') {
            throw new TypeError('Description Type should be a string !');
        }
        this.subject.id = Math.floor(Math.random() * 15000).toString();
    }
    get id() {
        return this.subject.id;
    }

}