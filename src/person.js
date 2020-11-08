export const isAdult = (age) =>
  age >= 18
    ? "Congrats you're now and adult"
    : 'Sorry you have to do more growing';
export const canDrink = (age) =>
  age >= 21
    ? "Congrats you're Eligible to attend a pub"
    : 'You need to stay indoor with your parents';
export default (age) =>
  age >= 60
    ? "I don't get a parking ticket cause of my age"
    : 'So fair you deserve it';
