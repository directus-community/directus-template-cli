import {api} from '../api'
import loadToDestination from '../utils/load-to-destination'

async function removeallPublicPermissions() {
  const {data}: {data} = await api.get('permissions?filter[role][_null]=true&limit=-1')
  const ids = data.data.map(i => i.id)
  if (!ids) return
  await api.delete('permissions', {
    data: ids,
  })
}

export default async function loadPublicPermissions(roles: any) {
  await removeallPublicPermissions()
  await loadToDestination('permissions', roles)
}
