export class Groups {
    groups = new Map();
    add (room) {
        const rooms = {};
        if (typeof room !== 'number') {
            throw TypeError('Type should be a number!');
        }
        rooms.id = Math.floor(Math.random() * 15000).toString();
        rooms.room = room;
        this.groups.set(rooms.id, rooms);
        rooms.pupils = [];
        return rooms.id;
    }

    addPupil (id, pupil) {
        if (this.groups.has(id) === false){
            throw Error('Invalid Group Id');
        }

        let pupils = this.groups.get(id).pupils;
        pupils.push(pupil);
    }

    removePupil (groupid,pupilid) {
        if (this.groups.has(groupid) === false) {
            throw new Error('Invalid iD');
        }

        let c = 0;
        for (let i of this.groups.get(groupid).pupils) {
            if (i.id === pupilid) {
                this.groups.get(groupid).pupils.splice(c,1);
            }
            c++;
        }
    }

    read (id) {
        if (this.groups.has(id) === false) {
            throw new Error('Invalid ID');
        }

        return this.groups.get(id);
    }

    update (id, newData) {
        this.groups.get(id).room = newData.room;
        return id;
    }
}