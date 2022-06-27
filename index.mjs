import {LMS, Subject} from './lms.mjs';

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

console.log(lms);