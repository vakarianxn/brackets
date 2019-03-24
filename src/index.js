module.exports = function check(str, bracketsConfig) {
  let boolean = 0;
  config_length = bracketsConfig.length;
  str_array = str.split('');
  str_array_length = str_array.length;

  let count = 0;

  for (let i = 0; i < config_length; i++) {
    let temp = bracketsConfig[i];
    let br_left = temp[0];
    let br_right = temp[1];

    for (let p = 0; p < str_array_length; p++) {
      if (str_array[p] == br_left) {
        count += 1;
      };
      if (str_array[p] == br_right) {
        count -= 1;
      };
      if (count < 0) {
        boolean = false;
        break;
      };
    };
    if (count == 0) {
      boolean = true;
    };
  };

  return boolean;
};
