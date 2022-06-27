export class LMS {
    lms = new Map();

    add(subject) {
        if (!subject instanceof Subject) {
            throw new Error('Not Subject Instance!');
        }
        this.lms.set(subject.id, subject);

        return subject.id;
    }

    remove(id) {
        if (typeof id !== 'string') {
            throw new TypeError('Type should be a string');
        } else if (this.lms.has(id) === false){
            throw Error('Invalid Id');
        }

        this.lms.delete(id);
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
            throw new TypeError('Type should be a string !');
        }
        this.subject.id = Math.floor(Math.random() * 15000).toString();

        return this.subject;
    }
}