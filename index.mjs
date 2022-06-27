import {LMS, Subject} from './lms.mjs';

const history = new Subject({
    title: 'History',
    lessons: 24
});

const lms = new LMS();
lms.add(history);
lms.remove(history.id);

console.log(lms);