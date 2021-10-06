// times util
export default function (num) {
  return (cb) => {
    for (var i = 0; i < num; i++) {
      cb(i);
    }
  };
}
