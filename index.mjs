import {LMS, Subject} from './lms.mjs';
import {Teachers} from "./teachers.mjs";
import {Pupils} from "./pupils.mjs";
import {Groups} from "./groups.mjs";
import {Gradebooks} from "./gradebooks.mjs";

const history = new Subject({
    title: 'History',
    lessons: 24
});

const sport = new Subject({title: 'Sport', lessons: 26, description: 'Real Madrid is the best!!!'});

const lms = new LMS();
lms.add(history);
lms.add(sport);
// lms.remove(history);
lms.verify(history);
const data = {
    name: {
        first: 'John',
        last: 'Doe'
    },
    dateOfBirth: '12/13/14',
    emails: [
        {
            email: 'johndoe@gmail.com',
            primary: true
        }
    ],
    phones: [
        {
            phone: '551315606',
            primary: true
        }
    ],
    sex: 'Male',
    subjects: [
        {
            subject: 'History'
        }
    ]
}
const data2 = {
    name: {
        first: 'Test',
        last: 'Doe'
    },
    dateOfBirth: '12/13/14',
    emails: [
        {
            email: 'johndoe@gmail.com',
            primary: false
        }
    ],
    phones: [
        {
            phone: '551315606',
            primary: false
        }
    ],
    sex: 'Female',
    subjects: [
        {
            subject: 'Math'
        }
    ]
}
const teachers = new Teachers();
const teacherId = teachers.add(data);
const teach = teachers.add(data2);
// teachers.update(teacherId, data2);
// teachers.remove(teacherId);
// console.log(teachers);

const pupils = new Pupils();
const pupilData = {
    name:
        {
            first: 'Saba',
            last: 'Mchedlishvili'
        },
    dateOfBirth: '11/12/11',
    phones: [{
        phone: '55131515',
        primary: true
    }],
    sex: 'Male'
}
const updatedProfile = {
    name:
        {
            first: 'ER',
            last: 'Mchedlishvili'
        },
    dateOfBirth: '11112/11',
    phones: [{
        phone: '551515',
        primary: false
    }],
    sex: 'Male',
    description: 'ss'
}

const pupil = pupils.add(pupilData);
const pupil2= pupils.add(updatedProfile)
// pupils.update(pupil, updatedProfile)
pupils.remove(pupil2.id)
// console.log(pupils);

const room = 236;
const groups = new Groups();


// Create a new group. add methods takes integer as a parameter. returns id of group
const groupId = groups.add(room);
groups.addPupil(groupId, pupil);
groups.addPupil(groupId, pupil2);
// groups.removePupil(groupId, pupil.id)
groups.update(groupId, {
    room: 239
});
// console.log(groups.groups.get(groupId).pupils);
const gradebooks = new Gradebooks(groups, teachers, lms);
const gradebook = gradebooks.add(groupId);
const record = {
    pupilId: pupil.id,
    teacherId: teacherId,
    subjectId: history.subject.id,
    lesson: 1,
    mark: 9
};
const record2 = {
    pupilId: pupil2.id,
    teacherId: teacherId,
    subjectId: history.subject.id,
    lesson: 2,
    mark: 15
};

gradebooks.addRecord(gradebook, record);
gradebooks.addRecord(gradebook, record2);
// gradebooks.clear();

console.log(gradebooks.read(gradebook, pupil2.id));
