const print1 = () => console.log('каждый');
const print2 = () => console.log('охотник');
const print3 = () => console.log('желает');
const print4 = () => console.log('знать');
const print5 = () => console.log('где');
const print6 = () => console.log('сидит');
const print7 = () => console.log('фазан');

const func1 = () => {
  print3();
};
const func2 = () => {
  func1();

  setTimeout(() => {
    print7();
  }, 100);
};

const func3 = () => {
  setTimeout(() => {
    func2();
    print4();
  }, 25);

  print2();
};

setTimeout(() => {
  print5();

  setTimeout(() => {
    print6();
  }, 75);
}, 50);

print1();

func3();
