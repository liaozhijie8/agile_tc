import request from '@/utils/axios';
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
  const password = 111111;
  request('/user/login', {
    method: 'POST',
    body: { username, password },
  }).then(res => {
    if (res && res.code !== 200) {
      request(`/user/register`, {
        method: 'POST',
        body: { username, password },
      })
    }
  })
};
