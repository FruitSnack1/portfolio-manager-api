import { Request, Response } from 'express'
import { CollectionReference, collection, getDocs } from 'firebase/firestore'
import db from '../db/db'

class AssetsController {
  private readonly colRef: CollectionReference

  constructor() {
    this.colRef = collection(db, 'assets')
  }

  async getAssets(req: Request, res: Response) {
    const col = collection(db, 'assets')
    const docs = await getDocs(col)
    const data = docs.docs.map((doc) => doc.data())
    res.json(data)
  }
}

const assetsController = new AssetsController()
export default assetsController
