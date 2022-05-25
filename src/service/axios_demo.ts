import axios from 'axios';

axios
  .all([
    axios.get('http://httpbin.org/get', {
      params: {
        acwink: '666'
      }
    }),
    axios.get('http://httpbin.org/get', {
      params: {
        acwink: '777'
      }
    })
  ])

  .then((res) => {
    console.log(res);
  });

// Promise 本身是有类型的
// new Promise<string>((resolve, reject) => {
//   resolve('abc');
// }).then((res) => {
//   console.log(res.length);
// });
