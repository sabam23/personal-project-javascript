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
// const data2 = {
//     name: {
//         first: 'Test',
//         last: 'Doe'
//     },
//     dateOfBirth: '12/13/14',
//     emails: [
//         {
//             email: 'johndoe@gmail.com',
//             primary: false
//         }
//     ],
//     phones: [
//         {
//             phone: '551315606',
//             primary: false
//         }
//     ],
//     sex: 'Female',
//     subjects: [
//         {
//             subject: 'Math'
//         }
//     ]
// }
const teachers = new Teachers();
const teacherId = teachers.add(data);
// teachers.update(teacherId, data2);
teachers.remove(teacherId);

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
pupils.update(pupil, updatedProfile)
// pupils.remove(pupil)

const room = 236;
const groups = new Groups();


// Create a new group. add methods takes integer as a parameter. returns id of group
const groupId = groups.add(room);
groups.addPupil(groupId, pupil);
groups.removePupil(groupId, pupil.id)
groups.update(groupId, {
    room: 239
});
console.log(groups.read(groupId));