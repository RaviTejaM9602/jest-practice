export default function capitalizeString(string){
  if (typeof string !== 'string') {
    throw new Error('It needs to be a string');
} else return string[0].toUpperCase + string.slice(1);
};