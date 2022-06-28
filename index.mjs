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
// console.log(history.subject.id);
// lms.remove(history);
// console.log(lms.verify(history));
// console.log(lms.readAll());

const data = {
    name: {
        first: 'John',
        last: 'Doe'
    },
    dateOfBirth: '12/11/14',
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
    dateOfBirth: '12/11/2002',
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
            subject: 'Sport'
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
    dateOfBirth: '11/12/11',
    phones: [{
        phone: '551515',
        primary: false
    }],
    sex: 'Male',
    description: 'Random Description!'
}
const person3 = {
    name:
        {
            first: 'EE',
            last: 'SS'
        },
    dateOfBirth: '10/12/20',
    phones: [{
        phone: '551515213',
        primary: true
    }],
    sex: 'Male',
    description: 'Random Description ###!'
}

const pupil = pupils.add(pupilData);
const pupil2= pupils.add(updatedProfile)
const pupil3 = pupils.add(person3);
// pupils.update(pupil.id, updatedProfile);
// pupils.remove(pupil2.id)
// console.log(pupils);

const room = 236;
const groups = new Groups();
const room2 = 700;

const groupId = groups.add(room);
const groupId2 = groups.add(room2);
groups.addPupil(groupId, pupil);
groups.addPupil(groupId, pupil2);
groups.addPupil(groupId2, pupil3);
// groups.removePupil(groupId, pupil.id)
groups.update(groupId, {
    room: 269
});
// console.log(groups.read(groupId));
// console.log(groups.readAll());

const gradebooks = new Gradebooks(groups, teachers, lms);
const gradebook = gradebooks.add(groupId);
const gradebook2 = gradebooks.add(groupId2);
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
const record3 = {
    pupilId: pupil3.id,
    teacherId: teach,
    subjectId: sport.subject.id,
    lesson: 12,
    mark: 7
};

gradebooks.addRecord(gradebook, record);
gradebooks.addRecord(gradebook, record2);
gradebooks.addRecord(gradebook2, record3);
// gradebooks.clear();
// console.log(gradebooks.read(gradebook2, pupil3.id));
// console.log(gradebooks.readAll(gradebook));


