import { BASE_URL } from './constants'

export const GET = 'GET'
export const POST = 'POST'
export const PUT = 'PUT'
export const DELETE = 'DELETE'

const apiFetch = (endpoint, method = GET, body = {}, customHeaders = {}) => {
  let option = {}

  if (method !== GET) {
    option = {
      ...option,
      method: method,
      headers: {
        'Content-Type': 'application/json',
        ...customHeaders,
      },
      body: JSON.stringify(body),
    }
  }

  return fetch(BASE_URL + endpoint, option).then(handleResponse)
}

export function handleResponse(resp) {
  let respPromise = null
  if (resp.headers.get('content-type').includes('application/json')) {
    respPromise = resp.json()
  } else {
    respPromise = resp.text()
  }

  if (!resp.ok) {
    return respPromise.then(data => Promise.reject(data))
  }

  return respPromise
}

export default apiFetch
