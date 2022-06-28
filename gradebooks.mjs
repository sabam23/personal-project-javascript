export class Gradebooks {
    constructor(groups, teachers, lms) {
        this.groups = groups;
        this.teachers = teachers;
        this.lms = lms;
    }

    gradebooks = new Map();

    add(groupid) {
        let result = {};
        result.room = this.groups.groups.get(groupid).room;
        result.id = this.groups.groups.get(groupid).id;
        result.pupils = this.groups.groups.get(groupid).pupils;
        result.records = [];
        let gradebookid = Math.floor(Math.random() * 15000).toString();
        this.gradebooks.set(gradebookid, result);
        return gradebookid;
    }

    clear() {
        this.gradebooks.clear();
    }

    addRecord(gradebookId, record) {
        if (this.gradebooks.has(gradebookId) === false) {
            throw new Error('Invalid ID');
        }
        if (typeof record !== 'object') {
            throw new TypeError('Record Type should be an object');
        }
        if (typeof record.pupilId !== 'string') {
            throw new Error('Type Should be a string');
        } else if (typeof record.teacherId !== 'string') {
            throw new Error('Type Should be a string');
        } else if (typeof record.subjectId !== 'string') {
            throw new Error('Type Should be a string');
        } else if (typeof record.lesson !== 'number') {
            throw new Error('Type Should be a number');
        } else if (typeof record.mark !== 'number') {
            throw new Error('Type Should be a number');
        }

        this.gradebooks.get(gradebookId).records.push(record);
    }

    read(gradebookid, pupilid) {
        if (this.gradebooks.has(gradebookid) === false) {
            throw new Error('Invalid Id');
        }
        let gradebook = this.gradebooks.get(gradebookid);
        let records = gradebook.records;
        let result = {}
        for (let i of gradebook.pupils) {
            if (i.id === pupilid) {
                result.name = i.name.first + ' ' + i.name.last;
                result.records = [];

                for (let j in records) {
                    if (pupilid === records[j].pupilId) {
                        let teacher = this.teachers.teachers.get(records[j].teacherId);
                        result.records.push({
                            teacher: teacher.name.first + " " + teacher.name.last,
                            subject: this.lms.lms.get(records[j].subjectId).title,
                            lesson: records[j].lesson,
                            mark: records[j].mark
                        })
                    }
                }
            }
        }
        return result;
    }

    readAll(gradebookid) {
        return this.gradebooks.get(gradebookid).pupils;
    }
}