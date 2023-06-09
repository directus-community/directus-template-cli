import {api} from '../api'
export default async function loadSettings(settingsObj: any) {
  try {
    const {data} = await api.patch('settings', settingsObj)
  } catch (error) {
    console.log('Error loading settings', error.response.data.errors)
  }
}
