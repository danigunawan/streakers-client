import { observable, action } from 'mobx';

class Activities {
  @observable all = [
    { id: 1, title: 'Floss', user_id: 1},
    { id: 2, title: 'Bike to Work', user_id: 1},
    { id: 3, title: '10 Chin Ups', user_id: 1}
  ];

  @action add(data) {
    const existing = this.all;
    this.all = existing.concat(data);
  }

  @action find(activityId) {
    return (
      this.all.slice().filter(
        c => c.id === parseInt(activityId, 10)
      )[0]
    );
  }

  @action remove(activityId) {
    const existing = this.all;
    this.all = existing.filter(
      c => c.id !== activityId
    );
  }
}

export default new Activities();
