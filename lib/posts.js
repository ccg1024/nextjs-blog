import fs from 'fs'
import path from 'path'

const postsDirectory = path.join(process.cwd(), 'posts')

export function getIndexInfoData() {
  const filePath = path.join(postsDirectory, 'indexInfo.md')
  try {
    const fileContents = fs.readFileSync(filePath, 'utf8')
    return {
      infoData: fileContents
    }
  } catch (err) {
    console.log(err)
  }
}
