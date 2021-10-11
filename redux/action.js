import { TAMBAH,KURANG } from './tipe'

export const tambahCounter = (counter) => ({
    type:TAMBAH,
    data:counter
}) 

export const kurangCounter = (counter) => ({
    type:KURANG,
    data:counter
})

