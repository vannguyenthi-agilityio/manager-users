import ConfigHelper from '../helpers/config'

const getUsers = (offset?: number) => {
  const api = ConfigHelper.API
  return fetch(api + `${ConfigHelper.USERS}?_page=${offset || 0}`).then((res) => res.json())
}

export { getUsers }
