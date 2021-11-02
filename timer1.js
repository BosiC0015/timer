const timer = function(delay) {
  if (!(typeof delay === 'number') || delay === '') {
    return 'ERROR! Please input a number.';
  }
  if (delay < 0) {
    return 'We can\'t schedule anything in the past.';
  }
  setTimeout(() => {
    process.stdout.write('\x07');
  }, delay * 1000);
}