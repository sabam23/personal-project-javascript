import {LMS, Subject} from './lms.mjs';
import {Teachers} from "./teachers.mjs";

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

console.log(teachers);