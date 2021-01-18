function api(url, { body, headers, ...restParams }) {
  return fetch(url, {
    headers: {
      "content-type": "application/json",
      ...headers,
    },
    body: body ? JSON.stringify(body) : undefined,
    ...restParams,
  })
    .then((res) => {
      if (res.status >= 400) {
        alert(res.status)
        return Promise.reject(res)
      }
      return res
    })
    .then((res) => res.json())
}

export default api
