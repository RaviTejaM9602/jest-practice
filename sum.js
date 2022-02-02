export function stringLength(someString) {
   if(someString.length >= 1 &&  someString.length < 10 ){
      return someString.length;
   } else
   throw new Error(
     'String must have at least 1 character and not more than 10'
   );
};

export function reverseString(string){
  return string.split('').reverse().join('');
};
