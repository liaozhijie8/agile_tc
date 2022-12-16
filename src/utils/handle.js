import request from '@/utils/axios';
import md5 from 'md5'
import utils from './index.js';
// get urlInfo
export const getUrlInfo = url => {
  if (url.indexOf('?') != -1) {
    let arr = url.slice(url.indexOf('?') + 1);
    arr = arr.toString();
    return decodeURIComponent(arr);
  } else {
    return null;
  }
};

// login
export const Login = username => {
  console.log(username)
  const password = 111111
  request('/user/login', {
    method: 'POST',
    body: { username, password },
  }).then(res => {
    console.log(res)
    if (res && res.code !== 200) {
      request(`/user/register`, {
        method: 'POST',
        body: { username, password },
      }).then(() => {
        request('/user/login', {
          method: 'POST',
          body: { username, password },
        }).then(() => {
          window.location.href = utils.getQueryString('jumpto')
        })
      })
    } else {
      window.location.href = utils.getQueryString('jumpto')
    }
  })
};
