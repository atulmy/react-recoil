// Imports
import { atom } from 'recoil'

export const commonNotification = atom({
  key: 'commonNotification',
  default: {
    message: 'test',
    isVisible: true,
  },
})
