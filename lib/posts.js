import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

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

export function getAllMarkdowns(subDir) {
  const rootDirectory = path.join(postsDirectory, subDir)
  const fileNames = fs.readdirSync(rootDirectory)
  const allMarkdownData = fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, '')
    const fullPath = path.join(rootDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)

    return {
      id,
      ...matterResult.data
    }
  })

  return allMarkdownData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    }

    return -1
  })
}

export function getMarkdownId(subDir) {
  const rootDirectory = path.join(postsDirectory, subDir)
  const fileNames = fs.readdirSync(rootDirectory)

  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}

export function getMarkdownData(subDir, id) {
  const rootDirectory = path.join(postsDirectory, subDir)
  const fullPath = path.join(rootDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const matterResult = matter(fileContents)

  return {
    id,
    content: matterResult.content,
    ...matterResult.data
  }
}
