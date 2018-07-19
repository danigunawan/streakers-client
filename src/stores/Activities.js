import { observable, action } from 'mobx';

class Activities {
  @observable all = [
    { id: 1, title: 'Floss', user_id: 1 },
    { id: 2, title: 'Bike to Work', user_id: 1 },
    { id: 3, title: '10 Chin Ups', user_id: 1 }
  ];
}

export default new Activities();
