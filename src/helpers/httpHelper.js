const base = 'https://api.immobileapp.com'
let token = ''

const makeRequest = (url, settings) => (
  fetch(base + url, {
    headers: { token },
    ...settings
  }).then(response =>
    response.json().then(data =>
      response.ok ? data : Promise.reject(data)
    )
  )
)

const makeRequestWithBody = (url, method, body) => {
  return makeRequest(url, {
    method,
    headers: { 'Content-Type': 'application/json', token },
    body: JSON.stringify(body)
  })
}

const setToken = newToken => {
  token = newToken
}

const get = url => (
  makeRequest(url)
)

const post = (url, body) => (
  makeRequestWithBody(url, 'POST', body)
)

const put = (url, body) => (
  makeRequestWithBody(url, 'PUT', body)
)

const del = url => (
  makeRequest(url, { method: 'DELETE' })
)

export default { setToken, get, post, put, delete: del }
